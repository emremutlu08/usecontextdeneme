/* React Main Needs */
import React, { useState } from "react";

const SplitterDialogContext = React.createContext([{}, () => {}]);

/* Component Function */
const SplitterDialogProvider = (props) => {
  const [state, setState] = useState({
    count: 0,
    openDialog: false,
    activeIndex: 0,
  });

  return (
    <SplitterDialogContext.Provider value={[state, setState]}>
      {props.children}
    </SplitterDialogContext.Provider>
  );
};

export { SplitterDialogContext, SplitterDialogProvider };
