import Modal from './Modal';
import classes from './DeleteConfirmModal.module.css';

export default function DeleteConfirmModal ({ isOpen, onClose, onConfirm }) {

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick = {onConfirm}>Yes</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    );

}