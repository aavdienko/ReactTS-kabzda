type CollapsedACType = ReturnType<typeof collapsedAC>

type MainActionType = CollapsedACType

// type MainActionType = {
//   type: string
// }

const COLAPSED = 'COLAPSED'

export const reducer = (state: boolean, action: MainActionType) => {
  //asdasdasd
  switch(action.type){
    case COLAPSED: {
      return !state
    }
    default: return state
  }
}

export const collapsedAC = () =>{
  return{
    type: COLAPSED
  } as const
}
