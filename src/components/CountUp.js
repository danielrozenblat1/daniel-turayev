import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 
      <div className={styles.font}>
        {inView && <CountUp end={217892} duration={2.5} />}
        <div className={styles.explain}>ש''ח שהלקוחות שלי<br/> סגרו איתו את המינוס</div>
      </div>
      
      <div className={styles.font}>
        {inView && <CountUp end={152977} duration={2.5} />}
        <div className={styles.explain}> ש״ח שחסכתי ללקוחות שלי <br/>מעמלות וריביות שהתלוו לחובות</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={14} duration={5} />}
        <div className={styles.explain}>משפחות <br/>שסגרו את המינוס</div>
      </div>
    </div>
  );
};

export default CountingUp;