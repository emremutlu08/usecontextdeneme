/* React Main Needs */
import React from 'react';
import SplitterDialog from '../components/Dialog/SplitterDialog';
import { SplitterDialogContext } from '../components/Dialog/SplitterDialogContext/SplitterDialogProvider';
import { Link } from 'react-router-dom';
import InitialPageContent from './../components/InitialPageContents/InitialPageContent';

/* Component Function */
const MyInitialPage = () => {
  return (
    <SplitterDialogContext.Consumer>
      {(value) => {
        const [state, setState] = value;

        const items = [
          { label: 'Personal' },
          { label: 'Seat' },
          { label: 'Payment' },
          { label: 'Approve' },
        ];

        return (
          <div className="App">
            <button
              onClick={() => {
                setState({
                  ...state,
                  openDialog: true,
                  indexItems: items,
                });
              }}
            >
              Open Dialog
            </button>
            {JSON.stringify(state)}
            <SplitterDialog PageContent={<InitialPageContent />} />
            <br />
            <Link to="/first" style={{ color: 'white' }}>
              Go To First Page
            </Link>
          </div>
        );
      }}
    </SplitterDialogContext.Consumer>
  );
};

export default MyInitialPage;
