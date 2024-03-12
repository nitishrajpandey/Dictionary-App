import React, { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import book from "../assets/book.jpg";
import { useDispatch } from "react-redux";
import { fetchDictionaryApi } from "../Store/dictionarySearchSlice";

function Header() {
  const inputValue = useRef();
  const dispatch = useDispatch();
  const handelOnClick = () => {
    if (inputValue.current.value) {
      dispatch(fetchDictionaryApi(inputValue.current.value));
      inputValue.current.value = "";
    }
  };

  const handelOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue.current.value) {
        dispatch(fetchDictionaryApi(inputValue.current.value));
        inputValue.current.value = "";
      }
    }
  };
  return (
    <div
      className="bg-cover bg-no-repeat bg-center px-5"
      style={{ backgroundImage: `url(${book})` }}
    >
      <div className=" flex justify-center py-5">
        <div className=" flex flex-col justify-center items-center w-[800px] text-center px-3 xs:px-5 text-white">
          <h1 className="text-3xl ssm:text-4xl md:text-5xl font-bold mb-4 ">
            Dictionary App
          </h1>
          <p className="text-lg ssm:text-xl font-semibold mb-4">
            Search and any word from Dictionary within a second
          </p>
          <div className="flex items-center gap-2 w-full  p-3 bg-white rounded-xl">
            <IoSearchOutline className="text-2xl xs:text-3xl text-black font-extrabold " />
            <input
              type="text"
              placeholder="Enter Text Here.."
              className="w-full outline-none font-medium text-black"
              ref={inputValue}
              onKeyDown={() => handelOnKeyDown(event)}
            />
            <button
              className="text-black bg-green-500 px-4 py-2 rounded-xl font-semibold shadow-md shadow-gray-500 active:scale-95 duration-300 ease-in-out"
              onClick={handelOnClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
