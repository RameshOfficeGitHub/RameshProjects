import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  async function submitFunction() {
    try {
      const res = await axios.post('https://ramesh-projects-server.vercel.app/user', { name: "ramesh", age: "24" })
      console.log("res", res.data.message)
      alert(res.data.message)
    } catch (error) {
      console.log("submitFunction", error)
    }
  }
  return (
    <div className="App">
      <button onClick={() => { submitFunction() }}>submit</button>
    </div>
  );
}

export default App;
