import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BSGBOJ6xHltWBMkAiSvrsWQsl_sFlSnlXWX1wPE0wb4'
    }
})