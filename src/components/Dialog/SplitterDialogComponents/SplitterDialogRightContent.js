/* React Main Needs */
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const SplitterDialogRightContent = () => {
  const [state] = useContext(SplitterDialogContext);

  return (
    <div
      className="h-full text-100 text-3xl text-center"
      style={{ wordWrap: 'break-word', backgroundColor: 'indigo' }}
    >
      <b>SplitterDialogRightContent</b>
      <br />
      {JSON.stringify(state)}
    </div>
  );
};

export default SplitterDialogRightContent;
