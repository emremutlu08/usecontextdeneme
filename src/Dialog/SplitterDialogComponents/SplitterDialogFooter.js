/* React Main Needs */
import React, { useContext } from "react";
import { SplitterDialogContext } from "../SplitterDialogContext/SplitterDialogProvider";

/* Component Function */
const SplitterDialogFooter = (props) => {
  const [state, setState] = useContext(SplitterDialogContext);

  return (
    <div style={{ width: "100%", height: "5%" }} className="bg-indigo-100">
      <button onClick={() => setState({ ...state, count: state?.count + 1 })}>
        Sayıyı arttır
      </button>
    </div>
  );
};

export default SplitterDialogFooter;
