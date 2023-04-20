import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledSelect,
} from './components/Inputs/ControlledInput';
import { OnOff } from './components/OnOff/OnOff';
import Rating, { RatingValuType } from './components/Rating/Rating';
import { SelfControledAccordion } from './components/SelfControledAccordion/SelfControledAccordion';
import { SelfControledRaiting } from './components/SelfControledRaiting/SelfControledRaiting';
import {
  UncontrolledInput,
  UncontrolledInputWithTrackedValue,
} from './components/Inputs/UncontrolledInput';
import { Select } from './components/Select/Select';
import { MemoExample } from './components/MemoExample/MemoExample';
import { HelpsToReactMemoExample, UseMemoCountingExample } from './components/UseMemo/UseMemoxample';
import { LikeUseCalback } from './components/UseCalback/UseCalbackExample';
import { UseState } from './components/UseState/UseState';
import { KeysTrackerExample, ResetEffectExample, SetTimeoutUseEffect, SimpleUseEffect } from './components/UseEffect/UseEffect';
import { OwnClock } from './components/UseEffect/OwnClock';
import { Clock,} from './components/Clock/Clock';

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValuType>(1);
  const [accordinonCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  const itemsMenu = [
    { title: 'Beef', value: 1 },
    { title: 'Fish', value: 1 },
    { title: 'Vegan', value: 3 },
    { title: 'Liver', value: 4 },
  ];
  const itemsUsers = [
    { title: 'Alex', value: 1 },
    { title: 'Lera', value: 2 },
    { title: 'Soko', value: 3 },
    { title: 'Crosby', value: 4 },
  ];

  const [selectValue, selectSetValue] = useState('2');

  const onclickHandler = (value: any) => {
    console.log(value < 2 ? `${value} beer please` : `${value} beers please`);
  };

  const onChange = (value: any) => {
    selectSetValue(value);
  };

  return (
    <div className={'App'}>
      {/* <Clock mode={'digital'}/>
      <Clock mode={'analog'}/> */}
      <ResetEffectExample/>
      <KeysTrackerExample/>
      {/* <OwnClock/> */}
      {/* <LikeUseCalback/> */}
      {/* <UseState/> */}
      {/* <SimpleUseEffect/> */}
      {/* <SetTimeoutUseEffect/> */}
      {/* <UseMemoCountingExample />
      <HelpsToReactMemoExample/> */}
      {/* <SelfControledAccordion title={'Menu'} items={itemsMenu} onclickHandler={onclickHandler}/> */}
      {/* <SelfControledAccordion title={'Users'} items={itemsUsers} onclickHandler={onclickHandler}/> */}
      {/* <Select value={selectValue} onChange={onChange} items={[
        {value: "1", title: 'Praha'},
        {value: "2", title: 'Brno'},
        {value: "3", title: 'Plzen'}
      ]}/> */}
      {/* <MemoExample/> */}
      {/* <SelfControledRaiting/>
      <SelfControledRaiting/>
      <SelfControledRaiting/> */}
      {/* <OnOff/> */}
      {/* <PageTitle title={'This is App Component'} />

      <Accordion title={'Menu'} collapsed={accordinonCollapsed} onClick={()=>setAccordionCollapsed(!accordinonCollapsed)}/>
      <Accordion title={'Users'} collapsed={accordinonCollapsed} onClick={()=>setAccordionCollapsed(!accordinonCollapsed)}/> */}
      {/* <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>  */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle redering');
  return <h1>{props.title}</h1>;
}

export default App;
