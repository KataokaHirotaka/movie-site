import { Header } from "src/components/header";
import type { LayoutProps } from "src/layouts/types";
import { NextSeo } from "next-seo";
import { Form } from "src/components/form";

export const HomeLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo title={props.title} description={props.description} />
      <Header />
      <Form />
      <main>{props.children}</main>
      <p>Homeだよ</p>
    </>
  );
};
