import { tTodo } from '@/mock/todos';
import styles from './Todo.module.scss';
import { IoEllipseOutline, IoCheckmarkCircleSharp, IoRemoveCircleOutline } from "react-icons/io5";
import { useContext } from 'react';
import { MainContext } from '@/state';

interface ComponentProps {
  data: tTodo;
}


const Todo = ({ data }: ComponentProps) => {
  // VARIABLES ------------------
  const { dispatch } = useContext(MainContext);
  // CONDITIONS -----------------
  // FUNCTIONS ------------------
  const handleCheck = () => {
    dispatch({ type: "UPDATE_TO_COMPLETE", id: data.id })
  }
  const handleCheckNot = () => {
    dispatch({ type: "UPDATE_TO_NOT", id: data.id })
  }
  const handleRemove = () => {
    dispatch({ type: "DELETE_TO", id: data.id })
  }
  // RETURN ---------------------
  return (
    <div className={styles.Todo}>
      <p className={styles.Name}>
        {data.name}
      </p>


      <div className={styles.Buttons}>
        <div onClick={
          data.status === "Todo" ?
            () => handleCheck()
            :
            () => handleCheckNot()
        }
          className={styles.Check}
        >
          {data.status === "Todo" ?
            <IoEllipseOutline size={32} />
            :
            <IoCheckmarkCircleSharp size={32} />
          }
        </div>

        <div onClick={() => handleRemove()}
          className={styles.Check}
        >
          <IoRemoveCircleOutline className={styles.Remove} size={32} />
        </div>
      </div>

    </div>
  );
}

export default Todo;