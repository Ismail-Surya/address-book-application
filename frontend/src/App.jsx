import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import UpsertContactModal from "./components/Modal/UpsertContactModal";
import DeleteConfirmModal from "./components/Modal/DeleteConfirmModal";
import { useContext } from 'react';
import { ContactsContext } from "./store/ContactsContext";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { refreshContacts } = useContext(ContactsContext);

  function handleSelectContact(id) {
    setSelectedContactId((prev) => (prev === id ? null : id));
  }

  function handleAddContact() {
    setSelectedContact(null);
    setIsModalOpen(true);
  }

  function handleEditContact(contact) {
    setSelectedContact(contact);
    setIsModalOpen(true);
  }

  async function handleDeleteContact() {
    try {
      const response = await fetch (`http://localhost:8484/contacts/${selectedContactId}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw Error("Failed to delete contact");

      setSelectedContactId(null);
      await refreshContacts();
      setIsDeleteModalOpen(false);
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
      <div>
        <h1 className={classes.header}>Address Book</h1>
        <button className={classes.addButton} onClick={handleAddContact}>
          Add Contact
        </button>
        <button
          className = {classes.deleteButton}
          disabled = {!selectedContactId}
          onClick = {() => setIsDeleteModalOpen(true)}
        >Delete Contact</button>
        <UpsertContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contact={selectedContact}
        />
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm = {handleDeleteContact}
        />
        <Table
          handleSelectContact={handleSelectContact}
          selectedContactId={selectedContactId}
          onEditContact={handleEditContact}
        />
      </div>
  );
}
