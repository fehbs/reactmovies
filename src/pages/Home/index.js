import {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css';

//URL DA API: /movie/now_playing?api_key=8405eab5f0c7e145a5f2edd60bb556c5&language=pt-BR
//URL DA API: /movie/popular?api_key=<<api_key>>&language=en-US&page=1

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {

      async function loadFilmes() {
        const response = await api.get("movie/now_playing", {
            params:{
             api_key: "8405eab5f0c7e145a5f2edd60bb556c5",
             language: "pt-BR",
             page: 1
            }
        })

        //console.log(response.data.results.slice(0, 10));
        setFilmes(response.data.results.slice(0, 20))
        //setFilmes(response.data.results)
        setLoading(false);

      }

      loadFilmes();

    }, [])

    if(loading) {
        return(
            <div className='loading'>
                 <h2>Carregando filmes...</h2>
            </div>
        )          
           
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <h4>{filme.title}</h4>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;