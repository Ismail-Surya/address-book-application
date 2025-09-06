import { useContext } from "react";
import classes from "./Table.module.css";
import { ContactsContext } from "../store/ContactsContext";

export default function Table() {
  const { contacts, loading, error } = useContext(ContactsContext);

  if (loading) return <p className={classes.loading}>Loading contacts ...</p>;

  if (error) return <p className={classes.error}>❌ {error}</p>;

  if (!contacts?.length)
    return <p className={classes.emptyMessage}>You have no contacts.</p>;

  return (<table className={classes.addressBookTable}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              {contact.firstName} {contact.lastName}
            </td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
              {contact.streetAddress} {contact.city} {contact.state}{" "}
              {contact.postalCode} {contact.country}
            </td>
            <td>{contact.notes}</td>
          </tr>
        );
      })}
    </tbody>
  </table>);
}
