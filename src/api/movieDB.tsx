import axios from 'axios';

const movieDb = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'fa90844f82b25865b794ed9bdb8952ce',
        language:'es-ES'
    }
});

export default movieDb;