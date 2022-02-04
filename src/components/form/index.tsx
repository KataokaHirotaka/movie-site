import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import styles from "src/components/form/index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const Form = (props: Props): JSX.Element => {
  const submitHandle = useCallback((e) => {
    e.preventDefault();
    props.setActive(true);
  }, []);

  const changeHandle = useCallback(
    (e) => {
      props.setSearchWord(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.searchWord]
  );

  return (
    <form
      className={styles.search_container}
      onSubmit={submitHandle}
      role="search"
    >
      <input
        type="text"
        placeholder="映画を検索"
        value={props.searchWord}
        onChange={changeHandle}
      />
      <div
        className={`${styles.button_wrapper} ${
          props.searchWord.length ? null : styles.off
        }`}
      >
        <button role="button">
          <FontAwesomeIcon icon={faSearch} size="lg" color="#333" />
        </button>
      </div>
    </form>
  );
};
