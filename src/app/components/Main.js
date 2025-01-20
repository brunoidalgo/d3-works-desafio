"use client"

import Image from "next/image"
import circuloDourado from "../../../public/assets/circulo-dourado.png";
import setaDireita from "../../../public/assets/seta-direita.svg";
import Loading from "./Loading";
import { useState } from "react";
import Button from "./Button";

export default function Main() {

    const [showLoading, setShowLoading] = useState(false);

    const handleLoading = () => {
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
        }, 5000);
    }

    return (
        <main>
            {showLoading && <Loading />}
            <div className="flex justify-evenly items-center text-center h-screen text-aviso-alert max-w-screen-2xl overflow-hidden xl:justify-center xl:items-center max-sm:justify-center max-sm:flex-wrap max-2xl:justify-center">
                <Image src={circuloDourado} alt="circulo-dourado" className="max-w-[600px] max-sm:max-w-[400px]" />
                <div className="flex flex-col justify-center text-left max-w-80 gap-4">
                    <h2 className="text-primarias-black font-montserrat text-[32px] font-extrabold [text-shadow:0_0_4px_#FFFF00]">Parabéns por chegar até aqui!</h2>
                    <p className="text-neutras-prata">Prepare-se para uma jornada incrível! Na D3, você terá a oportunidade de fazer parte de um time talentoso e trabalhar em projetos desafiadores.</p>
                    <p className="text-neutras-white">Tire uma copia do arquivo figma e envie para o email fornecido na vaga.</p>
                    <Button
                        click={handleLoading}
                        link="/quiz"
                        imagem={setaDireita}
                        alt="seta-direita"
                    />
                </div>
            </div>
        </main>
    )
}