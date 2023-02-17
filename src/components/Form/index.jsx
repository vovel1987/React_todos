import React from "react";
import s from './style.module.css'

export default function Form({ createTask }) {
  const tags = [
    { id: 1, value: "", text: "Tag" },
    { id: 2, value: "Mo", text: "Mo" },
    { id: 3, value: "Di", text: "Di" },
    { id: 4, value: "Mi", text: "Mi" },
    { id: 5, value: "Do", text: "Do" },
    { id: 6, value: "Fr", text: "Fr" },
    { id: 7, value: "Sa", text: "Sa" },
    { id: 8, value: "So", text: "So" },
  ];

  const option = [
    { id: 1, value: "", text: "Select Importants" },
    { id: 2, value: 1, text: "Important" },
    { id: 3, value: 0, text: "Not Important" },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    const { title, option, tags } = event.target;
    createTask(tags.value, option.value, title.value);
    title.value = "";
    option.value = "";
    tags.value = "";
  };

  return (
    <div className={s.container}>
      <form onSubmit={onSubmit}>
        <div className={s.select}>
          <select className={s.sel} name={"tags"}  required>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.value}>
                {tag.text}
              </option>
            ))}
          </select>
          <select className={s.sel} name={"option"}   required>
            {option.map((tag) => (
              <option key={tag.id} value={tag.value}>
                {tag.text}
              </option>
            ))}
          </select>
        </div>
<div className={s.input_F}>

        <input type="text" placeholder="Task" name="title"  required/>
        <button>ADD</button>
</div>
      </form>
    </div>
  );
}
