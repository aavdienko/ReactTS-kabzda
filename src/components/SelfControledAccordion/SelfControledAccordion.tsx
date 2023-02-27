import { useReducer, useState } from 'react';
import { collapsedAC, reducer } from './SelfContAccordionReducer';

type ItemsType = {
  title: string
  value: number
}


type AccordionPropsType = {
  title: string
  items: ItemsType[]
  onclickHandler: (value: any) => void
  // collapsed: boolean
}



export function SelfControledAccordion(props: AccordionPropsType) {

  // const [collapsed, setColapsed] = useState(false)

  const [collapsed, dispatchColapsed] = useReducer(reducer, false)


  return (
    <div>
      <AccordionTitle title={props.title} onClick={()=>dispatchColapsed(collapsedAC())}/> 
      <button onClick={()=> dispatchColapsed(collapsedAC())}>{!collapsed ? 'Collaps': 'Uncollaps'}</button>
      { !collapsed && <AccordionBody items={props.items} onclickHandler={props.onclickHandler}/>}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string,
  onClick: ()=> void
}


function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle redering');
  return <h3 onClick={props.onClick}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
  items: ItemsType[]
  onclickHandler: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody redering');
  return (
    <ul>
      {props.items.map((item, index) => <li key={index} onClick={()=>props.onclickHandler(item.value)}>{item.title}</li>)}
    </ul>
  );
}
