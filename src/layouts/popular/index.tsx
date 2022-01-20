import { NextSeo } from "next-seo";
import { Form } from "src/components/form";
import { Header } from "src/components/header";
import { LayoutProps } from "../types";

export const PopularLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo title={props.title} description={props.description} />
      <Header />
      <Form />
      <div>{props.children}</div>
    </>
  );
};
