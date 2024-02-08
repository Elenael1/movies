import axios from 'axios';

const fetchTrendImages = async () => {
    try {
      const {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=5456eae918aecb3e2e60ac718603b47e")
      if (!data.results.length) {
        throw new Error('Not Found')
      }
      return data.results
    } catch (error) {
      console.log(error)
    }
  }

export default fetchTrendImages