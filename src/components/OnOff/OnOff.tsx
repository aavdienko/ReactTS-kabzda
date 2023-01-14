import { FC } from "react"
import styles from './OnOff.module.css'

type OnOffPropsType = {
  active: boolean
}

export const OnOff: FC<OnOffPropsType> = (props) => {
  return (
    <div>
      { props.active && <span className={styles.on}>ON</span>}
      { props.active && <span className={styles.onIndicator}>+</span>}
      { !props.active && <span className={styles.off}>OFF</span>}
      { !props.active && <span className={styles.offIndicator}>+</span>}
    </div>
  )
}