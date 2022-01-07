import Link from 'next/link'
import styles from "./layout.module.css"

export default function Layout({ children, nav }) {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <Link href="/">
                    <a className={styles.headerName} >
                        外園 玲央 / Reo Hokazono
                    </a>
                </Link>
                
                <nav className={styles.navContainer}>
                    <Link href="/">
                        <a className={nav == "home" ? "activeLink" : ""} >Works</a>
                    </Link>

                    <Link href="/profile">
                        <a className={nav == "profile" ? "activeLink" : ""} >Profile</a>
                    </Link>

                    <a href="https://github.com/ReoHokazono" target="_blank" rel="noopener noreferrer" >GitHub</a>
                </nav>

            </header>
            <main>{children}</main>
            
            <footer>
                © 2021-2022 Reo Hokazono. All Rights Reserved.
            </footer>
        </div>
    )
}