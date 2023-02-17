import { useEffect, useState } from "react";
import Form from "../Form";
import Tag from "../Tag";
import s from "./style.module.css";

function App() {
  const tags = [
    { id: 1, day: "Mo" },
    { id: 2, day: "Di" },
    { id: 3, day: "Mi" },
    { id: 4, day: "Do" },
    { id: 5, day: "Fr" },
    { id: 6, day: "Sa" },
    { id: 7, day: "So" },
  ];
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)));
  const createTask = (day, option, title) => {
    setTasks([...tasks, { day, option, title, id: Date.now() }]);
  };

  const deleteTag = (idEl) => {
    setTasks(tasks.filter((el) => el.day !== idEl));
  };
  const deleteTask = (idEl) => {
    setTasks(tasks.filter((el) => el.id !== idEl));
  };

  const value = tasks.map((elem) => elem.day);

  return (
    <div className={s.container}>
      <div>
        <Form createTask={createTask} />
      </div>
      <div>
        {tags.map(({ day, id }) =>
          value.includes(day) ? (
            <Tag
              key={id}
              day={day}
              tags={tags}
              tasks={tasks}
              deleteTag={deleteTag}
              deleteTask={deleteTask}
            />
          ) : (
            ""
          )
        )}
        {/* // <Tag tags={tags} tasks={tasks} /> */}
      </div>
    </div>
  );
}

export default App;
