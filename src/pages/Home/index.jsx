import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';
import './Home.css';

export default function Home(){
    const [link, setLink] = useState('');
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    async function shortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShow(true);

            saveLink('@encurtaLink', response.data);

            setLink('');
        }catch (error) {
            console.log(error)
            alert("Digite uma url válida");
            setLink('');
        }
    }

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
                    <input placeholder='Cole seu link aqui' value={link} onChange={ (e) => setLink(e.target.value) } />
                </div>
                <button onClick={shortLink}>Encurtar link</button>
            </div>

            <Menu />

            {show && (<LinkItem close={ () => setShow(false) } content={data} />)}
        </div>
    );
}