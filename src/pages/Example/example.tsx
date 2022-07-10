import React from "react";

interface IdataModel {
  id: number;
  name: string;
}

const data: Array<IdataModel> = [
  {
    id: 1,
    name: "I am foo",
  },
  {
    id: 2,
    name: "I am bar",
  },
];

const Context = React.createContext(data);

const Example: React.FC = () => {
  return (
    <Context.Provider value={data}>
      <Father />
      <Son />
    </Context.Provider>
  );
};

const Father = () => {
  const dataAccess = React.useContext(Context);
  return (
    <>
      <p>this is Father</p>
      <p>{dataAccess[0].id}</p>
      <p>{dataAccess[0].name}</p>
    </>
  );
};

const Son = () => {
  const dataAccess = React.useContext(Context);
  return (
    <>
      <p>This is son</p>
      <p>{dataAccess[1].id}</p>
      <p>{dataAccess[1].name}</p>
    </>
  );
};

export default Example;
