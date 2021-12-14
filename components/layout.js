import Link from 'next/link'
import styles from "./layout.module.css"

export default function Layout({ children, nav }) {
    return (
        <div className={styles.container}>
            <main> 
                <p>移転しました</p>
                <a href='https://hokazono.me' className="activeLink">https://hokazono.me</a>
            </main>
        </div>
    )
}