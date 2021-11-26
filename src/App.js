import "./App.css";
import SplitterDialog from "./Dialog/SplitterDialog";
import {
  SplitterDialogContext,
  SplitterDialogProvider,
} from "./Dialog/SplitterDialogContext/SplitterDialogProvider";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <SplitterDialogProvider>
      <SplitterDialogContext.Consumer>
        {(value) => {
          const [state, setState] = value;

          return (
            <div className="App">
              <button
                onClick={() => {
                  setState({ ...state, openDialog: true });
                }}
              >
                Open Dialog
              </button>
              {JSON.stringify(state)}
              <SplitterDialog />
            </div>
          );
        }}
      </SplitterDialogContext.Consumer>
    </SplitterDialogProvider>
  );
}

export default App;
