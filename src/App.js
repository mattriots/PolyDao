import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    InitSwAuth();
}, []);

  return (
  
    <div>
        <sw-auth partner-key="d598a1d4a3688ef091006511966dfae96961b60f" use-dev='true'></sw-auth>
    </div>
  );
}

export default App;
