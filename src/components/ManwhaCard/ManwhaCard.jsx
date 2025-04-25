import React, { useEffect, useState } from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const ManwhaCard = () => {
  const [manwhas, setManwhas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://manwhareader.christopherfrige.com/api/v1/manwhas/?page=1&per_page=1000')
      .then(res => res.json())
      .then(data => {
        // console.log("Resposta da API:", data); // teste para verificar a api
        setManwhas(data.records);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar manwhas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando manwhas...</p>;
  }
  console.log("Exemplo de manwha:", manwhas[0]);
  return (
    <div className="ManwhaCard">
      {manwhas.map((m) => (
        <div className="ManwhaCard_card" key={m.manwha_id}>
            <img src={m.thumbnail} alt={m.manwha_name} width="150" />

            <h3>{m.manwha_name}</h3>

            <p><strong>Capítulos:</strong> {m.last_chapter_number ?? 'Não informado'}</p>
            
            <p><strong>Lançado em:</strong> Não disponível</p>
        </div>
        ))}     

    </div>
  );
};

export default ManwhaCard;
