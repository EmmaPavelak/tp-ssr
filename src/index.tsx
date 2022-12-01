import React from "react";

import todos from "./todos.json";
import ReactDOM from "react-dom/client";
import Todo from "./Todo/todo";
import User from "./User/user";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// const usersList = ReactDOM.createRoot(
//   document.getElementById("users") as HTMLElement
// );

// // Simple GET request using fetch
// fetch("http://localhost:3333/user").then((data) => console.log(data));

// function showItem() {
//   let indexTodo = 0;
//   setInterval(() => {
//     indexTodo++;
//     root.render(
//       <div>
//         <Todo todos={todos} indexTodo={indexTodo} />
//       </div>
//     );
//   }, 500);
// }
// function showUser() {
//   usersList.render(<User users={users} />);
// }
// showItem();
// showUser();

const root = document.getElementById("root") as HTMLElement;
ReactDOM.hydrateRoot(root, <User />);
