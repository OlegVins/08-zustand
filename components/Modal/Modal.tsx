'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        Promise.resolve().then(() => {
            const target = document.getElementById('modal-root');
            if (target) setContainer(target);
        });

        document.body.style.overflow = 'hidden';

         const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
              document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!container) return null;

        const handleBackdropClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (e.target === e.currentTarget) onClose();
    };

  return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}
        >
            <div className={css.modal}>
                {children}
            </div>
        </div>,
        container
    );
}

       

   
    

      

  

    

    

  