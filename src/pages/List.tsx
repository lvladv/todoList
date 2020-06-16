import React, { useState, useEffect } from "react";
import { InputForm } from "./../components/InputForm";
import { ToDoList } from "./../components/ToDoList";
import { ITodo } from "./../interfaces";

declare var confirm: (question: string) => boolean;

export const List: React.FC = () => {
  const [toDos, setToDo] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setToDo(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  const addPoint = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    setToDo((prev) => [newTodo, ...prev]);
  };

  const togglePoint = (id: number) => {
    setToDo(
      toDos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removePoint = (id: number) => {
    const removeConf = confirm("Удалить эллемент?");
    if (removeConf) {
      setToDo(toDos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <InputForm onAdd={addPoint} />
      <ToDoList
        toDos={toDos}
        togglePoint={togglePoint}
        removePoint={removePoint}
      />
    </>
  );
};
