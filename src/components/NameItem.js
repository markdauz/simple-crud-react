import { useState } from "react";

export const NameItem = (props) => {
  const [update, setUpdate] = useState(false);
  const { name, handleDelete, handleUpdate } = props;
  const [newName, setNewName] = useState(name.name);

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center" }}>
        {!update ? (
          <p style={{ margin: 2 }}>{name.name}</p>
        ) : (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        )}
        {!update ? (
          <button
            onClick={() => {
              setUpdate(true);
            }}
            style={{
              width: "auto",
              padding: 4,
              backgroundColor: "orange",
              border: "none",
              color: "white",
              margin: 2,
              cursor: "pointer"
            }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => {
              const updatedName = { id: name.id, name: newName };
              handleUpdate(name.id, updatedName);
              setUpdate(false);
            }}
            style={{
              width: "auto",
              padding: 4,
              backgroundColor: "skyblue",
              border: "none",
              color: "white",
              margin: 2,
              cursor: "pointer"
            }}
          >
            Save
          </button>
        )}
        <button
          onClick={() => handleDelete(name.id)}
          style={{
            width: "auto",
            padding: 4,
            backgroundColor: "red",
            border: "none",
            color: "white",
            margin: 2,
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
