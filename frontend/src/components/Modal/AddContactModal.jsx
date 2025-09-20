import { useContext, useState } from "react";
import Modal from "./Modal";
import classes from "./AddContactModal.module.css";
import { ContactsContext } from "../../store/ContactsContext";

export default function AddContactModal({ isOpen, onClose }) {
  const { refreshContacts } = useContext(ContactsContext);

    const initialFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  notes: "",
};

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8484/contacts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      await refreshContacts();
      setFormData(initialFormData);
      onClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            required={field === "firstName" || field === "lastName"}
          />
        ))}

        <div className={classes.modalButtons}>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
