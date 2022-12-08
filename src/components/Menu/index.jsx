import { BsInstagram, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://instagram.com'>
                <BsInstagram color='#FFF' size={24} />
            </a>
            <a className='social' href='https://github.com/HelioPc'>
                <BsGithub color='#FFF' size={24} />
            </a>
            <Link className='menu-item' to="links">
                Meus links
            </Link>
        </div>
    )
}