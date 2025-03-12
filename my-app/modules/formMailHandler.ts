import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const defaultTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY!

export const sendToBusinnessMail = (templateID:string = defaultTemplateID) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
  console.log(serviceID, templateID, form, publicKey)
    emailjs.init(publicKey)
    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      (result) => {
        console.log(result.text)
        alert("Mensagem enviada com sucesso!")
      },
      (error) => {
        console.log(error)
        alert("Ocorreu um erro ao enviar a mensagem.")
      },
    )
  }

