import styles from '../styles/Banner.module.css';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className={styles.mainHeader}>
            <Link href='https://www.ips-ag.com/'><div className={styles.passageLogo}></div></Link>
            <div className={styles.spacer}></div>
        </div>
    );
}
