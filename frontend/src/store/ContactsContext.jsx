import { createContext, useState, useEffect } from "react";

export const ContactsContext = createContext();

export function ContactsProvider({ children }) {
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, loading, error }}>
      {children}
    </ContactsContext.Provider>
  );
}
