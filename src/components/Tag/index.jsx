import React from "react";
import Task from "../Task";
import s from "./style.module.css";

export default function Tag({ tasks, tags, day, deleteTag, deleteTask }) {
  return (
    <div className={s.container}>
      <div className={s.day}>{day}</div>
      <div className={s.block}>
        {tasks.map((elem) =>
          elem.day === day ? (
            <Task key={elem.id} {...elem} deleteTask={deleteTask} />
          ) : (
            ""
          )
        )}
      </div>
      <div>
        <button className={s.btn_tag} onClick={() => deleteTag(day)}>
          X
        </button>
      </div>
    </div>
  );
}
