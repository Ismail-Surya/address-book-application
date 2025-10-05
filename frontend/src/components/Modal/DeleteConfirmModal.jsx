import Modal from "./Modal";
import classes from "./DeleteConfirmModal.module.css";

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={classes.container}>
        <h2 className={classes.title}>Confirm Deletion</h2>
        <p className={classes.message}>
          Are you sure you want to delete this contact?
        </p>
        <div className={classes.actions}>
          <button className={classes.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={classes.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
