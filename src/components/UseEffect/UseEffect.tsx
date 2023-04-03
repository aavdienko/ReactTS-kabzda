import React, { useEffect } from 'react';
import { useMemo, useState } from 'react';


//навороченный useState

export const UseEffect = () => {

// simpleExample

  const [counter, setCounter] = useState(1)
  console.log('simpleExample');


// сработает всегда (т.к. не передан массив зависимостей)
  useEffect( () => {
    console.log('useEffect every render');
    document.title = counter.toString()
    //запросы на сервер
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'название'
  })

  // сработает при первом ренедере (т.к. пустой массив зависимостей)
  useEffect( () => {
    console.log('useEffect first render');
    document.title = counter.toString()
  }, [])


  // сработает при изминении counter (т.к. передан в массиве зависимостей)
  useEffect( () => {
    console.log('useEffect first render + counter change');
    document.title = counter.toString()
    //запросы на сервер
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'название'
  }, [counter])



  return (
    <div>
      Hello, {counter}
      <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
  )

}

