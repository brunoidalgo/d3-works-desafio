export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 mr-3 border-e-4 border-aviso-alert border-opacity-100"></div>
                <p className="mt-4 text-xl font-bold text-neutras-white">Carregando...</p>
            </div>
        </div>

    )
}