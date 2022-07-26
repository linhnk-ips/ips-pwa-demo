import styles from '../styles/Banner.module.css';

export default function Banner() {
    return ( 
        <div className={styles.mainHeader}>
            <a href="https://www.ips-ag.com/" ><div className={styles.passageLogo}></div></a>
            <div className={styles.spacer}></div>
            <a href="https://www.ips-ag.com/" className={styles.link}>Go to IPS</a>
        </div>
    );
}
