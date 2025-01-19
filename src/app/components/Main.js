"use client"

import Image from "next/image"
import circuloDourado from "../../../public/assets/circulo-dourado.png";
import setaDireita from "../../../public/assets/seta-direita.svg";
import Link from "next/link";
import TelaCarregamento from "./TelaCarregamento";

export default function Main() {
    return (
        <div className="flex justify-evenly max-sm:justify-center max-sm:flex-wrap items-center text-center h-screen text-aviso-alert max-w-screen-2xl overflow-hidden">
            <Image src={circuloDourado} alt="circulo-dourado" className="max-w-[600px] max-sm:max-w-[400px]" />
            <div className="flex flex-col justify-center text-left max-w-80 gap-4">
                <h2 className="text-primarias-black font-montserrat text-[32px] font-extrabold [text-shadow:0_0_4px_#FFFF00]">Parabéns por chegar até aqui!</h2>
                <p className="text-neutras-prata">Prepare-se para uma jornada incrível! Na D3, você terá a oportunidade de fazer parte de um time talentoso e trabalhar em projetos desafiadores.</p>
                <p className="text-neutras-white">Tire uma copia do arquivo figma e envie para o email fornecido na vaga.</p>
                <button className="mt-8 p-2 bg-primarias-black text-neutras-black font-inconsolata max-w-[180px]">
                    <div className="flex flex-row justify-center text-center items-center gap-2">
                        <Link href="/quiz" onClick={TelaCarregamento()}>
                        Iniciar quiz
                        </Link>
                        <Image
                            src={setaDireita} alt="seta-direita"
                        />
                    </div>
                </button>
            </div>
        </div>
    )
}