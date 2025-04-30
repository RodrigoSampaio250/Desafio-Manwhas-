import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from "../../services/api";
import Nav from '../../components/Nav/Nav';

const Capitulo = () => {
  const { manwhaId } = useParams();
  const [loading, setLoading] = useState(true);
  const [manwha, setManwha] = useState(null);

  // usar o manwhaId pra buscar dados depois
  // console.log(Object.keys(manwha));       // importante para ver os títulos do json/api


  // useEffect(() => {
  //   fetch("https://manwhareader.christopherfrige.com/api/v1/manwhas/?page=1&per_page=1000")
  //     .then(res => res.json())
  //     .then(data => {
  //       const m = data.records.find(m => m.manwha_id === Number(manwhaId));
  //       setManwha(m);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error("Erro ao carregar manwha:", err);
  //       setLoading(false);
  //     });
  // }, [manwhaId]);

  useEffect(() => {
    const fetchManwha = async () => {
      try {
        const response = await fetch(`https://manwhareader.christopherfrige.com/api/v1/manwhas/${manwhaId}`);
        const data = await response.json();
        setManwha(data); // Aqui você armazena os dados no estado
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar manwha:", err);
        setLoading(false);
      }
    };
  
    fetchManwha();
  }, [manwhaId]);
  


  if (loading) {
    return <h1 style={{ color: "white", textAlign: "center", padding: "10px", fontSize: "2rem" }}>Carregando...</h1>;
  }  
  // console.log("manwha recebido:", manwha);
  if (!manwha) {
    return <h1 style={{ color: "white", textAlign: "center", padding: "10px", fontSize: "2rem" }}>Manwha não encontrado.</h1>;
  }
  
  // console.log(data);

  return (
    <div>
      <Nav />

      <div className="Manwha">
      
      <div className='Manwha_Nome'>
      <h1>{manwha.name ?? "Sem nome"}</h1>
      </div>

          <div className='Manwha_info'>
              <div className='Manwha_info_img'>
                <img src={manwha?.thumbnail} alt={manwha?.manwha_name} />
              </div>
              <div className='Manwha_info_espaco'>

              </div>
              <div className='Manwha_info_descricao'>

                <p><strong>Autor:</strong> {manwha.authors?.[0]?.name ?? "Desconhecido"}</p>

                <p><strong>Artista:</strong> {manwha.artists?.[0]?.name ?? "Desconhecido"}</p>

                <p><strong>Gêneros:</strong> {manwha.genres?.map(g => g.name).join(", ") ?? "Não informado"}</p>

                <p><strong>Outros nomes:</strong> {manwha.alternative_names?.map(n => n.name).join(", ") ?? "Não informado"}</p>

                <p><strong>Lançado em:</strong> {manwha.release ?? "Sem informação"}</p>
              </div>
          </div>

          <div className='Manwha_capitulo'>
            
          {manwha?.chapters?.map((cap) => (
            <div key={cap.id} className="item">
              <div className="item_botao">
                <button>Capítulo {cap.chapter_number}</button>
              </div>

              <p>
                <FontAwesomeIcon icon="fa-regular fa-clock" />
                {" "}
                {cap.updated_at
                  ? new Date(cap.updated_at).toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })
                  : "Não informado"}
              </p>
            </div>
          ))}
          </div>
      </div>

    </div>
  );
};

export default Capitulo