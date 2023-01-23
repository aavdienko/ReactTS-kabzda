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
      <AccordionTitle title={props.title} /> 
      <button onClick={()=> setColapsed(true)}>uncollapsed</button>
      <button onClick={()=> setColapsed(false)}>collapsed</button>
      { collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string,

}


function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle redering');
  return <h3>{props.title}</h3>;
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
