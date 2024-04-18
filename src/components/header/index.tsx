import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>First<br/>Prague<br /> Roller Derby <br /></h1>
            <div className={styles.image}>
                <img src="/pcrd-logo.svg" alt="" />
            </div>
            <div className={styles.links}>
            <a href="https://www.instagram.com/praguecityrd/" title="instagram" target='_blank'><img src='/instagram.png' alt=''/></a>
            <a href="https://www.facebook.com/PragueCityRD" title="facebook" target='_blank'><img src='/facebook.png' alt=''/></a>
            </div>
        </header>
    );
}