import { useEffect, useState } from 'react';
import { FiLink, FiTrash, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Links.css'
import { getLinksSave, deleteLink } from '../../services/storeLinks';
import LinkItem from '../../components/LinkItem';

export default function Links(){
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const [empty, setEmpty] = useState(false);
    
    useEffect(() => {
        async function getLinks(){
            const result = await getLinksSave('@encurtaLink');

            if(result.length === 0){
                setEmpty(true);
            }

            setMyLinks(result);
        }

        getLinks();
    }, [])

    function handleOpenLink(link){
        setData(link);
        setShow(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(myLinks, id);

        if(result.length === 0){
            setEmpty(true);
        }

        setMyLinks(result);
    }

    return(
        <div className='links-container'>
            <div className='links-header'>
                <Link to="/">
                    <FiArrowLeft size={38} color='#FFF' />
                </Link>
                <h1>Meus Links</h1>
            </div>

            { empty && (
                <div className='links-item'>
                    <h2 className='empty'>Sua lista está vazia...</h2>
                </div>
            ) }

            { myLinks.map( link => (
                <div key={link.id} className='links-item'>
                    <button className='link' onClick={ () => handleOpenLink(link) }>
                        <FiLink size={18} color='#FFF' />
                        {link.long_url}
                    </button>
                    <button className='link-del' onClick={ () => handleDelete(link.id) }>
                        <FiTrash size={24} color='#FF5454' />
                    </button>
                </div>
            )) }

            { show && (
                <LinkItem close={ () => setShow(false) } content={data} />
            ) }
        </div>
    );
}