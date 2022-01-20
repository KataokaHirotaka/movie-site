import { NowLayout } from "src/layouts/now";

const Now = (): JSX.Element => {
  return (
    <NowLayout
      title="MovieHistory 上映中の映画"
      description="現在上映中の映画のページです。"
    >
      <p>現在上映中の映画のページです！</p>
    </NowLayout>
  );
};

export default Now;
