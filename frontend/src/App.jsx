import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const response = await fetch("http://localhost:8484/contacts");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }
      const fetchedContacts = await response.json();
      setContacts(fetchedContacts);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className={classes.header}>Address Book</h1>
      {loading && <p>Loading contacts ...</p>}
      {error && <p className = {classes.error}>❌ {error}</p>}
      {!loading && !error && <Table contacts={contacts} />}
    </div>
  );
}
