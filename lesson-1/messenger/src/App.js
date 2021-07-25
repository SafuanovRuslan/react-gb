import logo from './logo.svg';
import Message from './Message'
import './App.css';

function App() {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga nam adipisci esse quis illo facere mollitia cumque eaque quas facilis obcaecati ratione voluptate libero ab rerum, fugiat doloremque at iure corporis nobis numquam culpa.';

  return (
    <div className="App">
        <Message text={text} sender="Me" />
    </div>
  );
}

export default App;
