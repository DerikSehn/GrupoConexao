"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendToBusinnessMail } from "@/modules/formMailHandler"
import Image from "next/image"
import { useRef } from "react"


export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)



  return (
    <div id="contact_form" className='relative w-full mx-auto mt-10 p-4 bg-primary-100 min-h-[600px] flex flex-col justify-center items-center'>
    <Image src="/bg/cta-bg.jpg" alt="Contato" fill className="object-cover z-0 brightness-[.3] saturate-50 " />          
    <span className="absolute inset-0 bg-gradient-to-b from-primary/5 from-30% to-black  z-[1]"></span>
    <Card className="w-full max-w-lg mx-auto relative z-10 ">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-semibold text-gray-800">Envie uma Mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={sendToBusinnessMail()} className="space-y-4">
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
        </form>
      </CardContent>
    </Card>
  </div>
  )
}

