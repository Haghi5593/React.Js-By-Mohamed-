import {useState} from "react";

function App() {

// isVisible

let [isVisible, setIsVisible] = useState(false);

let toggle = () => {
  setIsVisible(!isVisible);
}



 return (

    <>

       <p>The button is {isVisible ? 'OFF' : 'ON'}</p>

       <button onClick={toggle}>Turn {isVisible ? 'ON' : 'OFF'}</button>
       </>

  )
}

export default App
