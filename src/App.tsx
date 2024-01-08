import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [setData, Data] = useState<any>('');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000");
      const data = await response.json();
      console.log(data)
      setData(data);
    }
    fetchData().catch(console.log);
  });


  return (
    <>
      <button onClick={async () => {
        await fetch("http://127.0.0.1:8000");
      }}>index</button>
      <button onClick={async () => {
        const response = await fetch("http://127.0.0.1:8000/login", { credentials: "include" });
        const data = await response.json();
        console.log(data)
      }}>login</button>
      <button onClick={async () => {
        const response = await fetch("http://127.0.0.1:8000/logout", { credentials: "include" });
        const data = await response.json();
        console.log(data)
      }}>logout</button>
      <button onClick={async () => {
        const response = await fetch("http://127.0.0.1:8000/account", { credentials: "include" });
        const data = await response.json();
        console.log(data)
      }}>account status</button >
    </>
  )
}

export default App
