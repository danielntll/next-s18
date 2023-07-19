import { useContext, useState } from 'react';
import styles from './Maininput.module.scss';
import { IoAddOutline } from "react-icons/io5";
import { MainContext } from '@/state';

const Maininput = () => {
  // VARIABLES ------------------
  const { dispatch } = useContext(MainContext);
  // CONDITIONS -----------------
  const [todo, setTodo] = useState<string>("");
  // FUNCTIONS ------------------
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      {
        type: "ADD_TO",
        new_todo: {
          name: todo,
          status: "Todo",
          id: Date.now()
        }
      }
    );
    setTodo("");
  }
  const handleInput = (e: any) => {
    setTodo(e.target.value)
  }

  // RETURN ---------------------
  return (
    <div className={styles.Maininput}>
      <form className={styles.Form} onSubmit={handleSubmit}>

        <input className={styles.Input} type="text" onChange={handleInput} value={todo} placeholder='Insert todo' required />

        <button type='submit' className={styles.Button} >
          Add
          <IoAddOutline size={24} />
        </button>
      </form>
    </div>
  );
}

export default Maininput;