"use client"

import { useState } from "react";

export default function TelaCarregamento() {

    const [loading, setLoading] = useState(false);

    const handleClick = () => {
    setLoading(true);
    
    // Simula um atraso de 3 segundos
    setTimeout(() => {
      setLoading(false);
      alert('Carregamento concluído!');
    }, 3000);
  };

    return (
        <div>
        {loading && 
            <div>
                <p>Carregando...</p>
            </div>
        }
        </div>
    )
}