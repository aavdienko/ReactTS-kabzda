import { collapsedAC, reducer } from './SelfContAccordionReducer';

test('colapsed should be true', () => {
  // data
  const state = false;

  //action
  reducer(state, collapsedAC());

  expect(state).toBe(false);
});

test('colapsed should be false', () => {
  // data
  const state = true;

  //action
  reducer(state, collapsedAC());

  expect(state).toBe(false);
});
