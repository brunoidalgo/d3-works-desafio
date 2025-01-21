export default function Dropdown() {

    const respostas = [
        "Selecione a resposta",
        "React",
        "Javascript",
        "Python",
        "Java"
    ]

    return (
        <div className="relative">
            <select className="rounded-lg p-2 bg-transparent text-neutras-white border-transparent">
                {respostas.map((resposta, index) => (
                    <option key={index} value={resposta}>{resposta}</option>
                ))}
            </select>
        </div>
    )
}