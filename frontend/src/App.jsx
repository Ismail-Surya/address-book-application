import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { ContactsProvider } from "./store/ContactsContext";
import AddContactModal from "./components/Modal/AddContactModal";

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ContactsProvider>
      <div>
        <h1 className={classes.header}>Address Book</h1>
        <button className={classes.addButton} onClick = {() => setIsModalOpen(true)}>Add Contact</button>
        <AddContactModal isOpen = {isModalOpen} onClose = {() => setIsModalOpen(false)} />
        <Table />
      </div>
    </ContactsProvider>
  );
}
