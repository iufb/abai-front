import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import logo from "/ais-logo-rs.png";
export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Ais logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <Button isLink={true} href="#form" variant="primary">
          Оставить заявку
        </Button>
      </div>
    </nav>
  );
};
