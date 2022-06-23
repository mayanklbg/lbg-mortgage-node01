import React from 'react'
import axios from "axios";

const baseURL = "/book/list";

export default function BooksComponent() {
  const [book, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

    return (
      <div>
        <ul>
            {book.map(book => <li key={book.name}>{book.name} | ${book.price}</li>)}
        </ul>
    </div>
    )
  }
