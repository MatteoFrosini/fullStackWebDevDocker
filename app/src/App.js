import { useState, useEffect } from 'react';
function App() {
  const [alunni, setAlunni] = useState([]);

  useEffect(() => {
    loadAlunni();  
  }, [])

  async function loadAlunni(){
    const response =  await fetch(`http://localhost:8080/test`, {method: "GET"});
    const a = await response.json();
    setAlunni(a)
    console.log(a)
  }

  return (
    <div className="App">
      look console log
    </div>
  );
}

export default App;




