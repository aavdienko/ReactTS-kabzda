import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import Rating, { RatingValuType } from './components/Rating/Rating';
import { SelfControledAccordion } from './components/SelfControledAccordion/SelfControledAccordion';
import { SelfControledRaiting } from './components/SelfControledRaiting/SelfControledRaiting';


function App() {
  console.log('App redering');
  const [ratingValue, setRatingValue] = useState<RatingValuType>(1)
  const [accordinonCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div className={'App'}>
      {/* <OnOff />
      <OnOff /> */}
      {/* <OnOff />
      <OnOff />
      <OnOff /> */}
      {/* <SelfControledAccordion title={'Menu'}/>
      <SelfControledAccordion title={'Users'}/>
      <SelfControledRaiting/>
      <SelfControledRaiting/>
      <SelfControledRaiting/> */}
      {/* <OnOff active={false}/> */}
      <PageTitle title={'This is App Component'} />

      <Accordion title={'Menu'} collapsed={accordinonCollapsed} onClick={()=>setAccordionCollapsed(!accordinonCollapsed)}/>
      <Accordion title={'Users'} collapsed={accordinonCollapsed} onClick={()=>setAccordionCollapsed(!accordinonCollapsed)}/>
      {/* <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>  */}
    </div>
  );
}

type PageTitlePropsType ={
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle redering');
  return <h1>{props.title}</h1>;
}


export default App;
