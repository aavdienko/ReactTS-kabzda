import { useEffect, useState } from "react"



export const OwnClock = () => {

  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hrs, setHrs] = useState(0)


  // useEffect(()=> {
  //   setInterval(()=>{
  //     if (sec !== 59) {
  //       setSec(sec + 1)
  //       // let numSec = Number(sec)
  //       // setSec((numSec + 1).toString())
  //     } 
  //     else if (sec === 59) {
  //       setSec(0)
  //       setMin(min + 1)
  //       // let numMin = Number(min)
  //       // setSec('00')
  //       // setMin((numMin + 1).toString())
  //     } 
  //     else if (sec === 59 && min === 59){
  //       setSec(0)
  //       setMin(0)
  //       setHrs(hrs + 1)
  //       // let numHrs = Number(hrs)
  //       // setSec('00')
  //       // setMin('00')
  //       // setMin((numHrs + 1).toString())
  //     }
  //   }, 1000)

  // }, [sec])

  // const onClick = () => {
  //   if (sec !== '59') {
  //     let numSec = Number(sec)
  //     setSec((numSec + 1).toString())
  //   } 
  //   else if (sec === '59') {
  //     let numMin = Number(min)
  //     setSec('00')
  //     setMin((numMin + 1).toString())
  //   } 
  //   else if (sec === '59' && min === '59'){
  //     let numHrs = Number(hrs)
  //     setSec('00')
  //     setMin('00')
  //     setMin((numHrs + 1).toString())
  //   }
  // } 


  return (
    <div>
      {hrs}:{min}:{sec}
      {/* <button onClick={onClick}>+</button> */}
    </div>
  )
}