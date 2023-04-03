import React from 'react';
import { useMemo, useState } from 'react';


//навороченный useState

export const UseState = () => {

  const generateData = () => {
    console.log('GD');
    
    return 1231313423
    // имитация тяжелого расчета
  }

  // В этом случае generateData будет вызываться всегда, не смотря на то, что значение уже расчитанно и запомнено для слюдующих расчетов
  // const initValue = generateData()
  // const [counter, setCounter] = useState(initValue)


  // В этом случае функция вызовится 1 раз, на первом рендере, т.к. useMemo запомнит ее результат, а пустой массив зависимостей говорит о том, что она сработает только 1 раз.
  // const initValue = useMemo(generateData,[]) 
  // const [counter, setCounter] = useState(initValue)


  // если передать функцию как инициализ значение, то результат будет как useMemo
  // используется только в случае тяжелых расчетов

  // в setCounter можно передать функцию, в которой мы пропишем логику, например: counter + 1

  const changer = (state: number) => {
    return state + 1
  }

  const [counter, setCounter] = useState(generateData)

  return (
    <div>
      <button onClick={()=> setCounter(changer)}>+</button>
      {counter}
    </div>
  )

}