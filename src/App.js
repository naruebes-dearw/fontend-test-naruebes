import './App.css';
import axios from 'axios';
import Container from './components/Container';
import { useState, useEffect } from 'react';

function App() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
      .then(res => setstate([...res.data]))
      .catch(err => console.log(err))
  }, [])

  console.log(state);
  return (
    <div className="App">
      {state[0] && state.map(data => (
        <Container key={data.id} props={data} />
      ))}
    </div>
  );
}

export default App;
