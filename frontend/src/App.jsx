import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { ContactsProvider } from "./store/ContactsContext";
import UpsertContactModal from "./components/Modal/UpsertContactModal";

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  function handleAddContact () {
    setSelectedContact(null);
    setIsModalOpen(true);
  }

  function handleEditContact (contact) {
    setSelectedContact(contact);
    setIsModalOpen(true);
  }

  return (
    <ContactsProvider>
      <div>
        <h1 className={classes.header}>Address Book</h1>
        <button className={classes.addButton} onClick = {handleAddContact}>Add Contact</button>
        <UpsertContactModal isOpen = {isModalOpen} onClose = {() => setIsModalOpen(false)} contact = {selectedContact} />
        <Table onEditContact={handleEditContact} />
      </div>
    </ContactsProvider>
  );
}
