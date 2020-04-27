import Menu from './Menu';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
           <header className={styles.topSite}>
               <img src="/images/ferrari-logo.svg" className={styles.logo} />
                <Menu />
                <button className={styles.btnRegister}>Registre-se / Login</button>
           </header>
<div className={`${styles.flag} ${styles.green}`}></div>
<div className={`${styles.flag} ${styles.white}`}></div>
<div className={`${styles.flag} ${styles.red}`}></div>
        </>
    )
}