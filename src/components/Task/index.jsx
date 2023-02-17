import React from "react";
import s from "./style.module.css";
export default function Task({ id, title, option, deleteTask }) {
  console.log(option);
  return (
    <div
      className={
        option === '1' ? s.container : [s.container, s.container_gelb].join(" ")
      }
    >
      <p className={s.title}>{title}</p>
      <button className={s.btn_task} onClick={() => deleteTask(id)}>
        X
      </button>
    </div>
  );
}
