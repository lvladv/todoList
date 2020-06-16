import React from "react";
import { useHistory } from "react-router-dom";

export const Inform: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Информация</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum neque
        fugiat quam ipsam labore quaerat consectetur rem provident
        necessitatibus repellat nemo, repellendus maxime optio officia ea,
        tempore reiciendis, illo velit!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        К списку дел
      </button>
    </>
  );
};
