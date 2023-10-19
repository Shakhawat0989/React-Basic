import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hi from './components/Welcome';
import Click from './components/EventHandler';
import Update from './components/State';
import Fruit from './components/UseState';
import Check from './components/DataBinding';
import MInput from './components/MultipleInput';
import Area from './components/Textarea';
import Age from './components/SelectOption';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name='Mango' weight='20gm'/>
        <Hello name='Orange' weight='30gm'/>
        <Hello name='Banana' weight='40gm'/>
        <Hello name='Apple' weight='50gm'/>
        <Hi />
        <Click />
        <Update />
        <Fruit />
        <Check />
        <MInput />
        <Area />
        <Age />
      </header>
    </div>
  );
}

export default App;
