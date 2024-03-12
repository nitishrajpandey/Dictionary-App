import axios from "axios"

export const fetchDictionary = async (inputData) => {
    try {
        const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`)

        return data
    } catch (error) {
        console.log(error);
        throw error
    }

}