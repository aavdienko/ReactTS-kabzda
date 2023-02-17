import { useState } from "react"

export const UncontrolledInput = ( ) => {
  return (
    <div>
      <span>UncontrolledInput </span>
      <input/>
    </div>

  )
}

export const UncontrolledInputWithTrackedValue = ( ) => {
  const [value, setValue] = useState('')

  return (
    <div>
      <span>UncontrolledInputWithTrackedValue </span>
      <input onChange={(event)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)
      }}/> - {value}
    </div>

  )
}
