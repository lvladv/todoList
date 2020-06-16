import React, { useState } from "react";

interface IProps {
  onAdd(title: string): void;
}

export const InputForm: React.FC<IProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyHendlerChange = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt-2">
      <input
        onChange={titleChange}
        value={title}
        id="title"
        type="text"
        onKeyPress={keyHendlerChange}
      />
      <label className="active" htmlFor="title">
        Введите свой текст
      </label>
    </div>
  );
};
