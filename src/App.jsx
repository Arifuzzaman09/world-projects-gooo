import { Suspense } from "react";
import Contries from './component/contries'
import './App.css'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  
  return (
    <>
    

    <Suspense fallback = {<p>Nadir vai loading.....</p>}>
       <Contries contriesPromise = {contriesPromise}></Contries>
    </Suspense>
         
             

    </>
  )
}

export default App
