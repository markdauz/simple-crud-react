import { useState, useEffect } from "react";
export const Form = (props) => {
  const { names, setNames } = props;
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNames((prevNames) => [...prevNames, { id: Math.random(), name }]);
    setName("");
  };

  useEffect(() => {
    localStorage.setItem("storedNames", JSON.stringify(names));
  }, [names]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        style={{
          cursor: "pointer",
          width: "auto",
          padding: "2px 8px",
          marginTop: 20
        }}
      >
        Add
      </button>
    </form>
  );
};
