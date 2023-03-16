import React, { useCallback } from "react";
import { useMemo, useState } from "react";

type BooksType = {
  books: string[]
  addBook: () => void
}

const BooksForMemo = (props: BooksType) => {
  console.log('BooksForMemo');

  return (
    <div>
      {props.books.map((book, i)=><div key={i}>{book}</div>)}
      <button onClick={props.addBook}>add book</button>
    </div>
  )
}

const Books = React.memo(BooksForMemo) //создаем контейнерную компоненту с помощью HOC React.memo. Таким образом избегаем излишней перерисовки UsersFroMemo

export const LikeUseCalback = () => {
  console.log('LikeUseCalback');
  
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['Kolobok', 'Skazka', 'Harry Potter'])

  const addBook = () => {
    const updatedBooks = [...books, 'Neznanyka']
    setBooks(updatedBooks)
  }

  // аналог работы useCallback 
  const memoizedAddBook = useMemo(()=>{return addBook}, [books])

  const memoizedAddBook2AkaUseCallback = useCallback(addBook, [books])

  const newArray = useMemo(()=>{
    return books.filter(book => book.toLowerCase().indexOf('a') > -1)
  }, [books]) // c помощью хука useMemo мы избежали не нужной перерисовки Users. 

  // const newArray = users.filter(user => user.toLowerCase().indexOf('a') > -1) // при такой записи, кликая на +, у нас также перерисовываются Users, несмотря на то, что массив остается без изменений

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>+</button>

      {counter}
      <Books books={newArray} addBook={memoizedAddBook2AkaUseCallback}/>
    </div>
  )
}