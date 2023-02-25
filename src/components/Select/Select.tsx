import { useState } from 'react'
import styles from './Select.module.css'


type ItemsType ={
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {

  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }
  

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

  return (
    <div >
      {/* <select>
        <option value="1">Praha</option>
        <option value="2">Brno</option>
        <option value="3">Plzen</option>
      </select> */}
      {/* изменяемый стиль в зависимости от значения в стейт */}
      <div className={styles.select + ' ' + (active ? styles.active : '')}>
        <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {/* отрисовывается если active = true */}
        {active && 
          <div className={styles.items}>
            {props.items.map(item => 
              <div 
                onMouseEnter={()=>setHoveredElementValue(item.value)}
                className={styles.item + ' ' + (hoveredItem === item ? styles.selected : '')} 
                key={item.value} 
                onClick={()=>onItemClick(item.value)}
              >{item.title}</div>)}
          </div>
        } 

      </div>

    </div>
  )
}