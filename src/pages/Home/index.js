import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import './Home.css'

export default function Home(){
    return(
        <div className="container-home">
            <div className="logo">
                <img src="/logo192.png" alt="react logo" />
                <h1>My Links</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#FFF' />
                    <input placeholder='Cole seu link aqui' />
                </div>
                <button>Encurtar link</button>
            </div>

            <Menu />
        </div>
    );
}