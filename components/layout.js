import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <Link href="/">
          <a className={styles.headerName}>Reo Hokazono</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
