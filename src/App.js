import logo from './logo.svg';
import './App.css';
import Africa from './components/Africa';
import America from './components/America';
import Asia from './components/Asia';
import Europa from './components/Europe';

function App() {
  return (
    <div>
      <Africa price='500$' days='7 Days' travelBy='Car' />
      <America price='600$' days='3 Days' travelBy='Plane'/>
      <Asia price='800$'  days='5 Days' travelBy='Bus'/>
      <Europa price='300$' days='14 Days'travelBy='Train' />

    </div>
  );
}

export default App;
