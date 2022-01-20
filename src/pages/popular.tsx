import { PopularLayout } from "src/layouts/popular";

const Popular = (): JSX.Element => {
  return (
    <PopularLayout
      title="MovieHistory PopularMovie"
      description="現在人気の映画のページです。"
    >
      <p>人気の映画のページ</p>
    </PopularLayout>
  );
};

export default Popular;
