import Button from "../components/Button"

import styles from "./FirstScreen.module.css"

import ScrollReveal from "scrollreveal"

import { useEffect } from "react"
import NavBar from "../components/NavBar"
const FirstScreen=()=>{
    useEffect(()=>{

        window.innerWidth<1200 &&ScrollReveal().reveal(`.${styles.slogen}`, {
          duration: 1000,
          distance: "30px",
          origin: "bottom", // Start from the right side
          easing: "ease-in-out",
          reset:true,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
  
        window.innerWidth>1200 &&ScrollReveal().reveal(`.${styles.slogen}`, {
            duration: 500,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
         ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.more}`, {
            duration: 1000,

            easing: "ease-in-out",
            reset:true,
            viewFactor: 0.2,
            interval: 0, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 0.2, // Set scale to 1 or null
    
          });
  },[])

return <>
<div className={styles.all}>
 {window.innerWidth >850 && <NavBar/>} 

{window.innerWidth >=850 &&<div className={styles.wrap}>

<div className={styles.title}>נמאס לחיות <div className={styles.blue}>מהיד לפה</div><br/> <div className={styles.blue}>כל חודש </div> מחדש ?</div>
<div className={styles.more}>ייעוץ פיננסי <div className={styles.blue}>ששובר את הלופ</div></div>
<Button text="לשיחת ייעוץ חינמית" darkMode={false}/>

</div>}

{window.innerWidth <850 &&<div className={styles.wrap}>

<div className={styles.title}>נמאס לחיות <div className={styles.blue}>מהיד לפה</div><br/> <div className={styles.blue}>כל חודש </div> מחדש ?</div>
<div className={styles.more}>ייעוץ פיננסי <div className={styles.blue}>ששובר את הלופ</div></div>
<Button text="לשיחת ייעוץ חינמית" darkMode={false}/>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EAD26F" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,112C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
{/* <svg  xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 1440 320" ><path   fill="#fff" fill-opacity="1" d="M0,256L120,213.3C240,171,480,85,720,74.7C960,64,1200,128,1320,160L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
</div>}

<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026" fill-opacity="1" d="M0,160L1440,64L1440,320L0,320Z"></path></svg>
</div>

</>

}
export default FirstScreen



{/* <div className={styles.title}>להכניס <div className={styles.blue}>אלפי שקלים</div>  כל חודש רק<div className={styles.blue}>  משעתיים עבודה</div> ביום </div> */}