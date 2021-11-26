/* React Main Needs */
import React, { useContext } from "react";
import { SplitterDialogContext } from "../SplitterDialogContext/SplitterDialogProvider";

/* Component Function */
const SplitterDialogRightContent = (props) => {
  const [state] = useContext(SplitterDialogContext);

  return (
    <div className="bg-indigo-800 h-full text-100 text-3xl text-center">
      <b>SplitterDialogRightContent</b>
      <br />
      {JSON.stringify(state)}
    </div>
  );
};

export default SplitterDialogRightContent;
