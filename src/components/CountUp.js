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
        {inView && <CountUp end={4} duration={5} />}
        <div className={styles.explain}>שנים בעסק</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={20} duration={2.5} />}
        <div className={styles.explain}>שברו את הלופ</div>
      </div>

    </div>
  );
};

export default CountingUp;