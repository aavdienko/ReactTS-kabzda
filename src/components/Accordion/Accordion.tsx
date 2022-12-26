import React from 'react';

type AccordionPropsType = {
  title: string
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion redering');
  return (
    <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
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

export default Accordion;
