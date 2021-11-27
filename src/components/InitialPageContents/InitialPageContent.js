/* React Main Needs */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../Dialog/SplitterDialogContext/SplitterDialogProvider';

/* Component Function */
const InitialPageContent = () => {
  const [state, setState] = useContext(SplitterDialogContext);

  return (
    <div>
      {state?.activeIndex === 0 && (
        <div className="bg-blue-100 h-full">
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setState({
                ...state,
                sendThisToDb: {
                  ...state?.sendThisToDb,
                  textValue0: e.target.textValue.value,
                },
              });
            }}
          >
            <span className="p-float-label">
              <InputText
                id="textValue"
                name="textValue"
                defaultValue={state?.sendThisToDb?.textValue0}
              />
              <label htmlFor="textValue">Text</label>
            </span>
            <br />
            <Button label="Save" type="submit" />
          </form>
        </div>
      )}
      {state?.activeIndex === 1 && (
        <div className="bg-green-100 h-full">
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setState({
                ...state,
                sendThisToDb: {
                  ...state?.sendThisToDb,
                  textValue1: e.target.textValue.value,
                },
              });
            }}
          >
            <span className="p-float-label">
              <InputText
                id="textValue"
                name="textValue"
                defaultValue={state?.sendThisToDb?.textValue1}
              />
              <label htmlFor="textValue">Text</label>
            </span>
            <br />
            <Button label="Save" type="submit" />
          </form>
          <br />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
          <InputText disabled defaultValue={state?.sendThisToDb?.textValue0} />
        </div>
      )}
      {state?.activeIndex === 2 && (
        <div className="bg-yellow-100 h-full">
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setState({
                ...state,
                sendThisToDb: {
                  ...state?.sendThisToDb,
                  textValue2: e.target.textValue.value,
                },
              });
            }}
          >
            <span className="p-float-label">
              <InputText
                id="textValue"
                name="textValue"
                defaultValue={state?.sendThisToDb?.textValue2}
              />
              <label htmlFor="textValue">Text</label>
            </span>
            <br />
            <Button label="Save" type="submit" />
          </form>
        </div>
      )}
      {state?.activeIndex === 3 && (
        <div className="bg-pink-100 h-full">
          <br />
          {state?.sendThisToDb?.textValue0} {state?.sendThisToDb?.textValue1}{' '}
          {state?.sendThisToDb?.textValue2}
        </div>
      )}
    </div>
  );
};

export default InitialPageContent;
