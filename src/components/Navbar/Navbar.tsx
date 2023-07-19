import ModaleLog from '../ModaleLog/ModaleLog';
import Maininput from '../mainInput/Maininput';
import style from './Navbar.module.scss'
import { IoLogIn } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";

import { useState, useEffect } from 'react';
import { useAuth } from '@/utils/auth';


const Navbar = () => {
  // VARIABLES ------------------
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { loggedIn } = useAuth();
  const auth = getAuth();
  // CONDITIONS -----------------

  // FUNCTIONS ------------------

  // RETURN ---------------------
  return (
    <>
      <div className={style.Navbar}>
        <Maininput />
        {!loggedIn ?
          <div onClick={() => setIsOpen(!isOpen)} className={style.button}>
            <IoLogIn size={32} />
            Login
          </div>
          :
          <div onClick={() => signOut(auth)} className={style.button}>
            <IoLogIn size={32} />
            Logout
          </div>
        }
      </div>
      <ModaleLog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;