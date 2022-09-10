import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  const name = 'Elena';

  return (
    <div class="App-header">
      <Message name={name} />
    </div>
  );
}

export default App;
