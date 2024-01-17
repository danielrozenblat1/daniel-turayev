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
            reset:false,
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
<input className={styles.input}  placeholder="גיל"></input>
{/* <p className={styles.p}>שעה נוחה לשיחה</p>
<select className={styles.input}>
<option className={styles.option}>8-12</option>
<option className={styles.option}>12-16</option>
<option className={styles.option}>16-20</option>
</select> */}
<div className={styles.checkboxContainer}>
<label htmlFor="acceptEmails" className={styles.checkboxLabel}>
              אני מסכים לקבל עדכונים בדוא''ל
            </label>
            <input
              type="checkbox"
              id="acceptEmails"
              name="acceptEmails"
              className={styles.ckeckbox}
            />
        
          </div>
<div className={styles.center}><button className={styles.button}>שלח</button></div>

</form>


</div>
</>


}
export default DetailsPage