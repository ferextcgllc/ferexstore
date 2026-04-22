import { ShieldCheck, Truck, BadgeDollarSign, Instagram, ChevronRight, Star, CheckCircle2, Package, FileText, Camera, CreditCard, Sparkles, Gem, ArrowUpRight, Clock3 } from "lucide-react";

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

const recentDeals = [
  { title: "High-end singles lot", value: "$1,240", note: "Reviewed, confirmed, paid after inspection" },
  { title: "Fusion World slab deal", value: "$780", note: "Tracked shipment and clean payout flow" },
  { title: "Masters slab submission", value: "$310", note: "Fast inspection and same-window payment" },
];

export default function FerexTCGEliteCardShopSite() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-amber-300 selection:text-black">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_22%),linear-gradient(to_bottom,#09090b,#0e1014_42%,#0a0b0d)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-amber-300/20 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <img src="logo.png" alt="FerexTCG logo" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">FerexTCG</div>
              <div className="text-xs text-zinc-500">Modern card shop buylist intake</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
            <a href="#rates" className="transition hover:text-white">Rates</a>
            <a href="#process" className="transition hover:text-white">How it works</a>
            <a href="#intake" className="transition hover:text-white">Intake</a>
            <a href="#proof" className="transition hover:text-white">Recent deals</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a
            href="#intake"
            className="rounded-2xl bg-gradient-to-r from-amber-300 to-amber-400 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/10 transition hover:brightness-105"
          >
            Start Intake
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-16 xl:grid-cols-[1.05fr_0.95fr] xl:pt-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Elite card shop intake
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight lg:text-7xl">
              A premium intake site that feels built for
              <span className="mt-2 block bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                serious card deals.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Cleaner customer flow, stronger trust cues, and a modern storefront style that makes submissions feel easier, more legitimate, and more appealing from the first click.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#intake"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-300 to-amber-400 px-6 py-4 text-sm font-semibold text-black shadow-xl shadow-amber-500/10 transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Submit Intake
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#rates"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                View Rates
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <Badge text="Singles $20+ only" />
              <Badge text="Shipping covered up to $15" />
              <Badge text="Paid within 2 business days" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <MetricCard label="Submission flow" value="Clean" sub="Designed to convert" />
              <MetricCard label="Store feel" value="Premium" sub="Modern card shop look" />
              <MetricCard label="Customer trust" value="Higher" sub="Professional terms + structure" />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-2xl shadow-black/40">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="grid min-h-[500px] xl:grid-cols-[1.06fr_0.94fr]">
                <div className="border-b border-white/10 p-7 xl:border-b-0 xl:border-r">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3">
                      <Gem className="h-5 w-5 text-amber-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Featured layout</div>
                      <div className="mt-1 text-xl font-semibold">Storefront feel, not a basic form page</div>
                    </div>
                  </div>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                    Premium spacing, subtle depth, and a smoother deal path built around real customer questions and seller concerns.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <GlassPill title="Fast intake" subtitle="Less friction" />
                    <GlassPill title="Clear terms" subtitle="More trust" />
                    <GlassPill title="Visual polish" subtitle="More legit" />
                    <GlassPill title="Deal-ready" subtitle="Built to convert" />
                  </div>

                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Seller terms</div>
                        <div className="mt-2 text-lg font-semibold">Keep expectations clear upfront</div>
                      </div>
                      <ShieldCheck className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                      <div>Cards are sent first for quality inspection.</div>
                      <div>Singles must be $20+ in market value.</div>
                      <div>Final payout may change after inspection.</div>
                      <div>All sales are final once payment is sent.</div>
                    </div>
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
                    <div className="mt-5 text-2xl font-medium leading-9 text-white">
                      “This feels like a real high-end card shop website instead of a quick reseller page.”
                    </div>
                  </div>

                  <div className="mt-10 grid gap-3">
                    <MiniStat label="Instagram" value="@ferextcg" />
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
          subtitle="Organized like a premium buylist so customers can scan quickly and feel confident about your payout structure."
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
          subtitle="The process is framed to feel smooth for customers while still protecting your side of the transaction."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ProcessCard icon={FileText} title="1. Submit intake" text="Customer sends their list, notes, and photos through one polished form." />
            <ProcessCard icon={Camera} title="2. Review cards" text="You review the submission, confirm the deal, and clarify any needed details." />
            <ProcessCard icon={Package} title="3. Ship securely" text="Customer ships first with tracking. Shipping is reimbursed up to $15." />
            <ProcessCard icon={CreditCard} title="4. Get paid" text="Payment is sent within up to 2 business days after inspection." />
          </div>
        </Section>

        <Section
          id="intake"
          eyebrow="Intake"
          title="Submit your cards"
          subtitle="This version is more user-friendly, cleaner to scan, and more appealing for higher-end card submissions."
        >
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[34px] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/20 md:p-8">
              <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Customer Intake Form</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
                    Structured like a premium card shop submission page with the right amount of detail and less visual clutter.
                  </p>
                </div>
                <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-300">
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
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300 transition hover:border-amber-300/30 hover:bg-white/[0.07] hover:text-white"
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
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-white">Seller acknowledgment</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Required</div>
                  </div>
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
                    className="rounded-2xl bg-gradient-to-r from-amber-300 to-amber-400 px-5 py-3.5 text-sm font-semibold text-black shadow-xl shadow-amber-500/10 transition hover:brightness-105"
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
                text="Clear terms, shipping rules, and payment timing make the site feel organized, safer, and more credible."
              />
              <FeaturePanel
                title="Shipping Details"
                text="Cards should be sleeved, protected, and shipped with tracking. Shipping reimbursement is up to $15 with receipt."
              />
              <FeaturePanel
                title="Payout Timing"
                text="After inspection is complete, payment is issued within up to 2 business days."
              />
              <div className="rounded-[34px] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-white/[0.02] to-zinc-950 p-6">
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
          id="proof"
          eyebrow="Recent Deals"
          title="Add proof that feels real"
          subtitle="A stronger card shop site shows activity, volume, and professionalism. These are placeholders you can replace with actual deals or vouches."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {recentDeals.map((deal) => (
              <div key={deal.title} className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-semibold">{deal.title}</div>
                  <ArrowUpRight className="h-5 w-5 text-zinc-500" />
                </div>
                <div className="mt-5 text-3xl font-semibold text-white">{deal.value}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{deal.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Answers up front make the site feel smoother and reduce repeat DMs from sellers."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-semibold">{item.q}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-white/[0.04] via-amber-300/[0.08] to-white/[0.04] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
                  <Clock3 className="h-3.5 w-3.5 text-amber-300" />
                  Launch-ready
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-5xl">
                  This now feels like a real modern card shop site.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                  Add your real logo file, real form link, and real deal screenshots and it will feel even more established.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="#intake" className="rounded-2xl bg-gradient-to-r from-amber-300 to-amber-400 px-6 py-4 text-center text-sm font-semibold text-black transition hover:brightness-105">
                  Open Intake
                </a>
                <a href="#proof" className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-white/[0.08]">
                  View Recent Deals
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src="logo.png" alt="FerexTCG logo" className="h-7 w-auto object-contain" />
              </div>
              <div className="text-lg font-semibold">FerexTCG</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              Dragon Ball Fusion World buylist intake with a stronger, more polished card shop presence.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Quick Links</div>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <a href="#rates" className="block hover:text-white">Rates</a>
              <a href="#process" className="block hover:text-white">How it works</a>
              <a href="#intake" className="block hover:text-white">Intake</a>
              <a href="#proof" className="block hover:text-white">Recent deals</a>
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

function MetricCard({ label, value, sub }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-zinc-500">{sub}</div>
    </div>
  );
}

function GlassPill({ title, subtitle }) {
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
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/90 shadow-xl shadow-black/20">
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
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.045]">
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
