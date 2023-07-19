import { useAuth } from '@/utils/auth';
import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import style from './ModaleLog.module.scss';

import { useState, useEffect } from 'react';

import { IoCloseCircle } from "react-icons/io5";


interface ComponentProps {
  isOpen: boolean,
  setIsOpen: (status: boolean) => void,
}


const ModaleLog = ({ isOpen = false, setIsOpen }: ComponentProps) => {
  // VARIABLES ------------------
  const [access, setAccess] = useState<"login" | "register">("login");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loggedIn } = useAuth();
  // CONDITIONS -----------------
  // FUNCTIONS ------------------
  useEffect(() => {
    loggedIn ? setIsOpen(false) : null
  }, [loggedIn])
  // RETURN ---------------------
  return (
    <div className={`
          ${style.ModaleLog}
          ${isOpen ? style["open"] : style["notOpen"]}
        `}>
      <div className={style.header}>
        <div onClick={() => setIsOpen(false)} className={style.button}>
          <IoCloseCircle size={24} />
        </div>
      </div>
      <div className={style.container}>
        {isLoading ?
          <p>
            Elaborazione in corso...
          </p>
          :
          null
        }
        {access === "login" ?
          <>
            <h3>Login</h3>
            <Login isLoading={isLoading} setIsLoading={setIsLoading} />
            <p onClick={() => setAccess("register")} className={style.clickHere}>Don't have an account? Click here.</p>
          </>
          :
          <>
            <h3>Register</h3>
            <Signin isLoading={isLoading} setIsLoading={setIsLoading} />
            <p onClick={() => setAccess("login")} className={style.clickHere}>Already have an account? click here</p>
          </>
        }
      </div>
    </div>
  );
}

export default ModaleLog;