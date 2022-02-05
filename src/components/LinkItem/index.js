import { FiX, FiClipboard } from 'react-icons/fi';
import './item.css';

export default function LinkItem({ close, content }){

    async function copy(){
        await navigator.clipboard.writeText(content.link)
        alert("URL copiada");
    }

    return(
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={close}>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className='modal-link' onClick={copy}>
                {content.link}
                <FiClipboard size={20} color='#FFF' />
            </button>
        </div>
    );
}