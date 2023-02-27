import React from "react"
import { useState } from "react"


type NewMessagesCounterPropsType = {
  count: number
}

const NewMessagesCounter = (props: NewMessagesCounterPropsType) => {
  return <div>{props.count}</div>
}

type UsersPropsType = {
  users: Array<string>
}

const UsersFroMemo = (props: UsersPropsType) => {
  console.log('USers');
  
  return (
    <div>
      {props.users.map((user, i)=><div key={i}>{user}</div>)}
    </div>
  )
}

const Users = React.memo(UsersFroMemo) //создаем контейнерную компоненту с помощью HOC React.memo. Таким образом избегаем излишней перерисовки UsersFroMemo

export const MemoExample = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Alex', 'Lera', 'Soko', 'Crosby'])

  const addUser = () => {
    const updatedUsers = [...users, 'Alex1']
    setUsers(updatedUsers)
  }

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={counter}/>
      <Users users={users}/>
    </div>
  )
}