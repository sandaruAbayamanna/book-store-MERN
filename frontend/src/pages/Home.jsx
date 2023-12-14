import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookTable from "../components/home/BookTable";
import BookCard from "../components/home/BookCard";

const Home = () => {
  //hooks for books with empty array
  const [books, setBooks] = useState([]);
  const [loading, setLoadig] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoadig(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoadig(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadig(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>

        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading ? <Spinner /> :showType==='table' ? (<BookTable books={books}/>) :(<BookCard books={books} />)}
    </div>
  );
};

export default Home;
