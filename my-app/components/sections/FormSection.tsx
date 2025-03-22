import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface FormSectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
}

export default function FormSection({ children, id, title }: FormSectionProps) {
  return (
    <section id={id} className='relative w-full mx-auto  p-4 bg-primary-100 min-h-[600px] flex flex-col justify-center items-center'>
      <Image src="/bg/cta-bg.jpg" alt="Contato" fill className="object-cover z-0 brightness-[.3] saturate-50 " />          
      <span className="absolute inset-0 bg-gradient-to-b from-primary/5 from-30% to-black  z-[1]"></span>
       <Card className="w-full max-w-lg mx-auto relative z-10 ">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-semibold text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children} 
        </CardContent>
      </Card>
    </section>
  )
}
