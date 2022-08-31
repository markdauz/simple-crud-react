import { NameItem } from "./NameItem";

export const NameList = (props) => {
  const { names, handleDelete, handleUpdate } = props;

  return (
    <ul>
      {names.map((name, index) => (
        <NameItem
          key={index}
          name={name}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};
