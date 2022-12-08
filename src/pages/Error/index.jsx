import { Link } from 'react-router-dom';
import './Error.css';

export default function Error(){
    return(
        <div className='container-error'>
            <img src='notfound.png' alt='not found' />
            <h1>Erro 404. Página não encontrada</h1>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
}