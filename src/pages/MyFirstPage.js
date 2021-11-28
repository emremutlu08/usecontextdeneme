/* React Main Needs */
import React from 'react';
import SplitterDialog from '../components/Dialog/SplitterDialog';
import { SplitterDialogContext } from '../components/Dialog/SplitterDialogContext/SplitterDialogProvider';
import { Link } from 'react-router-dom';
import FirstPageContent from './../components/FirstPageContents/FirstPageContent';

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
        ];

        return (
          <div className="bg-green-100">
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
            <SplitterDialog PageContent={<FirstPageContent />} />
            <br />
            <Link to="/">Go To Initial Page</Link>
          </div>
        );
      }}
    </SplitterDialogContext.Consumer>
  );
};

export default MyInitialPage;
