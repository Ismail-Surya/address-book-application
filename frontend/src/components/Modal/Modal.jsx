import classes from './Modal.module.css';

export default function Modal ({ isOpen, children, onClose }) {

    if(!isOpen) return null;

    return <div className={classes.modalBackdrop} onClick = {onClose}>
        <div className={classes.modalContent} onClick = {(e) => e.stopPropagation()}>
            { children }
        </div>
    </div>

}