import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "src/components/header/index.module.scss";
import { Nav } from "../Nav";

export const Header = (): JSX.Element => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = useCallback(() => {
    setIsClick((prevIsClick) => !prevIsClick);
  }, []);
  return (
    <header className={styles.header}>
      <h1 className={styles.site_title}>
        <Link href="/">
          <a>Movie History</a>
        </Link>
      </h1>
      <button
        className={`${styles.nav_btn} ${isClick ? styles.on : null}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Nav isClick={isClick} />
    </header>
  );
};
