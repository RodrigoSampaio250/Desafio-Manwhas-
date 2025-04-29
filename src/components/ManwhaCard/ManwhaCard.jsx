import React, { useEffect, useState } from 'react';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock);


import { Link } from 'react-router-dom';

const ManwhaCard = ({ searchTerm }) => {
  const [manwhas, setManwhas] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://manwhareader.christopherfrige.com/api/v1/manwhas/?page=1&per_page=1000')
//       .then(res => res.json())
//       .then(data => {
//         // console.log("Resposta da API:", data); // teste para verificar a api
//         setManwhas(data.records);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Erro ao carregar manwhas:", err);
//         setLoading(false);
//       });
//   }, []);

    useEffect(() => {
        const fetchManwhas = async () => {
        try {
            const response = await fetch(`https://manwhareader.christopherfrige.com/api/v1/manwhas/?page=1&per_page=1000&search=${searchTerm}`);
            const data = await response.json();
            setManwhas(data.records);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar manwhas:", error);
            setLoading(false);
        }
        };
    
        fetchManwhas();
    }, [searchTerm]);

  if (loading) {
    return <p style={{ color: "white", textAlign: "center" }}>Carregando manwhas...</p>;
  }
  if (!loading && manwhas.length === 0) {
    return <p style={{ color: "white", textAlign: "center" }}>Nenhum manhwa encontrado.</p>;
  }
  

  const filteredManwhas = manwhas.filter(m =>
    m.manwha_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  console.log("Exemplo de manwha:", manwhas[0]);

  return (
    <div className="ManwhaCard">
      {filteredManwhas.map((m) => (
        <div className="ManwhaCard_card" key={m.manwha_id}>
            <img src={m.thumbnail} alt={m.manwha_name} width="150" />

            <h3>{m.manwha_name}</h3>

            <button>
                <Link to={`/capitulo/${m.manwha_id}`}>
                    <h2>Capítulo {m.last_chapter_number ?? 'Não informado'}</h2>
                </Link>
            </button>

            <p>
            <FontAwesomeIcon icon="fa-regular fa-clock" />
            {" "} {m.last_chapter_uploaded_at ? new Date(m.last_chapter_uploaded_at).toLocaleString("pt-BR", {                        
                    dateStyle: "short",
                    timeStyle: "short",
                })
                    : "Não informado"}
            </p>
        </div>
        ))}     

    </div>
  );
};

export default ManwhaCard;
