/* React Main Needs */
import React, { useContext } from 'react';
import { Steps } from 'primereact/steps';
import { SplitterDialogContext } from '../SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const SplitterDialogSteps = () => {
  const [state, setState] = useContext(SplitterDialogContext);

  return (
    <Steps
      style={{ width: '100%', height: '10%' }}
      model={state?.indexItems}
      activeIndex={state?.activeIndex}
      onSelect={(e) => setState({ ...state, activeIndex: e.index })}
      readOnly={false}
    />
  );
};

export default SplitterDialogSteps;
