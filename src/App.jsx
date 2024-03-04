
import './App.css'
import Counter from './Component/Counter';
import Familys from './Component/Familys';
import Mains from './Component/Mains';
import User from './Component/User';

function App() {
 
function handleclick(){
  alert('click me');
}
  return (
    <>
      <h1>react core concept</h1>
      <Familys></Familys>




      {/* <Mains></Mains> */}
      {/* <Counter></Counter>
      <User></User>
      <button onClick={handleclick}>abc</button>
      <button onClick={()=>{alert('click 234')}}>567</button> */}
    </>
  )
}

export default App
