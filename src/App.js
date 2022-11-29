import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState('')

  function fetchAPI(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res=> res.json())
      .then(result =>{
        setData(result.meals);
        console.log(result.meals)
      })
  }

  useEffect(()=>{
    fetchAPI();
  },[])

  return (
    <div className="App">
      {data && data.map((i)=>{

        // console.log('===>',i)
        return <Card data = {i} />
      })}
    </div>
  );
}

export default App;
