"use client"

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useState } from "react";

import circuloDourado from "../../../public/assets/circulo-dourado.png";
import seta from "../../../public/assets/seta-direita.svg";

export default function Quiz() {

    const [showLoading, setShowLoading] = useState(false);
    
        const handleStart = () => {
            setShowLoading(true);
            setTimeout(() => {
                setShowLoading(false);
            }, 5000);
        }

        const questions = [
            "Criar APIs para serem consumidas por aplicações front-end",
            "Desenvolver a interface visual do aplicativo.",
            "Gerenciar bancos de dados e armazenamento de informações.",
            "Gerenciar bancos de dados e armazenamento de informações.",
            "Implementar a lógica de negócio da aplicação.",
        ];

        const steps = [1, 2, 3];

    return (
        <>
        {showLoading && <Loading />}
        <Header />
            <div className="text-neutras-white">
                <div className="flex justify-evenly items-center text-center h-screen max-w-screen-2xl overflow-hidden xl:justify-center xl:items-center max-sm:justify-center max-sm:flex-wrap max-2xl:justify-center">
                    <Image src={circuloDourado}
                    alt="circulo-dourado"
                    />
                <div className="font-inconsolata font-thin flex flex-col text-left w-[428px] text-wrap">
                    <div>ETAPA {steps.map((step) => {
                        return (
                            <span key={step} className="text-primarias-black">{step} / 3</span>
                        )
                    })}</div>
                    <div className="flex flex-col gap-1 mt-2 mb-2">
                        Qual das seguintes opções NÃO é considerada uma das principais responsabilidades de um desenvolvedor backend?
                    </div>
                    {questions.map((question, index) => {
                        return (
                            <div key={index} className="flex flex-row gap-2 bg-neutras-black p-2 mt-2 mb-2">
                                <input type="radio" id={index} name="question" value={question} />
                                <label htmlFor={index}>{question}</label>
                            </div>
                        )
                    } )}
                    <button className="mt-10 p-2 bg-primarias-black text-neutras-black font-inconsolata w-[150px]" onClick={handleStart}>
                    <div className="flex flex-row justify-center text-center items-center gap-2">
                        <p>Próximo</p>
                        <Image src={seta}
                        width={20}
                        height={20} alt="seta-direita" />
                    </div>
                </button>
                </div>
                </div>
            </div>
        <Footer />
        </>
    )
}