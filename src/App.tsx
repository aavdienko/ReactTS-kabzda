import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';


function App() {
  console.log('App redering');
  return (
    <div>
      <PageTitle title={'This is App Component'} />
      <Rating value={0}/>
      <Accordion title={'Menu'}/>
      <Rating value={4}/>
      <Rating value={1}/>
      <Rating value={5}/>
      <Rating value={66}/>
      <Rating value={2}/>
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
