import Link from "next/link";
import styles from "src/components/Nav/index.module.scss";

export const Nav = (): JSX.Element => {
  const LINK_DATA = [
    {
      link: "/",
      text: "TOP",
    },
    {
      link: "/now",
      text: "上映中の映画",
    },
    {
      link: "/popular",
      text: "人気の映画",
    },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {LINK_DATA.map((data) => {
          return (
            <li key={data.link} className={styles.nav_list_link}>
              <Link href={data.link}>
                <a>{data.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
