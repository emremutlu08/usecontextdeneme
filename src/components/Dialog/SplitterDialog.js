/* React Main Needs */
import React, { useContext } from 'react';
import { SplitterDialogContext } from './SplitterDialogContext/SplitterDialogProvider';
import SplitterDialogFooter from './SplitterDialogComponents/SplitterDialogFooter';
import SplitterDialogContent from './SplitterDialogComponents/SplitterDialogContent';
import SplitterDialogSteps from './SplitterDialogComponents/SplitterDialogSteps';
import SplitterDialogRightContent from './SplitterDialogComponents/SplitterDialogRightContent';
import { Dialog } from 'primereact/dialog';
import SplitterDialogInitialState from './SplitterDialogContext/SplitterDialogInitialState.json';

/* Component Function */
const SplitterDialog = (props) => {
  const [state, setState] = useContext(SplitterDialogContext);

  return (
    <Dialog
      header="Header"
      visible={state?.openDialog}
      style={{ width: '95vw', height: '90vh' }}
      onHide={() => setState(SplitterDialogInitialState)}
      draggable={false}
    >
      <div className="flex h-full">
        <div className="w-3">
          <SplitterDialogSteps />
          <SplitterDialogContent {...props} />
          <SplitterDialogFooter />
        </div>
        <div className="w-9">
          <SplitterDialogRightContent />
        </div>
      </div>
    </Dialog>
  );
};

export default SplitterDialog;
