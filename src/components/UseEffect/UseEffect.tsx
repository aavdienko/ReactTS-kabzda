import React, { useEffect } from 'react';
import { useMemo, useState } from 'react';


//навороченный useState

export const SimpleUseEffect = () => {

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

export const SetTimeoutUseEffect = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutUseEffect');
  
    // useEffect сработает useEffect first render + counter change
    useEffect( () => {
      setTimeout( () => {
        console.log('useEffect first render + counter change');
        document.title = counter.toString()
      })
    }, [counter])
  
    // // useEffect сработает всегда
    useEffect( () => {
      setTimeout( () => {
        console.log('useEffect allways');
        document.title = counter.toString()
      })
    })

    // useEffect сработает useEffect first render
    useEffect( () => {
      setTimeout( () => {
        console.log('useEffect first render');
        document.title = counter.toString()
      })
    }, [])
  
  
    return (
      <div>
        Hello, {counter}
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={()=> setFake(fake + 1)}>+</button>
      </div>
    )
  
  }
  
  export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample:' + counter);
  
    // useEffect сработает useEffect first render + counter change
    useEffect( () => {

        console.log('effect occured:' + counter);
        return () => {
          console.log('reset effect:' + counter);
        }
      }, [counter])

    return (
      <div>
        Hello, {counter}
        <button onClick={()=> setCounter(counter + 1)}>+</button>
      </div>
    )
  
  }

  export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('KeysTrackerExample:' + text);
  
    useEffect( () => {
      const handler = (e: KeyboardEvent) => {
        console.log(e.key);
        setText(text + e.key)
      }
      window.addEventListener('keypress', handler)
      return () => {
        window.removeEventListener('keypress', handler)
      }
      }, [text])

    return (
      <div>
        Typed text, {text}
      </div>
    )
  }