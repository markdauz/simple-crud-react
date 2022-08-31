import { useState } from "react";
import { Form } from "./components/Form";
import { NameList } from "./components/NameList";
import "./styles.css";

export default function App() {
  const [names, setNames] = useState(
    JSON.parse(localStorage.getItem("storedNames")) || []
  );

  const handleDelete = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const handleUpdate = (id, newName) => {
    setNames(names.map((name) => (name.id === id ? newName : name)));
  };

  return (
    <div className="App">
      <h1>Simple CRUD</h1>
      <Form names={names} setNames={setNames} />
      <hr />
      <NameList
        names={names}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
