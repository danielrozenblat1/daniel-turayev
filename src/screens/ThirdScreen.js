import BasicAccordion from "../components/Akordion"
import Results from "../components/Results"
import styles from "./ThirdScreen.module.css"
const ThirdPage=()=>{

return <>
<div className={styles.wrap}>
<BasicAccordion/>
<Results/>
<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026"  d="M0,32L80,64C160,96,320,160,480,202.7C640,245,800,267,960,261.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> 
</div>

</>

}
export default ThirdPage