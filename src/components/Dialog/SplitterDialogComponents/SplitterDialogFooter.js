/* React Main Needs */
import { Button } from 'primereact/button';
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const SplitterDialogFooter = () => {
  const [state, setState] = useContext(SplitterDialogContext);
  const canGoNext =
    state?.indexItems?.length > 0 &&
    state?.activeIndex < state?.indexItems?.length - 1;

  const canGoBack = state?.activeIndex > 0;

  return (
    <div
      style={{ width: '100%', height: '5%' }}
      className="bg-indigo-100 flex justify-content-between"
    >
      <Button
        disabled={!canGoBack}
        onClick={() =>
          canGoBack &&
          setState({ ...state, activeIndex: state?.activeIndex - 1 })
        }
      >
        {'<'} Önceki Sayfa
      </Button>
      <Button
        onClick={() =>
          canGoNext &&
          setState({ ...state, activeIndex: state?.activeIndex + 1 })
        }
        disabled={!canGoNext}
      >
        Sonraki Sayfa {'>'}
      </Button>
    </div>
  );
};

export default SplitterDialogFooter;
