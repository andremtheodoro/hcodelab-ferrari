import styles from './FullBanner.module.css';
import { StylesProvider } from '@material-ui/core';

export default function FullBanner(){
    return (
        /* JSX - sintaxe semelhente HTML */
        <div className={styles.destak}>
             <div className={styles.destakText}>
                 <p>
                      <span className={styles.hashtag}>#3.9 L V8</span>
                      <span className={styles.hashtag}>#720HP</span>
                      <span className={styles.hashtag}>$2mi</span>
                 </p>
                 <h1 className={styles.h1}>SF90 Stradale</h1>   
                 <button className={styles.btnDetail}>Detalhes</button>
             </div>
        </div>
    )
}