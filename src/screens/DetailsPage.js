import { useEffect } from "react";
import Button from "../components/Button"
import  styles from "./DetailsPage.module.css"
import ScrollReveal from "scrollreveal";
const DetailsPage=()=>{
    useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:true,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
return <>

<div className={styles.container}>

    <div className={styles.title} id="צור קשר">צור קשר</div>
<form className={styles.form}>
<input className={styles.input} placeholder="שם מלא"></input>
<input className={styles.input} placeholder="מספר טלפון"></input>
<input className={styles.input}  placeholder="דוא''ל"></input>
<div className={styles.center}><button className={styles.button}>שלח</button></div>

</form>


</div>
</>


}
export default DetailsPage