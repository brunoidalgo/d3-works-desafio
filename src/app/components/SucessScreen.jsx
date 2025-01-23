export default function SucessScreen() {
    return (
        <div>
            <img src={circuloDourado} alt="Circulo dourado" className="absolute top-0 right-0" />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl text-neutras-white">Parabéns! Você concluiu o quiz.</h1>
                <p className="text-neutras-white">Você acertou 2 de 3 perguntas.</p>
                <button className="bg-neutras-white text-neutras-black px-4 py-2 rounded mt-4">Compartilhar resultado</button>
                <button className="bg-neutras-white text-neutras-black px-4 py-2 rounded mt-4">Refazer quiz</button>
            </div>
        </div>
    )
}