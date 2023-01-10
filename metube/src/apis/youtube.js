import axios from 'axios'
const KEY = 'AIzaSyCjJccPa2t6DUCjaQu56M6K3mNg7N9q8-c'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    }
});


