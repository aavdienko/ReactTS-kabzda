import { getTwoDigitsString } from "./Clock"


export type ClockViewPropsType = {
  date: Date
}

export const DigitalClock = (props: ClockViewPropsType) => {
  return (
    <div>
          <span>{getTwoDigitsString(props.date.getHours())}</span>
          :
          <span>{getTwoDigitsString(props.date.getMinutes())}</span>
          :
          <span>{getTwoDigitsString(props.date.getSeconds())}</span>
        </div>
  )
}