import { useEffect, useState } from "react"
import { AnalogClock } from "./AnalogClock"
import { DigitalClock } from "./DigitalClock"


export const getTwoDigitsString = (number: number) => {
  return number < 10 ? '0' + number : number
}

type ClockPropsType = {
  mode: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
  const [date, setDate] = useState(new Date())

  useEffect(()=>{

    const inttervalId = setInterval(()=>{
      setDate(state => new Date())
    }, 1000)

    return () => {
      clearInterval(inttervalId)
    }
  },  [])

  return (
    props.mode === 'digital' 
      ? <DigitalClock date={date}/>
      : <AnalogClock date={date}/>
  )
}
