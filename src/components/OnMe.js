import  styles from "./OnMe.module.css"
import Button from "../components/Button"


import { useEffect,useRef } from "react"
import { Player } from '@lordicon/react';
import personal from "../icons/wired-lineal-949-bonds.json"
import wallet from "../icons/wired-lineal-421-wallet-purse.json"
import finance from"../icons/wired-lineal-972-financial-project.json"
import ScrollReveal from "scrollreveal"
    const OnMe=()=>{
        const containerRef = useRef(null);
        const playerRef1 = useRef(null);
        const playerRef2 = useRef(null);
        const playerRef3 = useRef(null);

        useEffect(()=>{
    
            playerRef1.current?.playFromBeginning();
            playerRef2.current?.playFromBeginning();
            playerRef3.current?.playFromBeginning();
 
               
               
            ScrollReveal().reveal(`.${styles.box1}`, {
                duration: 1000,
                distance: "30px",
                origin: "right", // Start from the right side
                easing: "ease-out",
                reset:false,
                viewFactor: 0.2,
                interval: 100, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1, // Set scale to 1 or null
    
              });
  
    
      
        },[])
    
        return <><div className={styles.background} id="קצת עלי">
            <div className={styles.row}>
            <div className={styles.box1} id="center4">
        <div className={styles.title1}>ליווי לכל מטרה</div>
        <div className={styles.row}>
        <div className={styles.icons}>
            <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
            icon={personal}
          /></div>
        </div>
        <div className={styles.sentence1}>רכב,בית או אפילו חתונה, לא משנה מה המטרה שלך, נגיע אליה ! </div>
        <div className={styles.center}><Button darkMode={true} text="לתיאום פגישת ייעוץ"/></div>
        </div>
        <div className={styles.box1} id="center4">
        <div className={styles.title1} >צמיחה פיננסית</div>
        <div className={styles.row}>
            <div className={styles.icons}>
            <Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={finance}/></div>
        </div>
        <div className={styles.sentence1}>הגדלת ההון בעזרת כלים ושיטות מוכחות</div>
       <div className={styles.center}><Button darkMode={true} text="לתיאום פגישת ייעוץ"/></div>
        </div>
        <div className={styles.box1} id="center4" >
        <div className={styles.title1} >ביטחון כלכלי</div>
        <div className={styles.row}>
            <div className={styles.icons}>
                <Player 
            ref={playerRef3} 
            size="100%"
            onComplete={() => playerRef3.current?.playFromBeginning()}
            icon={wallet}
          /></div>
        </div>
        <div className={styles.sentence1}>כיסוי חובות וסגירת המינוס אף פעם לא היו קלים יותר איתי </div>
        <div className={styles.center}><Button  darkMode={true} background={false} text="לתיאום פגישת ייעוץ"/></div>
        </div>
    
    
        
   
        
        </div>
       
        </div>
        </>
}
export default OnMe