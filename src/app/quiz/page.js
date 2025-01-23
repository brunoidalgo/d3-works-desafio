"use client"

import { useState } from "react";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Dropdown from "../components/Dropdown";

import circuloDourado from "../../../public/assets/circulo-dourado.png";
import seta from "../../../public/assets/seta-direita.svg";
import Canvas from "../components/Canvas";
import Questions from "../components/Questions";

export default function Quiz() {

    const [showLoading, setShowLoading] = useState(false);
    const [perguntaAtual, setPerguntaAtual] = useState(1);

    const handleStart = () => {
        setShowLoading(true);
        if (perguntaAtual < tittles.length) {
            setPerguntaAtual(perguntaAtual + 1);
        }
        setTimeout(() => {
            setShowLoading(false);
        }, 3000);
    }

    const tittles = [
        {
            id: 1,
            title: "Qual das seguintes opções NÃO é considerada uma das principais responsabilidades de um desenvolvedor backend?",
            questions: [
                "Criar APIs para serem consumidas por aplicações front-end",
                "Desenvolver a interface visual do aplicativo.",
                "Gerenciar bancos de dados e armazenamento de informações.",
                "Implementar a lógica de negócio da aplicação."
            ]
        },
        {
            id: 2,
            title: "Qual das seguintes tecnologias é primariamente utilizada para manipular o DOM (Document Object Model) e criar interfaces dinâmicas em aplicações web?",
            questions: [
                `React`,
            ]
        },
        {
            id: 3,
            title: "Escreva uma redação falando sobre o impacto das IAs na área da tecnologia.",
            questions: [
                "Implementar a lógica de negócio da aplicação."
            ]
        }
    ]

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
                        <div>
                            {/* Contador de perguntas */}
                            <span className="text-primarias-black">{perguntaAtual} / {tittles.length}
                            </span>
                        </div>
                        {/* Utilizando map para renderizar as perguntas */}
                        {tittles.filter(element => element.id === perguntaAtual)
                            .map(element => (
                                <div key={element.id} className="text-neutras-white">
                                    <p>{element.title}</p>
                                </div>
                            ))}
                        {/* Utilizando map para renderizar as respostas */}
                        {tittles
                            .filter(element => element.id === perguntaAtual)
                            .map(element => (
                                <div key={element.id} className="flex flex-col gap-2 bg-neutras-black p-4 mt-2 mb-2 text-left">
                                    {element.questions.map((question, index) => {
                                        if (element.id === 2) {
                                            return (
                                                <Dropdown key={`dropdown-${index}`} />
                                            );
                                        } else if (element.id === 3) {
                                            return (
                                                <Canvas
                                                    key={`another-component-${index}`}
                                                    question={question}
                                                />
                                            );
                                        } else {
                                            return (
                                                <Questions
                                                    key={`another-component-${index}`}
                                                    question={question}
                                                />
                                            );
                                        }
                                    })}

                                </div>
                            ))}
                        <button className="mt-10 p-2 bg-primarias-black text-neutras-black font-inconsolata w-[150px]" onClick={handleStart}>
                            <div className="flex flex-row justify-center text-center items-center gap-2">
                                <p>Próximo</p>
                                <Image
                                    src={seta}
                                    width={20}
                                    height={20} alt="seta-direita"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}