import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 4px 15px 0px rgba(0, 0, 38, 0.3)',
          width: "100%",
          margin: "auto",
          background: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'RubikR',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply white color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'RubikR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:true,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,117.3C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div className={styles.title}>שאלות נפוצות</div>
      <DropdownAccordion title="למה שאבחר דווקא בך ?" content="יש לי המון מתחרים ומתחרות וכולם ראויים , המודל במיוחד שלי עובד לפי תוצאות ! , לא הגעת לחשיפה הנדרשת ? ממשיכים לצלם !" />
      <DropdownAccordion title="מה מיוחד בצילום איתך ?" content="הצילום עצמו הוא לא הדבר המיוחד , האווירה שמגיעה ביחד איתו , התסריטים לסרטונים והחשיבה מאחורי הקלעים על מה שיתפוס ברשתות הוא המיוחד" />
      <DropdownAccordion title="למה בעל עסק צריך מנהלת סושיאל ?" content="יש המון סיבות ,חלקן הן בעלי עסקים שלא מסתדרים עם הרשתות החברתיות , בעלי עסקים שלא מצליחים להתמודד עם העומס עליהם ומעדיפים להאציל סמכות על מומחים בתחום או בעלי עסקים שלא הצליחו בעצמם להגיע לחשיפה שהם רוצים" />
      <DropdownAccordion title= "איך תהליך העבודה איתך מתבצע" content="  תחילה אנחנו מכירים ומבינים מי קהל היעד שלנו , פותחים עמודי סושיאל חדשים במידת הצורך ועושים צילומי תדמית , לאחר מכן אני מגיעה עם 20 רעיונות לסרטונים שנצטרך לצלם, נבחר את המועדפים ונתחיל בתהליך , לאורך הזמן אני עורכת את הסרטונים ומעלה אותם לרשתות, מתחזקת את החשבונות ומעדכנת בהתפתחויות " />

      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}

    </div>
  
  );
}
