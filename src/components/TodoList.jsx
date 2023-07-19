import React, { useEffect, useState } from "react";
import CreateTask from "../modals/create.jsx";
import Card from "./card.jsx";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
    setTaskList(taskList);
  };
  return (
    <>
      <div className="header text-center">
        <h1>TO-DO LIST WEB APP</h1>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          create task
        </button>
      </div>

      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>
      <div className="footer text-center">
        <footer class="footer mt-auto py-3 bg-light">
          <div class="container">
            <span class="text-muted"><h3>List down your TASK here !!</h3></span>
          </div>
        </footer>
      </div>
    </>
  );
};
export default TodoList;
