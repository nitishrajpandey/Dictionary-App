import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDictionaryApi } from "../Store/dictionarySearchSlice";
import DictBanner from "./Dict/DictBanner";
import MeaningOrDefination from "./Dict/MeaningOrDefination";

function Body() {
  const dicData = useSelector(
    (state) => state.dictionary.dictionaryData[0]?.word
  );
  const dicData1 = useSelector((state) => state.dictionary.dictionaryData);
  console.log(dicData1);
  console.log(dicData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDictionaryApi());
  }, []);

  if (dicData === "undefined") {
    return (
      <div className="flex flex-col gap-3 justify-center items-center h-[70vh] ">
        <h1 className="text-bold italic text-6xl">My Dictionary</h1>
        <h1 className="text-bold italic text-xl">Search any word.</h1>
      </div>
    );
  }
  return (
    <div className="bg-[#F0F0F0] py-10">
      <div className=" pt-5 px-5 md:px-10">
        <div>
          <DictBanner />
        </div>
        <div>
          <MeaningOrDefination />
        </div>
      </div>
    </div>
  );
}

export default Body;
