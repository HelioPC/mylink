import { FiLink, FiTrash, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Links.css'

export default function Links(){
    return(
        <div className='links-container'>
            <div className='links-header'>
                <Link to="/">
                    <FiArrowLeft size={38} color='#FFF' />
                </Link>
                <h1>Meus Links</h1>
            </div>

            <div className='links-item'>
                <button className='link'>
                    <FiLink size={18} color='#FFF' />
                    https://youtube.com
                </button>
                <button className='link-del'>
                    <FiTrash size={24} color='#FF5454' />
                </button>
            </div>

            <div className='links-item'>
                <button className='link'>
                    <FiLink size={18} color='#FFF' />
                    https://youtube.com
                </button>
                <button className='link-del'>
                    <FiTrash size={24} color='#FF5454' />
                </button>
            </div>
        </div>
    );
}