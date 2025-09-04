import classes from './App.module.css'
import Table from './components/Table'
import { useEffect, useState } from 'react';

export default function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts () {
    const response = await fetch('http://localhost:8484/contacts');
    const fetchedContacts = await response.json();
    setContacts(fetchedContacts);
  }

  return (
    <div>
      <h1 className = {classes.header}>Address Book</h1>
      <Table contacts = {contacts} />
    </div>
  )
}
