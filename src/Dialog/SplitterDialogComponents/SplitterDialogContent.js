/* React Main Needs */
import React, { useContext } from "react";
import { SplitterDialogContext } from "../SplitterDialogContext/SplitterDialogProvider";
import { ScrollPanel } from "primereact/scrollpanel";

/* Component Function */
const SplitterDialogContent = (props) => {
  const [state] = useContext(SplitterDialogContext);

  console.log(state?.activeIndex, ":10");
  return (
    <ScrollPanel style={{ width: "100%", height: "85%" }}>
      {state?.activeIndex === 0 && (
        <div className="bg-blue-100 h-full">{state?.count} sayıldı</div>
      )}
      {state?.activeIndex === 1 && (
        <div className="bg-green-100 h-full">{state?.count} sayıldı</div>
      )}
      {state?.activeIndex === 2 && (
        <div className="bg-yellow-100 h-full">{state?.count} sayıldı</div>
      )}
      {state?.activeIndex === 3 && (
        <div className="bg-pink-100 h-full">{state?.count} sayıldı</div>
      )}
    </ScrollPanel>
  );
};

export default SplitterDialogContent;
