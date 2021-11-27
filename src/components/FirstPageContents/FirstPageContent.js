/* React Main Needs */
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../Dialog/SplitterDialogContext/SplitterDialogProvider';
import IndexOne from './IndexOne';
import IndexTwo from './IndexTwo';
import IndexZero from './IndexZero';

/* Component Function */
const FirstPageContent = () => {
  const [state] = useContext(SplitterDialogContext);

  return (
    <div>
      {state?.activeIndex === 0 && <IndexZero />}
      {state?.activeIndex === 1 && <IndexOne />}
      {state?.activeIndex === 2 && <IndexTwo />}
    </div>
  );
};

export const FirstPageMaxIndex = 3;

export default FirstPageContent;
