import React from 'react'
import axios from "axios";

const baseURL = "/book/list";
const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json"
}


export default function BooksComponent() {
  const [book, setPost] = React.useState([]);

  function addBooks(e) {
    e.preventDefault();
   axios.get("/mockbook/generatedummybook").then((response) => {
      getData();
    });
  }

function getData(){
  axios.get(baseURL, { 'headers': headers}).then((response) => {
    setPost(response.data);
  });
}
  React.useEffect(() => {
    getData();
  }, []);

    return (
      <div>
        <ul>
        {book.map(book => {
          return (
            <li key={book.id}> name: {book.name} country: {book.price}
              <hr />
            </li>
          );
        })}
      </ul>
      <button onClick={addBooks}>
        Add books
      </button>
    </div>
    )
  }
