import Link from "next/link";
import styles from "src/components/header/index.module.scss";
import { Nav } from "../Nav";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.site_title}>
        <Link href="/">
          <a>Movie History</a>
        </Link>
      </h1>
      <button className={styles.nav_btn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Nav />
    </header>
  );
};
