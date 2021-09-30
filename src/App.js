import logo from './logo.svg';
import './App.css';
import { initNotification } from './services/firebaseServices';

function App() {
  return (
    <div >
            <button onClick={initNotification}>
         Configure Notifications
      </button>

    </div>
  );
}

export default App;
