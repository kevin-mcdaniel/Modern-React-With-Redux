import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ children, onClose, actionBar}){
    
    //prevent scrolling when window is open
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    const portalContent = <div>
        <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-10 bg-white">
            <div className='flex flex-col justify-between h-full'>
                {children}
                <div className='flex justify-end'>
                    {actionBar}
                </div>
            </div>

        </div>
    </div>
    
    //generate the content somewhere else using portals
    return ReactDOM.createPortal(
        portalContent,
        document.querySelector('.modal-container')
    )

    
}

export default Modal;