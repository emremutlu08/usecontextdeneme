/* React Main Needs */
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../Dialog/SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const IndexTwo = () => {
  const [state] = useContext(SplitterDialogContext);
  console.log(state, ':8');
  return (
    <div>
      IndexTwo
      <br />
      You can use this <br />
      <b>sendThisToDb = {JSON.stringify(state.sendThisToDb)}</b> <br /> in
      anywhere in the app or dialog!
    </div>
  );
};

export default IndexTwo;
