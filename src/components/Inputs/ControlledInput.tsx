import {useState, ChangeEvent, MouseEvent } from "react"

type ControlledInputPropsType = {
  value: string
}



export const ControlledInput = (props: ControlledInputPropsType ) => {

  const [parentValue, setParentValue] = useState('')
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.value)
  }

  return (
    <div>
      <span>ControlledInput </span>
      <input value={parentValue} onChange={onChangeHandler}/> - {parentValue}
    </div>

  )
}

export const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false)
  const onClickHandler = (e: MouseEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
  }

  return (
    <div>
      <span>ControlledInput </span>
      <input type='checkbox' onClick={onClickHandler}/>
    </div>

  )
}


export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(event.currentTarget.value)
  }

  return (
    <div>
      <span>ControlledSelect </span>
      <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>

    </div>

  )
}

