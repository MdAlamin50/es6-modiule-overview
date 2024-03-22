import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches , setWatches]=useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
    // const watches =[
    //   {id:1, name:'Apple watch', price:200},
    //   {id:2, name:'Samsu watch', price:200},
    //   {id:3, name:' MI watch', price:200},
      
    // ]
    // const watches =[
    //   {
    //     "id": 1,
    //     "name": "Apple Watch Series 7",
    //     "price": 399
    //   },
    //   {
    //     "id": 2,
    //     "name": "Samsung Galaxy Watch 4",
    //     "price": 249
    //   },
    //   {
    //     "id": 3,
    //     "name": "Fitbit Sense",
    //     "price": 299
    //   },
    //   {
    //     "id": 4,
    //     "name": "Garmin Forerunner 945",
    //     "price": 599
    //   },
    //   {
    //     "id": 5,
    //     "name": "Huawei Watch GT 3",
    //     "price": 199
    //   }
    // ];

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id}watch={watch}></Watch>)
      }
     
    </>
  )
}

export default App
