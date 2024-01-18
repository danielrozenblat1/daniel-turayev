
import styles from "./Results.module.css"
 import danielResults from "../images/תוצאות.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import result from "../images/דניאל תוצאות 1.png"
import result1 from "../images/דניאל תוצאות 2.png"
import result2 from "../images/דניאל תוצאות 3.png"
import result3 from "../images/דניאל תוצאות 4.png"
import result4 from "../images/דניאל תוצאות 1.png"


import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Results=()=>{
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
     
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const content = [
  
        {
          type: 'image',
          src: result,
        },
     

          {
            type: 'image',
            src: result1,
          },
          {
            type: 'image',
            src: result2,
          },
          {
            type: 'image',
            src: result3,
          },
          {
            type: 'image',
            src: result4,
          },

 
        // Add more images and videos as needed
      ];

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
          ScrollReveal().reveal(`.${styles.explain}`, {
              duration: 1500,
              distance:"30px",
              origin:"top",
              easing: "ease-out",
              reset:false,
              viewFactor: 0.2,
              interval: 500, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 0.8, // Set scale to 1 or null
      
            });
  
          ScrollReveal().reveal(`.${styles.title}`, {
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
            ScrollReveal().reveal(`.${styles.image}`, {
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
      },[])
return <>

<div className={styles.title} id="לקוחות ממליצים">תוצאות</div>
<div className={styles.center}><img className={styles.image} src={danielResults}/></div>
<div className={styles.explain}>ועכשיו ניתן לתוצאות של המלווים שלי לדבר</div>

<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`דניאל טורייב לקוח ממליץ מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>

</>





}
export default Results