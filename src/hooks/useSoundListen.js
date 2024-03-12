import { useState } from "react"

function useSoundListen(audioUrl) {
    const [isPlaying, setIsPlaying] = useState(false)

    const playAudio = () => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
            setIsPlaying(true)
        }
    }
    return { isPlaying, playAudio }
}

export default useSoundListen;