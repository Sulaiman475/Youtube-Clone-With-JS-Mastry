import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: 50,
    resultsPerPage: 50,

  },
  headers: {
    'X-RapidAPI-Key': "940d70b169mshd9e0533026f4647p116e5djsn870778ef3c73",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
// const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
 
};

