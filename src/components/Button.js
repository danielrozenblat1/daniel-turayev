import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Button.module.css";

const Button = (props) => {
  const darkMode=props.darkMode
  return (
    <ScrollLink to="צור קשר" smooth={true} duration={1500} offset={-50}>
    <div className={styles.container}>
        <button className={ darkMode ? styles.button1 : styles.button}>{props.text}</button>
    </div>
    </ScrollLink>
  );
};

export default Button;