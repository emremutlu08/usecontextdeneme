/* React Main Needs */
import React, { useContext } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SplitterDialogContext } from '../Dialog/SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const IndexZero = () => {
  const [state, setState] = useContext(SplitterDialogContext);

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
              textValue: e.target.textValue.value,
            },
          });
        }}
      >
        <span className="p-float-label">
          <InputText
            id="textValue"
            name="textValue"
            defaultValue={state?.sendThisToDb?.textValue}
          />
          <label htmlFor="textValue">Text</label>
        </span>
        <br />
        <Button label="Save" type="submit" />
      </form>
    </div>
  );
};

export default IndexZero;
