"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import {
    ArrowRight,
    BadgeCheck,
    BriefcaseBusiness,
    ShieldCheck,
    Sparkles,
    WalletCards,
    Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

const whatsappPhone = "5551981728039"
const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "Olá! Gostaria de entender qual solução do Grupo Conexão é ideal para mim."
)}`

const highlights = [
    {
        icon: BadgeCheck,
        title: "Atendimento consultivo",
        description: "Especialistas prontos para ajudar.",
    },
    {
        icon: Zap,
        title: "Processos ágeis",
        description: "Menos burocracia, mais clareza.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança",
        description: "Proteção em cada etapa.",
    },
]

const floatingBenefits = [
    {
        icon: BriefcaseBusiness,
        title: "Soluções integradas",
        description: "Para pessoas e empresas.",
    },
    {
        icon: Sparkles,
        title: "Atendimento humano",
        description: "Orientação de ponta a ponta.",
    },
    {
        icon: ShieldCheck,
        title: "Dados protegidos",
        description: "Privacidade como prioridade.",
    },
]

const productIcons = {
    seguros: ShieldCheck,
    "pessoa-juridica": BriefcaseBusiness,
    "credito-consignado": WalletCards,
}

export function Hero() {
    const prefersReducedMotion = useReducedMotion()
    const pointerX = useMotionValue(0)
    const pointerY = useMotionValue(0)
    const visualX = useSpring(pointerX, { stiffness: 200, damping: 30 })
    const visualY = useSpring(pointerY, { stiffness: 200, damping: 30 })

    const handleVisualPointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion) return

        const bounds = event.currentTarget.getBoundingClientRect()
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18)
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14)
    }

    const resetVisualPointer = () => {
        pointerX.set(0)
        pointerY.set(0)
    }

    return (
        <section className="relative isolate overflow-visible bg-white text-white">
            <div className="relative overflow-hidden bg-[#060606] pt-28 sm:pt-32 lg:h-[90vh] lg:max-h-[900px] lg:pt-24">
                <div
                    className="pointer-events-none absolute inset-0 overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero/background-widescreen.png')" }}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.45)_0%,transparent_58%,rgba(6,6,6,0.12)_100%)]" />
                    <div className="absolute right-[9%] top-[19%] h-[30rem] w-[30rem] rounded-full bg-[#ff6b00]/20 blur-3xl" />
                    <div className="absolute right-[11%] top-[13%] h-[34rem] w-[34rem] rounded-full border border-[#ff8833]/20" />
                    <div className="absolute right-[19%] top-[20%] h-[25rem] w-[25rem] rounded-full border border-white/10" />
                </div>

                <div className="container relative mx-auto grid min-h-[650px] grid-cols-[minmax(0,1fr)] items-start gap-8 px-5 pb-2 lg:h-full lg:min-h-0 lg:grid-cols-[1.22fr_0.78fr] lg:gap-4 lg:px-8 lg:pb-28">
                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 min-w-0 max-w-[660px] text-center lg:text-left"
                    >
                        <p className="hero-reveal mb-3 flex flex-wrap items-center justify-center gap-2 text-xs font-bold tracking-[0.12em] text-white/75 sm:text-sm lg:justify-start">
                            <span className="h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_0_5px_rgba(68,207,108,0.12)]" />
                            CONECTANDO <span className="text-[#ff6b00]">OPORTUNIDADES</span>, GERANDO <span className="text-[#ff6b00]">RESULTADOS</span>
                        </p>
                        <h1 className="hero-reveal max-w-[660px] text-3xl font-bold leading-[1.03] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Soluções inteligentes <br /> para pessoas e empresas que querem {" "}
                            <span className="inline-flex text-[#ff6b00]" aria-label="ir mais longe">
                                {"ir mais longe".split("").map((letter, index) => (
                                    <motion.span
                                        key={`${letter}-${index}`}
                                        animate={prefersReducedMotion ? undefined : { scaleX: [1, 1.05, 1.1], fontWeight: [700, 800, 900], x: [0, 5, 10] }}
                                        transition={{ duration: 2.8, delay: index * 0.04, repeat: Infinity, repeatDelay: 1.2, ease: "linear" }}
                                        className="inline-block origin-bottom"
                                    >
                                        {letter === " " ? "\u00a0" : letter}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                        <p className="hero-reveal mt-4 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
                            Seguros, crédito consignado e soluções empresariais para tomar decisões financeiras com mais segurança e clareza.
                        </p>

                        <div className="hero-reveal mt-5 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="h-auto min-h-16 rounded-md bg-[#44cf6c] px-6 py-3 text-left text-[#060606] shadow-[0_12px_30px_rgba(68,207,108,0.24)] transition-all hover:scale-[1.02] hover:bg-[#44cf6c] hover:shadow-[0_16px_42px_rgba(68,207,108,0.38)]"
                            >
                                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="h-6 w-6 shrink-0" />
                                    <span className="flex flex-col leading-tight">
                                        <span className="text-base font-bold">Fale conosco no WhatsApp</span>
                                        <span className="mt-none text-xs font-medium text-[#060606]/70">Atendimento rápido e humanizado</span>
                                    </span>
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="h-16 rounded-md border-[#ff6b00] bg-transparent px-6 text-[#ff8833] transition-colors hover:bg-[#ff6b00] hover:text-white"
                            >
                                <a href="#solutions">Conheça nossas soluções <ArrowRight className="h-4 w-4" /></a>
                            </Button>
                        </div>

                        <div className="hero-reveal mt-2 flex snap-x gap-5 overflow-x-auto border-t border-white/10 pt-5 text-left [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible">
                            {highlights.map((highlight) => (
                                <div key={highlight.title} className="flex min-w-[230px] snap-start gap-3 sm:min-w-0">
                                    <highlight.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8833]" />
                                    <div>
                                        <h2 className="text-sm font-bold text-white">{highlight.title}</h2>
                                        <p className="mt-1 text-xs leading-5 text-white/60">{highlight.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual relative z-10 mx-auto w-full max-w-[470px] lg:-ml-20 lg:mr-0 lg:w-[132%] lg:max-w-[640px] lg:justify-self-end"
                        onMouseMove={handleVisualPointerMove}
                        onMouseLeave={resetVisualPointer}
                    >
                        <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.42)_0%,rgba(255,107,0,0.16)_41%,transparent_70%)] blur-2xl" />
                        <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff8833]/30" />
                        <div className="absolute left-[9%] top-[18%] h-[64%] w-[84%] rounded-full border border-[#ff8833]/20" />
                        <motion.div
                            className="relative z-10 mx-auto aspect-[4/5] w-[80%]"
                            style={prefersReducedMotion ? undefined : { x: visualX, y: visualY }}
                        >
                            {/* The transparent portrait is intentionally served directly to preserve its alpha crop. */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/hero/human-cropped.png"
                                alt="Consultor do Grupo Conexão pronto para atender"
                                width={717}
                                height={1229}
                                fetchPriority="high"
                                draggable={false}
                                className="h-full w-full origin-bottom-right object-contain object-right contrast-110 saturate-90 lg:scale-[1.2]"
                            />
                        </motion.div>

                        {floatingBenefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={prefersReducedMotion ? false : { opacity: 0, x: 28, scale: 0.92 }}
                                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1, y: [0, -7, 0] }}
                                transition={{
                                    opacity: { duration: 0.45, delay: 0.45 + index * 0.14 },
                                    x: { type: "spring", stiffness: 180, damping: 20, delay: 0.45 + index * 0.14 },
                                    scale: { type: "spring", stiffness: 180, damping: 20, delay: 0.45 + index * 0.14 },
                                    y: { duration: 4.8, delay: 1.1 + index * 0.45, repeat: Infinity, ease: "easeInOut" },
                                }}
                                className={`absolute z-30 hidden w-48 items-start gap-3 rounded-md border border-white/15 bg-[#121212]/65 p-4 shadow-[0_18px_38px_rgba(0,0,0,0.34)] backdrop-blur-xl md:flex ${[
                                    "right-0 top-[8%]",
                                    "left-10 top-[38%] z-[0]",
                                    "right-0 top-[50%]",
                                ][index]}`}
                            >
                                <benefit.icon className="h-5 w-5 shrink-0 text-[#ff8833]" />
                                <div>
                                    <h2 className="text-sm font-bold text-white">{benefit.title}</h2>
                                    <p className="mt-1 text-xs leading-4 text-white/60">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>

                </div>


            </div>
            <div id="solutions" className="container relative z-20 mx-auto px-5 lg:-translate-y-[20%] -translate-y-[4%] lg:px-8">
                <div className="grid gap-4 pb-10 md:grid-cols-3 lg:pb-0">
                    {products.map((product, index) => {
                        const ProductIcon = productIcons[product.id as keyof typeof productIcons]
                        const href = product.button?.href ?? product.href

                        return (
                            <motion.article
                                key={product.id}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 36, scale: 0.94 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ type: "spring", stiffness: 150, damping: 20, delay: index * 0.1 }}
                                className="group rounded-md flex gap-6 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b00] hover:shadow-[0_24px_55px_rgba(0,0,0,0.2)]"
                            >
                                <div className="hidden lg:flex bg-gradient-to-b from-[#ff6b00] to-[#ff6a0087] p-3 rounded-l-md">
                                    <ProductIcon className="min-h-16 min-w-16 text-white" />
                                </div>
                                <span className="p-7 ">
                                    <h2 className="text-2xl font-extrabold text-[#1f1f1f]">{product.name}</h2>
                                    <p className="mt-3 min-h-20 text-sm leading-6 text-[#1f1f1f]/65">{product.description}</p>
                                    <Link
                                        href={href}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1f1f1f] transition-colors hover:text-[#ff6b00]"
                                    >
                                        Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </span>
                            </motion.article>
                        )
                    })}
                </div>
            </div>

            <div className="bg-white">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="container mx-auto flex flex-col items-center justify-between gap-5 px-5 py-8 text-center lg:min-h-[2rem] lg:flex-row lg:items-end lg:px-8 lg:pb-8 lg:pt-8 lg:text-left"
                >
                    <p className="text-sm font-semibold text-[#1f1f1f]/65">Parcerias estratégicas com instituições reconhecidas</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-extrabold tracking-[0.16em] text-[#1f1f1f]/35">
                        <span>FINTECHS</span>
                        <span className="h-1 w-1 rounded-full bg-[#ff6b00]" />
                        <span>INSTITUIÇÕES FINANCEIRAS</span>
                        <span className="h-1 w-1 rounded-full bg-[#ff6b00]" />
                        <span>EMPRESAS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
