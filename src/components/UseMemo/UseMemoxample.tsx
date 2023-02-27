import React from 'react';
import { useMemo, useState } from 'react';

export const UseMemoCountingExample = () => {
  const [a, setA] = useState(3);
  const [b, setB] = useState(3);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 1000000) {
        fake++;
        const fakeValue = Math.random();
      } // для уменьшения скорости подсчета, чтобы наглядно показать действие useMemo()
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= a; i++) {
    resultA = resultA * i;
  }

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <div>
      <input
        value={a}
        onChange={(event) => {
          setA(+event.currentTarget.value);
        }}
      />
      <input
        value={b}
        onChange={(event) => {
          setB(+event.currentTarget.value);
        }}
      />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </div>
  );
};

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

export const HelpsToReactMemoExample = () => {
  console.log('HelpsToReactMemoExample');
  
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Alex', 'Lera', 'Soko', 'Crosby'])

  const addUser = () => {
    const updatedUsers = [...users, 'Alex1']
    setUsers(updatedUsers)
  }

  const newArray = useMemo(()=>{
    return users.filter(user => user.toLowerCase().indexOf('a') > -1)
  }, [users]) // c помощью хука useMemo мы избежали не нужной перерисовки Users. 

  // const newArray = users.filter(user => user.toLowerCase().indexOf('a') > -1) // при такой записи, кликая на +, у нас также перерисовываются Users, несмотря на то, что массив остается без изменений

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newArray}/>
    </div>
  )
}