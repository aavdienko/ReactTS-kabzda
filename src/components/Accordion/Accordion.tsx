import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: () => void
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion redering');
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onClick}/>
      { !props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string,
  onClick: () => void
}

const AccordionTitle = React.memo(AccordionTitleMemo)
const AccordionBody = React.memo(AccordionBodyMemo)

function AccordionTitleMemo(props: AccordionTitlePropsType) {
  console.log('AccordionTitle redering');
  return <h3 onClick={props.onClick}>{props.title}</h3>;
}

function AccordionBodyMemo() {
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
