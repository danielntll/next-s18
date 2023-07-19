import { tTodo } from '@/mock/todos';
import styles from './Todos.module.scss'
import { useAuth } from '@/utils/auth';
import Todo from '../todo/Todo';
import { IoCloudUploadSharp } from "react-icons/io5";

interface CompProps {
  data: tTodo[];
}


const Todos = ({ data }: CompProps) => {

  const { loggedIn } = useAuth();


  return (

    <div className={styles.Todos}>
      <div className={styles.header}>
        <h3>Todos</h3>

        <div className={styles.button}>
          <IoCloudUploadSharp size={24} />
        </div>
      </div>

      <div className={styles.content}>
        {data?.map((todo: tTodo, index: number) => {

          return (
            <Todo data={todo} key={index} />
          )
        })

        }
      </div>

    </div>

  );
}

export default Todos;