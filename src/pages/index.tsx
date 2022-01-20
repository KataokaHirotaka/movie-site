import type { NextPage } from "next";
import styles from "src/styles/Home.module.scss";
import { HomeLayout } from "src/layouts/home";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeLayout
        title="MovieHistory"
        description="あなたの見た映画の全てがここにあります。"
      >
        <p>test</p>
      </HomeLayout>
    </div>
  );
};

export default Home;
