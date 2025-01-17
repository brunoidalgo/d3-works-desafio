export default function Main() {
    return (
        <div className="flex justify-center items-center text-center h-screen text-aviso-alert gap-[10em]">
            <div>Imagem</div>
            <div className="flex flex-col justify-center text-center max-w-80 gap-4">
                <h2 className="text-primarias-black font-montserrat">Parabéns por chegar até aqui!</h2>
                <p className="text-neutras-prata">Prepare-se para uma jornada incrível! Na D3, você terá a oportunidade de fazer parte de um time talentoso e trabalhar em projetos desafiadores.</p>
                <p className="text-neutras-white">Tire uma copia do arquivo figma e envie para o email fornecido na vaga.</p>
                <button className="mt-8 p-3 bg-primarias-black text-neutras-black font-inconsolata">
                    Iniciar quiz
                </button>
            </div>
        </div>
    )
}