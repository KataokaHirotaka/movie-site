import { useState } from "react";
import { Form } from "src/components/form";
import { SearchLayout } from "src/layouts/search";

const Search = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <SearchLayout
      title="MovieHistory Search"
      description="あなたの映画を見つけてください。"
    >
      <Form searchWord={searchWord} setSearchWord={setSearchWord} />
      <p>test</p>
    </SearchLayout>
  );
};

export default Search;
