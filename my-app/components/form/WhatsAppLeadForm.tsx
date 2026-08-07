"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { FormEvent } from "react"

const whatsappPhone = "5551981728039"

interface WhatsAppLeadFormProps {
  context: string
  title?: string
  description?: string
  submitLabel?: string
  className?: string
}

export function WhatsAppLeadForm({
  context,
  title = "Solicite seu diagnóstico",
  description = "Compartilhe algumas informações para iniciarmos a conversa.",
  submitLabel = "Enviar pelo WhatsApp",
  className,
}: WhatsAppLeadFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim()
    const companyRepresentative = formData.get("companyRepresentative")?.toString().trim()
    const message = formData.get("message")?.toString().trim()
    const whatsappMessage = [
      `Olá! Gostaria de solicitar ${context}.`,
      "",
      `Nome: ${name}`,
      `Representante da empresa: ${companyRepresentative}`,
      `Mensagem: ${message}`,
    ].join("\n")

    window.open(
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div>
        <h2 className="text-2xl font-extrabold text-inherit">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-inherit/70">{description}</p>
      </div>
      <div className="mt-7 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="whatsapp-lead-name">Nome</Label>
          <Input id="whatsapp-lead-name" name="name" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="whatsapp-lead-representative">Representante da empresa</Label>
          <Input id="whatsapp-lead-representative" name="companyRepresentative" autoComplete="organization-title" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="whatsapp-lead-message">Mensagem</Label>
          <Textarea id="whatsapp-lead-message" name="message" required />
        </div>
      </div>
      <Button type="submit" className="mt-7 min-h-12 w-full bg-[#44cf6c] font-bold text-[#060606] hover:bg-[#44cf6c]/90">
        {submitLabel} <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}