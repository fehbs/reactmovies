import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(()=> {

        const minhaLista = localStorage.getItem("@stackxmovies");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@stackxmovies", JSON.stringify(filtroFilmes) )
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
             
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo : </span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                         <span>{item.title}</span>

                         <div className='detalhes'>
                             <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                             <button onClick={() => excluirFilme(item.id) }>Excluir</button>   
                         </div>
                        </li>
                    )
                })}
            </ul>
            <img className='png2' src='logo2.png' width='5%' alt='Logo' />
        </div>
    )
}

export default Favoritos;