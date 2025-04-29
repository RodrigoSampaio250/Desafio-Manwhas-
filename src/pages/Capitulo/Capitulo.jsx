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


  useEffect(() => {
    fetch("https://manwhareader.christopherfrige.com/api/v1/manwhas/?page=1&per_page=1000")
      .then(res => res.json())
      .then(data => {
        const m = data.records.find(m => m.manwha_id === Number(manwhaId));
        setManwha(m);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar manwha:", err);
        setLoading(false);
      });
  }, [manwhaId]);


  if (loading) {
    return <h1>Carregando...</h1>;
  }  
  console.log("manwha recebido:", manwha);
  if (!manwha) {
    return <h1>Manwha não encontrado.</h1>;
  }
  
  return (
    <div>
      <Nav />

      <div className="Manwha">
      
      <div className='Manwha_Nome'>
        <h1>{manwha?.manwha_name ?? "Sem nome disponível"}</h1>
      </div>

          <div className='Manwha_info'>
              <div className='Manwha_info_img'>
                <img src={manwha?.thumbnail} alt={manwha?.manwha_name} />
              </div>
              <div className='Manwha_info_espaco'>

              </div>
              <div className='Manwha_info_descricao'>

                <p className='Manwha_info_descricao_sinopse'><strong>Sinopse: </strong> {manwha?.synopsis ?? "Sem sinopse disponível"}</p>

                <p className='Manwha_info_descricao_genero'><strong>Gêneros:</strong> {manwha?.genres?.join(", ") ?? "Não informado"}</p>

                <p className='Manwha_info_descricao_autor'><strong>Autor:</strong> {manwha?.author ?? "Não informado"}</p>
                
                <p className='Manwha_info_descricao_cap'><strong>Último capítulo:</strong> {manwha?.last_chapter_number ?? "Sem informação"}</p>
              
              </div>
          </div>

          <div className='Manwha_capitulo'>
            
                {Array.from({ length: manwha?.last_chapter_number || 0 }, (_, i) => (
                  <div className='item'>
                    <div className='item_botao'>
                      <button>Capítulo {manwha.last_chapter_number - i}</button>
                    </div>
                    
                      <p>
                         <FontAwesomeIcon icon="fa-regular fa-clock" />
                          {" "} {manwha.last_chapter_uploaded_at ? new Date(manwha.last_chapter_uploaded_at).toLocaleString("pt-BR", {                        
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