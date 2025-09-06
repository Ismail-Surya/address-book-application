import classes from "./App.module.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { ContactsProvider } from "./store/ContactsContext";

export default function App() {
  return (
    <ContactsProvider>
      <div>
        <h1 className={classes.header}>Address Book</h1>
        <Table />
      </div>
    </ContactsProvider>
  );
}
