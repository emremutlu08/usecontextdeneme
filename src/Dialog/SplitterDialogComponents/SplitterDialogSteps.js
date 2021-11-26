/* React Main Needs */
import React, { useContext } from "react";
import { Steps } from "primereact/steps";
import { SplitterDialogContext } from "../SplitterDialogContext/SplitterDialogProvider";

/* Component Function */
const SplitterDialogSteps = (props) => {
  const [state, setState] = useContext(SplitterDialogContext);
  const items = [
    { label: "Personal" },
    { label: "Seat" },
    { label: "Payment" },
    { label: "Confirmation" },
  ];

  return (
    <Steps
      style={{ width: "100%", height: "10%" }}
      model={items}
      activeIndex={state?.activeIndex}
      onSelect={(e) => setState({ ...state, activeIndex: e.index })}
      readOnly={false}
    />
  );
};

export default SplitterDialogSteps;
