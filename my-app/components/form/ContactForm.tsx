"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef } from "react"
import FormSection from "@/components/sections/FormSection"
import { sendToBusinessMail } from "@/modules/emailHandler"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  return (
    <FormSection id="contact-form" title="Envie uma mensagem">
          <form ref={form} onSubmit={sendToBusinessMail()} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <Input type="text" id="from_name" name="from_name" className="mt-1" required />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="from_email" name="from_email" className="mt-1" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <Textarea id="message" name="message" className="mt-1 min-h-[100px]" required />
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
            <p className="text-sm text-center mt-2">
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Leia nossa política de privacidade
              </a>
            </p>
          </form>
    </FormSection>
  )
}

