/* React Main Needs */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SplitterDialogInitialState from './SplitterDialogInitialState.json';

const SplitterDialogContext = React.createContext([{}, () => {}]);

/* Component Function */
const SplitterDialogProvider = (props) => {
  const [state, setState] = useState(SplitterDialogInitialState);

  return (
    <SplitterDialogContext.Provider value={[state, setState]}>
      {props.children}
    </SplitterDialogContext.Provider>
  );
};

SplitterDialogProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { SplitterDialogContext, SplitterDialogProvider };
