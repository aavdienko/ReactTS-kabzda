import React, { useState } from 'react';

type RatingPropsType = {
  // value: number
};

export function SelfControledRaiting(props: RatingPropsType) {
  console.log('Rating rendering');

  const [value, setValue] = useState(0);

  return (
    <div>
      <Star selected={value > 0} setValue={setValue} />
      <Star selected={value > 1} setValue={setValue} />
      <Star selected={value > 2} setValue={setValue} />
      <Star selected={value > 3} setValue={setValue} />
      <Star selected={value > 4} setValue={setValue} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  setValue: (number: number) => void;
};

function Star(props: StarPropsType) {
  return props.selected 
  ? (<span onClick={() => {props.setValue(1)}}><b>Star{' '}</b></span>) 
  : (<span>Star </span>);
}
