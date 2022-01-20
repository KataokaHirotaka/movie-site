import { useCallback } from "react";

export const Form = (): JSX.Element => {
  const clickHandle = useCallback(() => {}, []);
  const submitHandle = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <form onSubmit={submitHandle} role="search">
      <div>
        <input type="text" />
      </div>
      <div className="button-wrapper">
        <button role="button"></button>
      </div>
    </form>
  );
};
