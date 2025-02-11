import Image from "next/image";
import { CardContent } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    product: {
        name: string,
        image: string,
        href: string
    },
    index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
    return (
        <div key={product.name} className="group bg-white relative hover:border-secondary transition-colors border-primary min-h-72 overflow-hidden w-full">
            <Link href={product.href} className="">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    placeholder="blur"
                    blurDataURL="/logo.png"
                    className={`object-cover z-0 group-hover:scale-110 transition-transform duration-500 ${index % 2 === 0 ? 'filter grayscale brightness-50' : 'filter brightness-50'}`}
                />
                <span className={cn(`absolute inset-0 z-10 flex  opacity-0 ${index % 2 === 0 ? "bg-black/50" : "bg-primary/70"} opacity-50 group-hover:opacity-75 transition-opacity`)} />
                <CardContent className="p-6 flex flex-col   relative z-20 h-full ">
                    <h3 className={`text-5xl font-thin   ${index % 2 !== 0 ? 'text-white' : 'text-primary-800'}`}>{product.name}</h3>
                    <h3 className={`text-2xl font-thin absolute right-4 bottom-4 transition-opacity delay-200 group-hover:opacity-100 lg:opacity-0 text-center lg:text-left flex items-center gap-2 ${index % 2 !== 0 ? 'text-white' : 'text-primary-800'}`}>
                        saiba mais 
                        <ArrowRight className="-translate-x-2 delay-200 duration-500 transition-transform group-hover:translate-x-2"/> 
                        </h3>
                </CardContent>
            </Link>
        </div>
    )
}