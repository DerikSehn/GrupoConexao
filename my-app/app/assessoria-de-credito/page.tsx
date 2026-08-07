"use client"

import { assessoriaCreditoData } from "@/data/assessoria-credito"
import { WhatsAppLeadForm } from "@/components/form/WhatsAppLeadForm"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  FileText,
  Landmark,
  ShieldCheck,
  WalletCards,
} from "lucide-react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const startIcons = [ClipboardCheck, Building2, FileText, Landmark]
const solutionIcons = [WalletCards, BriefcaseBusiness, Building2, ShieldCheck]

export default function AssessoriaDeCreditoPage() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? false : { opacity: 0, y: 28 }

  return (
    <main className="overflow-x-clip bg-white text-[#1f1f1f]">
      <section className="relative isolate overflow-hidden bg-[#060606] pb-20 pt-36 text-white lg:min-h-[760px] lg:pb-28 lg:pt-40">
        <Image
          src={assessoriaCreditoData.hero.image}
          alt={assessoriaCreditoData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_45%,rgba(255,107,0,0.46),transparent_28%),linear-gradient(90deg,#060606_0%,rgba(6,6,6,0.94)_42%,rgba(6,6,6,0.34)_100%)]" />
        <div className="pointer-events-none absolute right-[8%] top-[12%] h-[31rem] w-[31rem] rounded-full border border-[#ff8833]/25" />
        <div className="pointer-events-none absolute right-[16%] top-[22%] h-[22rem] w-[22rem] rounded-full border border-white/10" />

        <div className="container relative mx-auto grid items-center gap-12 px-5 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
          <motion.div
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              <span className="h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_18px_rgba(255,107,0,0.75)]" />
              {assessoriaCreditoData.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-7xl">
              Estratégia de <span className="text-[#ff6b00]">crédito</span> para avançar com segurança.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
              {assessoriaCreditoData.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#diagnostico"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#44cf6c] px-6 text-sm font-bold text-[#060606] shadow-[0_14px_34px_rgba(68,207,108,0.28)] transition-transform hover:scale-[1.02]"
              >
                Começar diagnóstico <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={assessoriaCreditoData.callToAction.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-[#ff6b00] px-6 text-sm font-bold text-[#ff8833] transition-colors hover:bg-[#ff6b00] hover:text-white"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={prefersReducedMotion ? false : { opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.18 }}
            className="relative border border-white/15 bg-[#121212]/75 p-7 backdrop-blur-xl sm:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff8833]">Da análise à estruturação</p>
            <p className="mt-5 text-2xl font-bold leading-tight text-white">
              Crédito não começa na proposta. Começa com informação organizada e objetivo claro.
            </p>
            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-7">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-white/50">Público</dt>
                <dd className="mt-2 text-sm font-bold text-white">Pessoas e empresas</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-white/50">Abordagem</dt>
                <dd className="mt-2 text-sm font-bold text-white">Consultiva e personalizada</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-white/50">Processo</dt>
                <dd className="mt-2 text-sm font-bold text-white">Diagnóstico START</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-white/50">Conexões</dt>
                <dd className="mt-2 text-sm font-bold text-white">Bancos e fintechs</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f7f7f5] py-20 lg:py-28">
        <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <motion.div
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b00]">{assessoriaCreditoData.start.title}</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#1f1f1f] sm:text-5xl">
              Crédito com uma rota definida antes da próxima decisão.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#1f1f1f]/70">
              {assessoriaCreditoData.start.description}
            </p>
          </motion.div>

          <div className="border-l border-black/10">
            {assessoriaCreditoData.start.steps.map((step, index) => {
              const Icon = startIcons[index]

              return (
                <motion.article
                  key={step.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 34 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-5 border-b border-black/10 px-6 py-7 last:border-b-0 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1f1f1f] text-[#ff8833]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1f1f1f]">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#1f1f1f]/65">{step.description}</p>
                  </div>
                  <span className="text-2xl font-extrabold text-[#ff6b00]/80">{step.number}</span>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-5 lg:px-8">
          <motion.div
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-w-3xl flex-col gap-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b00]">Linhas de atuação</p>
            <h2 className="text-4xl font-extrabold leading-tight text-[#1f1f1f] sm:text-5xl">
              Soluções que acompanham o estágio do seu negócio e da sua vida financeira.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {assessoriaCreditoData.solutions.map((solution, index) => {
              const Icon = solutionIcons[index]

              return (
                <motion.article
                  key={solution.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ type: "spring", stiffness: 160, damping: 22, delay: index * 0.08 }}
                  className="group border border-black/10 bg-[#fafafa] p-7 transition-colors hover:border-[#ff6b00] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#ff6b00] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-right text-xs font-bold uppercase tracking-[0.14em] text-[#1f1f1f]/45">
                      {solution.category}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold text-[#1f1f1f]">{solution.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#1f1f1f]/68">{solution.description}</p>
                  <ul className="mt-7 grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">
                    {solution.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-[#1f1f1f]/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff6b00]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="bg-[#1f1f1f] py-20 text-white lg:py-24">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto flex flex-col justify-between gap-10 px-5 lg:flex-row lg:items-end lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8833]">Próximo passo</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">{assessoriaCreditoData.callToAction.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{assessoriaCreditoData.callToAction.description}</p>
          </div>
          <div className="w-full max-w-lg rounded-md border border-white/15 bg-white p-7 text-[#1f1f1f] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <WhatsAppLeadForm
              context="uma assessoria de crédito"
              title="Envie seu diagnóstico"
              description="Ao enviar, uma conversa com as informações preenchidas será aberta no WhatsApp."
              submitLabel="Continuar no WhatsApp"
            />
          </div>
        </motion.div>
      </section>
    </main>
  )
}