import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';
import { useEffect } from 'react';

function App() {
  return (
    <div>
        <sw-auth partner-key="d598a1d4a3688ef091006511966dfae96961b60f" use-dev='true'></sw-auth>
    </div>
  );
}

InitSwAuth();
export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
