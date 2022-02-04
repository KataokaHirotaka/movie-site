import { useCallback, useEffect, useReducer, useState } from "react";
import { Form } from "../form";

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
  const API_KEY = "0965bb0b2ed4a6b448e51c23934b8931";
  console.log(API_KEY);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = useCallback(async () => {
    console.log(7777777);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JP&query=${searchWord}&page=1`
      );
      if (!res.ok) {
        throw new Error("エラーが発生したためデータの取得に失敗しました。");
      }
      const json = await res.json;
      console.log(json);

      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  return (
    <div>
      <Form
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        getData={getData}
      />
      <p>検索データ</p>
    </div>
  );
};
