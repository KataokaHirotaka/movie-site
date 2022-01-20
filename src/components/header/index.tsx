import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Movie History</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
