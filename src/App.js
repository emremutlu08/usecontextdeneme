import React from 'react';
import './App.css';
import { SplitterDialogProvider } from './components/Dialog/SplitterDialogContext/SplitterDialogProvider';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import RouteList from './utils/routes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <SplitterDialogProvider>
      <RouteList />
      <Outlet />
    </SplitterDialogProvider>
  );
}

export default App;
