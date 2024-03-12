import React from "react";
import { useSelector } from "react-redux";
import { GiSpeaker } from "react-icons/gi";
import useSoundListen from "../../hooks/useSoundListen";

function DictBanner() {
  const data = useSelector((state) => state.dictionary?.dictionaryData);

  const firstNonNullAudio = data[0]?.phonetics.find((pho) => pho.audio);

  const audioUrl = firstNonNullAudio?.audio;

  const { isPlaying, playAudio } = useSoundListen(audioUrl);

  return (
    <div className="flex justify-center items-center gap-5">
      <h1 className="text-4xl capitalize text-center font-bold border-b-2 border-red-800 border- pb-2">
        {data[0]?.word}
      </h1>
      <span>
        <GiSpeaker
          className={`text-3xl ${
            isPlaying ? "text-green-500" : "text-gray-500"
          }`}
          onClick={playAudio}
        />
      </span>
    </div>
  );
}

export default DictBanner;
