import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { ContactsProvider } from "./store/ContactsContext";
import UpsertContactModal from "./components/Modal/UpsertContactModal";
import DeleteConfirmModal from "./components/Modal/DeleteConfirmModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  return (
    <ContactsProvider>
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
        />
        <Table
          handleSelectContact={handleSelectContact}
          selectedContactId={selectedContactId}
          onEditContact={handleEditContact}
        />
      </div>
    </ContactsProvider>
  );
}
