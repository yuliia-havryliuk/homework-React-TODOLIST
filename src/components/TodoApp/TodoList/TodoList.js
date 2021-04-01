import React from 'react';
import style from './TodoList.module.css';
import { ImCheckmark, ImCross } from 'react-icons/im';

const TodoList = ({ todos, onDeleteTodo, toggleCompleted }) => {
  return (
    <div>
      <ul className={style.container}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? style.completedItem : style.item}>
            <p>{text}</p>
            {/*            <button type="button" className={style.btnEdit}>
              <AiFillEdit className={style.icon} />
            </button>*/}
            <button
              type="button"
              onClick={() => toggleCompleted(id)}
              className={completed ? style.btnCompleted : style.btnNotCompleted}
            >
              <ImCheckmark className={style.icon} />
            </button>
            <button
              type="button"
              className={style.btn}
              onClick={() => onDeleteTodo(id)}
            >
              <ImCross className={style.icon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
