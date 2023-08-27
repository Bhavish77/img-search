import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zl5e6rnxAQH8hkDczT0YFD8xkX7CY5OKdQQduqfuy5k",
    },
    params: {
      query: term,
    },
  });

  return response;
};

export default searchImages;
