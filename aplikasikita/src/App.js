import React from 'react';

function HelloWorld(props){
  return <div style={{background: 'red'}}>{props.kata}</div>
}

function Button(props) {
  return <button onClick={() => alert(`Selamat Datang, ${props.nama}`)}> Coba klik saya </button>
}
function App() {
  return <div style={{background: 'red'}}>
    <HelloWorld kata='Bagas Satria Nurwinanto'/>
    <Button nama='Baga Satria Nurwinanto'/>
  </div>
}

export default App