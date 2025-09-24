import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import classes from "./UpsertContactModal.module.css";
import { ContactsContext } from "../../store/ContactsContext";

export default function UpsertContactModal({ isOpen, onClose, contact }) {
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

  const excludedFields = ["id", "createdAt", "updatedAt"];

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    } else {
      setFormData(initialFormData);
    }
  }, [contact, isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = contact ? "PUT" : "POST";
      // const url = contact ? `http://localhost:8484/contacts/${contact.id}` : 'http://localhost:8484/contacts';
      const url = `http://localhost:8484/contacts`;
      const response = await fetch(url, {
        method,
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(contact ? "Failed to update contact" : "Failed to add contact");
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
      <h2>{contact ? "Edit Contact" : "Add New Contact"}</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        {Object.keys(formData).filter((field) => !excludedFields.includes(field)).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
            value={formData[field]}
            onChange={handleChange}
            required={field === "firstName" || field === "lastName"}
          />
        ))}

        <div className={classes.modalButtons}>
          <button type="submit">{contact ? "Update" : "Submit"}</button>
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
