import styles from "./SecondScreen.module.css"
import logo from "../images/דניאל טורייב.png"


import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import OnMe from "../components/OnMe"
import CountingUp from "../components/CountUp"
const SecondScreen=()=>{
    useEffect(()=>{

      ScrollReveal().reveal(`.${styles.li}`, {
          duration: 1000,
          distance: "30px",
          origin: "top", // Start from the right side
          easing: "ease-in-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
        ScrollReveal().reveal(`#קצת עלי`, {
            duration: 1500,
            distance:"30px",
            origin:"top",
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 500, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 0.2, // Set scale to 1 or null
    
          });

        ScrollReveal().reveal(`.${styles.image}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.name}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "50px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            beforeReveal: (domEl) => {
                domEl.classList.add(styles.rotate); // Add the rotate class
              },
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])

 return <>

 <div className={styles.wrap}>

    <div className={styles.title} id="קצת עלי"> שוברים את הלופ </div>
    <div className={styles.wraper}>

   <img className={styles.image} src={logo} alt="דניאל טורייב"/>
    <div className={styles.text}>
    <h1 className={styles.name}>דניאל טורייב</h1>
    <div className={styles.li}> יועץ ומלווה פיננסית אישית </div>
    <div className={styles.li}>יועץ לכלכלת המשפחה</div>
    <div className={styles.li}>יועץ משכנתאות</div>
    <div className={styles.li}>יזם נדלן</div>
  
    </div>
 </div>
 <CountingUp/>
    <OnMe/> 
   
    {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,117.3C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    </div>
 
    </>
}
export default SecondScreen