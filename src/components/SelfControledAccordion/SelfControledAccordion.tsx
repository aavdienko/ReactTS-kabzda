import React, { useState } from 'react';

type AccordionPropsType = {
  title: string
  // collapsed: boolean
}

export function SelfControledAccordion(props: AccordionPropsType) {

  const [collapsed, setColapsed] = useState(false)

  // 

  return (
    <div>
      <AccordionTitle title={props.title} onClick={()=>setColapsed(!collapsed)}/> 
      <button onClick={()=> setColapsed(!collapsed)}>{!collapsed ? 'Collaps': 'Uncollaps'}</button>
      { !collapsed && <AccordionBody />}
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

function AccordionBody() {
  console.log('AccordionBody redering');
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
