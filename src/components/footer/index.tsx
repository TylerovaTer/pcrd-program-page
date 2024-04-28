import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
        <div className={styles.links}>
            <a href="https://www.instagram.com/praguecityrd/" title="instagram" target='_blank'><img src='/instagram.png' alt=''/></a>
            <a href="https://www.facebook.com/PragueCityRD" title="facebook" target='_blank'><img src='/facebook.png' alt=''/></a>
        </div>
        <p>© 2024 Prague City Roller Derby</p>
        </footer>
    )}
