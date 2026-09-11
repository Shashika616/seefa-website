# syntax=docker/dockerfile:1.7

# ---------------------------------------------------------------------------
# Seefa Business Solutions website
# Multi-stage build producing a minimal Next.js standalone runtime image.
# Build:  docker build -t seefalk-web .
# Run:    docker run --rm -p 3000:3000 seefalk-web
# ---------------------------------------------------------------------------

ARG NODE_VERSION=22-alpine

# --- 1. deps: install production-resolvable dependencies only ---------------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
# libc6-compat keeps native/glibc-linked binaries happy on Alpine.
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# --- 2. builder: compile the Next.js app ------------------------------------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Baked into the client bundle at build time, so it must be present here.
ARG NEXT_PUBLIC_SITE_URL=https://www.seefalk.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN npm run build

# --- 3. runner: minimal runtime ---------------------------------------------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as an unprivileged user rather than root.
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# `output: "standalone"` emits server.js plus only the traced node_modules.
# public/ and .next/static are not included by the tracer and are copied here.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
