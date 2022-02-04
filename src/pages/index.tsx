import type { NextPage } from "next";
import styles from "src/styles/Home.module.scss";
import { HomeLayout } from "src/layouts/home";
import { useState } from "react";
import { Form } from "src/components/form";
import { SearchData } from "src/components/search-data";
const Home: NextPage = () => {
  // const [searchWord, setSearchWord] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className={styles.container}>
      <HomeLayout
        title="MovieHistory"
        description="あなたの見た映画の全てがここにあります。"
      >
        {/* <Form searchWord={searchWord} setSearchWord={setSearchWord} setIsSubmit={setIsSubmit}/> */}
        <SearchData />
        <p>test</p>
      </HomeLayout>
    </div>
  );
};

export default Home;
