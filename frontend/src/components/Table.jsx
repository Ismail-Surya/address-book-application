import classes from "./Table.module.css";

export default function Table({ contacts }) {
  let content = <p className = {classes.emptyMessage}>You have no contacts.</p>;

  //   if (!!contacts && contacts.length > 0) {
  if (contacts?.length) {
    content = (
      <table className={classes.addressBookTable}>
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
      </table>
    );
  }

  return content;
}
