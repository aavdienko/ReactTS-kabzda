import React, { useState } from 'react';

export type RatingValuType = 1|2|3|4|5

type RatingPropsType = {
  value: RatingValuType
  onClick: (value: RatingValuType)=> void
}

function Rating(props: RatingPropsType) {
  console.log('Rating rendering');

  return (
    <div>
    <Star selected={ props.value > 0 } setValue={props.onClick} value={1}/>
    <Star selected={ props.value > 1 } setValue={props.onClick} value={2}/>
    <Star selected={ props.value > 2 } setValue={props.onClick} value={3}/>
    <Star selected={ props.value > 3 } setValue={props.onClick} value={4}/>
    <Star selected={ props.value > 4 } setValue={props.onClick} value={5}/>
  </div>
  )

}

type StarPropsType = {
  selected: boolean
  setValue: (value: RatingValuType) => void
  value: RatingValuType
}

function Star(props: StarPropsType) {
  console.log('Star rendering');
   return (
    <span onClick={() => props.setValue(props.value)}>
      {props.selected === true ? <b>Star </b> : 'Star'}
    </span>
  )
}

export default Rating