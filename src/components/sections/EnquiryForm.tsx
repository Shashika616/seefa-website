"use client";
import { useId, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { CTA_TOPICS, ENQUIRY_TOPICS, SERVICES, SOLUTIONS } from "@/lib/constants";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const GENERAL = "General enquiry";

/** Field length caps. Mail apps can drop over-long mailto: links, so the message is capped too. */
const MAX = { name: 100, company: 120, email: 254, phone: 30, message: 1500 } as const;

/** Single-line value: no control characters (so no line breaks), trimmed and capped. */
const oneLine = (value: string, max: number) =>
  value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);

/**
 * Structured enquiry that opens the visitor's email app with the message
 * already composed and addressed. There is no server-side mail backend, so
 * the form says so plainly instead of pretending to have sent anything.
 *
 * The topic is pre-selected from ?topic=, which every "Enquire" and "Talk to
 * us" link on the site sets, so the visitor's intent carries through. Only
 * topics in ENQUIRY_TOPICS are accepted: anything else falls back to a general
 * enquiry, so a crafted link cannot put its own text into a form on this
 * domain. Everything here is rendered as React text and URL-encoded into the
 * mailto: link, so none of it can inject markup or extra email headers.
 */
export default function EnquiryForm() {
  const params = useSearchParams();
  const requested = params.get("topic")?.trim() ?? "";
  const incoming = ENQUIRY_TOPICS.includes(requested) ? requested : "";
  const id = useId();

  const topics = useMemo(() => {
    const base = [GENERAL, ...SOLUTIONS.map((s) => s.title), ...SERVICES.map((s) => s.title), ...CTA_TOPICS];
    // An accepted topic from an industry link is not in the base list; keep it selectable.
    return incoming && !base.includes(incoming) ? [incoming, ...base] : base;
  }, [incoming]);

  const [topic, setTopic] = useState(incoming || GENERAL);
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: keyof typeof MAX) => oneLine(String(data.get(k) ?? ""), MAX[k]);

    const name = get("name");
    const company = get("company");
    const chosen = topics.includes(topic) ? topic : GENERAL;
    const subject = `Enquiry: ${chosen}${company ? ` (${company})` : ""}`;
    const details = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${get("email")}`,
      get("phone") && `Phone: ${get("phone")}`,
      `Topic: ${chosen}`,
    ].filter(Boolean);
    // The message keeps its line breaks; it only goes into the body.
    const message = String(data.get("message") ?? "").trim().slice(0, MAX.message);
    const body = `${details.join("\n")}\n\n${message}`;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field =
    "w-full rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-ink outline-none transition-shadow placeholder:text-slate-400 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/15";
  const label = "mb-1.5 block text-sm font-semibold text-slate-700";

  if (opened) {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center rounded-3xl border border-slate-900/5 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <CheckCircle2 size={24} />
        </span>
        <h3 className="text-2xl font-bold">Your email is ready to send</h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          We opened your email app with your enquiry filled in. Press send there and we&apos;ll reply as soon as we can.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Nothing opened? Email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-ink underline decoration-slate-900/20 underline-offset-4">
            {SITE.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setOpened(false)}
          className="mt-8 text-sm font-semibold text-brand-purple hover:underline"
        >
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-900/5 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10"
      aria-describedby={`${id}-note`}
    >
      <h2 className="text-2xl font-bold sm:text-3xl">Send us an enquiry</h2>
      <p className="mt-2 text-slate-600">Tell us what you need and we&apos;ll get back to you.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Name <span className="text-brand-orange">*</span></label>
          <input id={`${id}-name`} name="name" required maxLength={MAX.name} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-company`} className={label}>Company</label>
          <input id={`${id}-company`} name="company" maxLength={MAX.company} autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>Email <span className="text-brand-orange">*</span></label>
          <input id={`${id}-email`} name="email" type="email" required maxLength={MAX.email} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" maxLength={MAX.phone} autoComplete="tel" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-topic`} className={label}>What are you interested in?</label>
          <select
            id={`${id}-topic`}
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={cn(field, "appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={label}>Message <span className="text-brand-orange">*</span></label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            maxLength={MAX.message}
            rows={5}
            placeholder="A little about your business and what you'd like the software to do."
            className={cn(field, "resize-y")}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${id}-note`} className="flex items-center gap-2 text-sm text-slate-500">
          <Mail size={15} className="shrink-0" />
          Opens your email app with your enquiry ready to send.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-slate-900/20"
        >
          Send enquiry
          <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
