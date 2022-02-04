import { useCallback, useEffect, useReducer, useState } from "react";
import { Form } from "../form";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("no such action type!");
  }
};

export const SearchData = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [active, setActive] = useState(false); // データを検索した時にtrueになる
  console.log(searchWord);
  console.log(active);

  const API_KEY = "0965bb0b2ed4a6b448e51c23934b8931";

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (active) {
      // データ送信ボタンをクリックされた時のみデータを取得
      getData(searchWord);
    }
  }, [active]);

  const getData = useCallback(
    (searchWord: string) => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JP&query=${searchWord}&page=1`;

      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setActive(false);
        })
        .catch((error) => {
          console.log(error);
        });
      // try {
      //   const res = fetch(
      //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JP&query=${searchWord}&page=1`
      //   );
      //   if (!res.ok) {
      //     throw new Error("エラーが発生したためデータの取得に失敗しました。");
      //   }
      //   const json = res.json;
      //   console.log(json);

      //   dispatch({ type: "end", data: json });
      // } catch (error) {
      //   dispatch({ type: "error", error });
      // }
    },
    [active === true]
  );

  return (
    <div>
      <Form
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setActive={setActive}
      />
      <p>検索データ</p>
    </div>
  );
};
