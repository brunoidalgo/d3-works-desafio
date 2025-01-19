import Image from 'next/image'
import Link from 'next/link'

export default function Button(props) {
    return (
        <button 
                onClick={props.click} className="mt-8 p-2 bg-primarias-black text-neutras-black font-inconsolata max-w-[180px]">
                    <div className="flex flex-row justify-center text-center items-center gap-2">
                        <Link href={props.link}>
                        Iniciar quiz
                        </Link>
                        <Image
                            src={props.imagem} alt={props.alt}
                        />
                    </div>
                </button>
    )
}