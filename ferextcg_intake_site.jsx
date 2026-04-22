import { ShieldCheck, Truck, BadgeDollarSign, Instagram, ChevronRight, Star, CheckCircle2, Package, FileText, Camera, CreditCard } from "lucide-react";

const rates = {
  singles: [
    ["$20–$50", "75%"],
    ["$51–$149", "78%"],
    ["$150–$249", "81%"],
    ["$250–$999", "83%"],
  ],
  slabs: [
    ["$50–$249", "78%"],
    ["$249–$499", "80%"],
    ["$500+", "85%"],
  ],
  masters: [["$50–$300", "70% · Slabs Only"]],
};

const faqs = [
  {
    q: "Do I send cards first?",
    a: "Yes. Cards are sent first for quality inspection. Once inspection is complete, payment is issued within up to 2 business days.",
  },
  {
    q: "Do you cover shipping?",
    a: "Yes. FerexTCG covers shipping costs up to $15 with proof of receipt.",
  },
  {
    q: "What singles do you accept?",
    a: "We currently accept singles with a market value of $20 or more.",
  },
  {
    q: "Can final payout change?",
    a: "Yes. Final payout may adjust based on condition, authenticity, and market movement at the time of inspection.",
  },
];

export default function FerexTCGModernCardShopSite() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_28%),linear-gradient(to_bottom,#0a0a0b,#0f1013)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-sm font-semibold text-amber-300">
              F
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">FerexTCG</div>
              <div className="text-xs text-zinc-400">Dragon Ball Fusion World Buylist</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
            <a href="#rates" className="transition hover:text-white">Rates</a>
            <a href="#process" className="transition hover:text-white">How it works</a>
            <a href="#intake" className="transition hover:text-white">Intake</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a
            href="#intake"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Start Intake
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300">
              Modern Card Shop Intake
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
              A cleaner way for customers to
              <span className="block bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                submit cards and close deals.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Professional intake flow for singles, slabs, and masters with transparent rates, seller acknowledgment, shipping instructions, and a polished storefront feel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#intake"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-4 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Submit Intake
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#rates"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Rates
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <Badge text="Singles $20+ only" />
              <Badge text="Shipping covered up to $15" />
              <Badge text="Paid within 2 business days" />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl shadow-black/30">
              <div className="grid min-h-[420px] lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col justify-between border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Featured Buylist</div>
                    <div className="mt-4 text-3xl font-semibold leading-tight">Built to feel like a real storefront, not a form dump.</div>
                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                      Clean structure, premium spacing, and a smoother customer path from first visit to deal confirmation.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <StoreCard title="Fast intake" subtitle="Simple submission flow" />
                    <StoreCard title="Clear terms" subtitle="Less back and forth" />
                    <StoreCard title="Seller trust" subtitle="Professional feel" />
                    <StoreCard title="Deal-ready" subtitle="Modern card shop vibe" />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center gap-2 text-amber-300">
                      <Star className="h-4 w-4 fill-amber-300" />
                      <Star className="h-4 w-4 fill-amber-300" />
                      <Star className="h-4 w-4 fill-amber-300" />
                      <Star className="h-4 w-4 fill-amber-300" />
                      <Star className="h-4 w-4 fill-amber-300" />
                    </div>
                    <div className="mt-4 text-xl font-medium leading-8 text-white">
                      “The layout feels way more legit and makes the whole process easier to trust.”
                    </div>
                  </div>

                  <div className="mt-10 space-y-4">
                    <MiniStat label="Contact" value="@ferextcg" />
                    <MiniStat label="Shipping" value="Up to $15 reimbursed" />
                    <MiniStat label="Payment" value="Up to 2 business days" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-sm text-zinc-300 md:grid-cols-4">
            <TrustPill icon={ShieldCheck} text="Professional intake experience" />
            <TrustPill icon={Truck} text="Simple shipping expectations" />
            <TrustPill icon={BadgeDollarSign} text="Transparent payout structure" />
            <TrustPill icon={CheckCircle2} text="Seller acknowledgment included" />
          </div>
        </section>

        <Section
          id="rates"
          eyebrow="Rates"
          title="Current Dragon Ball Fusion World Rates"
          subtitle="Clear, readable, and organized to help customers understand your buylist at a glance."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <RateCard title="Singles" subtitle="Singles accepted at $20+ only" rows={rates.singles} />
            <RateCard title="Slabs" subtitle="Based on recent comps" rows={rates.slabs} />
            <RateCard title="Masters" subtitle="Slabs only" rows={rates.masters} />
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Process"
          title="How the deal works"
          subtitle="Designed to feel simple for the customer while still protecting your business."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ProcessCard icon={FileText} title="1. Submit intake" text="Customer sends their list, notes, and photos through one clean form." />
            <ProcessCard icon={Camera} title="2. Review cards" text="You review the submission, confirm the deal, and answer any questions." />
            <ProcessCard icon={Package} title="3. Ship securely" text="Customer ships first with tracking. Shipping is reimbursed up to $15." />
            <ProcessCard icon={CreditCard} title="4. Get paid" text="Payment is sent within up to 2 business days after inspection." />
          </div>
        </Section>

        <Section
          id="intake"
          eyebrow="Intake"
          title="Submit your cards"
          subtitle="Cleaner structure, fewer distractions, and a more premium customer experience."
        >
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/20 md:p-8">
              <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Customer Intake Form</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
                    This layout keeps everything easy to follow while still looking premium and trustworthy.
                  </p>
                </div>
                <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Faster reply: @ferextcg
                </div>
              </div>

              <form className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" placeholder="Your full name" />
                <Field label="Email Address" placeholder="you@example.com" />
                <Field label="Phone Number" placeholder="Optional" />
                <Field label="City / State" placeholder="City / State" />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-zinc-200">What are you submitting?</label>
                  <div className="grid gap-3 md:grid-cols-3">
                    {['Singles', 'Slabs', 'Masters (Slabs Only)'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Estimated Total Value ($)" placeholder="0.00" />
                <Field label="TCGplayer / Collectr Link" placeholder="Paste your list link" />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-zinc-200">Card Notes</label>
                  <textarea
                    rows={5}
                    placeholder="Key cards, grades, or condition notes"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/40"
                  />
                </div>

                <div className="md:col-span-2 rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-10 text-center text-sm text-zinc-500">
                  Upload photos of higher-end cards or slabs
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-200">Preferred Payment Method</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-amber-300/40">
                    <option>Zelle</option>
                    <option>Cash (Local Meetup)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300">
                  Singles must be <span className="font-medium text-white">$20+</span> in market value.
                </div>

                <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-medium text-white">Seller acknowledgment</div>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                    <Check text="I understand I must send cards first for quality inspection with tracking." />
                    <Check text="I acknowledge all singles submitted are $20+ in market value." />
                    <Check text="I understand shipping is covered up to $15 and payment is sent within up to 2 business days after inspection." />
                    <Check text="I confirm all items are authentic, owned by me, and final payout may change based on inspection and market movement." />
                  </div>
                </div>

                <Field label="Digital Signature" placeholder="Type full name" />
                <Field label="Date" placeholder="MM/DD/YYYY" />

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    Submit Intake
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                  >
                    Download Agreement PDF
                  </button>
                </div>
              </form>
            </div>

            <div className="grid gap-6">
              <FeaturePanel
                title="Trust & Protection"
                text="Clear terms, shipping rules, and payment timing make the deal feel organized and professional."
              />
              <FeaturePanel
                title="Shipping Details"
                text="Cards should be sleeved, protected, and shipped with tracking. Shipping reimbursement is up to $15 with receipt."
              />
              <FeaturePanel
                title="Payout Timing"
                text="After inspection is complete, payment is issued within up to 2 business days."
              />
              <div className="rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-zinc-950 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Need a faster reply?</div>
                    <div className="text-sm text-zinc-400">DM us on Instagram</div>
                  </div>
                </div>
                <div className="mt-6 text-3xl font-semibold tracking-tight">@ferextcg</div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Answers up front help the site feel smoother and reduce repeat questions."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-semibold">{item.q}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mt-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">FerexTCG</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
              Dragon Ball Fusion World buylist intake with a more polished storefront experience.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Quick Links</div>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <a href="#rates" className="block hover:text-white">Rates</a>
              <a href="#process" className="block hover:text-white">How it works</a>
              <a href="#intake" className="block hover:text-white">Intake</a>
              <a href="#faq" className="block hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <div>Instagram: @ferextcg</div>
              <div>Shipping covered up to $15</div>
              <div>Payment within up to 2 business days</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-8 text-zinc-400">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function Badge({ text }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{text}</div>
  );
}

function StoreCard({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-sm font-medium text-white">{title}</div>
      <div className="mt-1 text-xs text-zinc-500">{subtitle}</div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function TrustPill({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3">
      <div className="rounded-xl bg-white/8 p-2">
        <Icon className="h-4 w-4 text-zinc-200" />
      </div>
      <div>{text}</div>
    </div>
  );
}

function RateCard({ title, subtitle, rows }) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950/90 shadow-xl shadow-black/20">
      <div className="border-b border-white/10 px-6 py-5">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map(([range, rate]) => (
          <div key={range} className="grid grid-cols-2 px-6 py-5 text-sm">
            <div className="text-zinc-400">{range}</div>
            <div className="text-right text-base font-semibold text-white">{rate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06]">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-200">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/40"
      />
    </div>
  );
}

function Check({ text }) {
  return (
    <label className="flex items-start gap-3">
      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent" />
      <span>{text}</span>
    </label>
  );
}

function FeaturePanel({ title, text }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
      <div className="text-xl font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}
