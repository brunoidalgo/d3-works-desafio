import Image from "next/image"
import seta from "../../../public/assets/yellow-arrow-down.svg"

export default function Dropdown() {

    const respostas = [
        "Selecione a resposta",
        "C#",
        "Javascript",
        "Python",
        "SQL"
    ]

    return (
        <div className="relative flex justify-between">
            <select className="block w-full text-left rounded-lg p-2 bg-transparent text-neutras-white border-transparent appearance-none focus:outline-none selected:hover:text-aviso-alert">
                {respostas.map((resposta, index) => (
                    <option className="bg-neutras-black" key={index} value={resposta}>{resposta}</option>
                ))}
            </select>
            <Image src={seta} alt="seta-amarela" />
        </div>
    )
}