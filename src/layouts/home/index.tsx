import { Header } from "src/components/header";
import type { LayoutProps } from "src/layouts/types";
import { NextSeo } from "next-seo";

export const HomeLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo title={props.title} description={props.description} />
      <Header />
      <main>{props.children}</main>
      <p>Homeだよ</p>
    </>
  );
};
