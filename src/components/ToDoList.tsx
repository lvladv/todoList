import React from "react";
import { ITodo } from "../interfaces";

type IProps = {
  toDos: ITodo[];
  togglePoint(id: number): void;
  removePoint(id: number): void;
};

export const ToDoList: React.FC<IProps> = ({
  toDos,
  togglePoint,
  removePoint,
}) => {
  const handleRemove = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    removePoint(id);
  };

  if (toDos.length === 0) {
    return <p className="center">Нет записей</p>;
  }
  return (
    <ul className="todo">
      {toDos.map((toDo) => {
        const classes: string[] = ["todo"];
        if (toDo.completed) {
          classes.push("completed");
        }

        return (
          <li key={toDo.id} className={classes.join(" ")}>
            <label>
              <input
                type="checkbox"
                checked={toDo.completed}
                onChange={() => togglePoint(toDo.id)}
              />
              <span>{toDo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => handleRemove(event, toDo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
