import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const defaultTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY!;

export const sendToBusinessMail = (templateID: string = defaultTemplateID) => (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const form = e.currentTarget;
  emailjs.init(publicKey);
  emailjs.sendForm(serviceID, templateID, form, publicKey).then(
    () => {
      alert("Mensagem enviada com sucesso!");
    },
    (error) => {
      console.error(error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    }
  );
};
