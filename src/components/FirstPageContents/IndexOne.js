/* React Main Needs */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../Dialog/SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const IndexOne = () => {
  const [state, setState] = useContext(SplitterDialogContext);
  console.log(state?.sendThisToDb?.numberValue, ':10');
  return (
    <div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setState({
            ...state,
            sendThisToDb: {
              ...state?.sendThisToDb,
              numberValue: e.target.numberValue.value,
            },
          });
        }}
      >
        <span className="p-float-label">
          <InputText
            id="numberValue"
            name="numberValue"
            defaultValue={state?.sendThisToDb?.numberValue}
          />
          <label htmlFor="numberValue">Number</label>
        </span>
        <br />
        <Button label="Save" type="submit" />
      </form>
    </div>
  );
};

export default IndexOne;
