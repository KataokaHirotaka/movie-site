import { NextSeo } from "next-seo";
import { Form } from "src/components/form";
import { Header } from "src/components/header";
import { LayoutProps } from "../types";

export const NowLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo />
      <Header />
      <Form />
      <div>{props.children}</div>
    </>
  );
};
