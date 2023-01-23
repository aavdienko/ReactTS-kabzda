import { FC, useState } from "react"
import { isPropertySignature } from "typescript"


type OnOffPropsType = {
  // active: boolean
}

export const OnOff: FC<OnOffPropsType> = (props) => {

  const [active, setActive] = useState(false)

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: active ? 'green' : 'white'
  } 
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: active ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: active ? 'green' : 'red'
  }

  return (
    <div>
      <div style={onStyle} onClick={()=>{setActive(true)}}>On</div>
      <div style={offStyle} onClick={()=>{setActive(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}


    // <div>
    //   { props.active && <span className={styles.on}>ON</span>}
    //   { props.active && <span className={styles.onIndicator}>+</span>}
    //   { !props.active && <span className={styles.off}>OFF</span>}
    //   { !props.active && <span className={styles.offIndicator}>+</span>}
    // </div>
