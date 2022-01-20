import { Header } from "src/components/header";
import type { LayoutProps } from "src/layouts/types";

export const SearchLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
    </>
  );
};
