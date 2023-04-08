import { useEffect, useState } from "react"


const getTwoDigitsString = (number: number) => {
  return number < 10 ? '0' + number : number
}

export const Clock = () => {
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
    <div>
      <span>{getTwoDigitsString(date.getHours())}</span>
      :
      <span>{getTwoDigitsString(date.getMinutes())}</span>
      :
      <span>{getTwoDigitsString(date.getSeconds())}</span>

    </div>
  )
}