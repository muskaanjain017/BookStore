import React, { useEffect, useState }  from 'react'
import "./Body.css"

export default function Body() {
const [bookList,setBookList]=useState();
useEffect(()=>{
    const callApis=async()=>{
    const res = await Promise.all([
        fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter'),
        fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
      ]);
      await Promise.all(res.map(r => r.json())).then(data=>setBookList([...data[0].items,...data[1].items]))
      
    }
    callApis();
//     Promise.all([
//     fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter'),
//     fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
//     ])
// .then(data=>data.json())
// .then(res=>setBookList(res.items));
},[]);
if(bookList)
console.log(bookList)
  return (
    <div>
      <section>
        {bookList && <div className="top">
          <div  className="items">
            <img className="BodyImg" src={bookList[3].volumeInfo.imageLinks.thumbnail}/>
            <span className='itemDesc'>
                <span>{bookList[3].volumeInfo.title}</span>
                <p>{bookList[3].volumeInfo.description}</p>
                <button className="NowRead">Now Read!</button>
            </span>
          </div>
          <div  className="items">
            <img className="BodyImg" src={bookList[15].volumeInfo.imageLinks.thumbnail}/>
            <span className='itemDesc'>
                <span>{bookList[15].volumeInfo.title}</span>
                <p>{bookList[15].volumeInfo.description}</p>
                <button className="NowRead">Now Read!</button>
            </span>
          </div>
          <div  className="items">
            <img className="BodyImg" src={bookList[2].volumeInfo.imageLinks.thumbnail}/>
            <span className='itemDesc'>
                 <span>{bookList[2].volumeInfo.title}</span>
                <p>{bookList[2].volumeInfo.description}</p>
                <button className="NowRead">Now Read!</button>
            </span>
          </div>
        </div>}
        
        <div className="title"><h2>More Books</h2></div>

        {bookList && <div className="bottom">
        {bookList.map(book=><div  className="itemBody">
                <img className="BodyImg2" src={book.volumeInfo.imageLinks.thumbnail}/>
            </div>)}
           
        </div>}

      </section>
    </div>
  )
}
