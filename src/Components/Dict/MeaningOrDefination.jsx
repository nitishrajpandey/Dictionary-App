import React from "react";
import { useSelector } from "react-redux";

function MeaningOrDefination() {
  const data = useSelector(
    (state) => state?.dictionary?.dictionaryData[0]?.meanings
  );

  return (
    <div className="pt-7">
      <div className="py-4">
        <h1 className="text-2xl font-semibold">Meanings And Definitions : -</h1>
      </div>

      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <div className="py-4">
              <h1 className="font-medium text-xl capitalize">
                Part of Speech {"=>"} {item.partOfSpeech}
              </h1>
            </div>
            <div>
              {item?.definitions.map((item2, index2) => (
                <div key={index2}>
                  <div>
                    <h2 className="py-2">
                      {" "}
                      <span className="font-bold capitalize ">
                        definition :
                      </span>
                      {"  "}
                      {item2.definition}
                    </h2>
                    <p className="py-2 text-gray-500">
                      <span className="font-semibold capitalize">
                        Example :{" "}
                      </span>{" "}
                      {item2.example
                        ? item2.example
                        : "The example was not given."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h1 className="py-4 text-2xl font-semibold capitalize">
                synonyms {" : "}
              </h1>
              <div className="px-5 m-auto">
                <ul className="columns-1 ss:columns-2 ssm:columns-3">
                  {item?.synonyms.map((item3, index) => (
                    <li className="list-decimal px-1" key={index}>
                      {item3}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeaningOrDefination;
