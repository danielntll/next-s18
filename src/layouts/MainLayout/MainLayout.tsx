import styles from './MainLayout.module.scss';

const MainLayout = ({ children }: any) => {
  // VARIABLES ------------------
  // CONDITIONS -----------------
  // FUNCTIONS ------------------
  // RETURN ---------------------
  return (
    <div className={styles.MainLayout}>
      {children}
    </div>
  );
}

export default MainLayout;