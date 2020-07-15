import React from 'react';

function HelloWorld(props){
  return <div style={{background: 'red'}}>{props.kata}</div>
}

function Button(props) {
  return <button onClick={() => alert(`Selamat Datang, ${props.nama}`)}> Coba klik saya </button>
}
function App() {
  return <div style={{background: 'red'}}>
    <HelloWorld kata='Hello World'/>
    <Button nama='Hello World'/>
  </div>
}

export default App