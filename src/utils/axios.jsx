import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjBmYzdmYzM0NjUzZTg1NTQxMzVjYmZmNThhZTlkZiIsInN1YiI6IjY1OWJhODVkYmQ1ODhiNGMxMDkyMzFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8n8dJgEkBe-QTBuW149XhV9NKBtSoncXf-MbZ7-t3mE',
    },
});

export default instance;