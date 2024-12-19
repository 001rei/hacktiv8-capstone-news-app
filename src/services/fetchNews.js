  import axios from "axios";
  import getRangeDate from "../../public/js/getRangeDate";

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

  export default async function fetchNews (query) {

      const params = {
        'api-key' : API_KEY,
        'q' : query,
      };

      if (query === "programming") {
        const rangeDate = getRangeDate();
        params.begin_date = rangeDate.beginDate;
        params.end_date = rangeDate.endDate;
      }

      try {
          const response = await axios.get(`${BASE_URL}`, {
              params
          });
          console.log(response.data.response.docs);
          return response.data.response.docs;

      } catch (error) {
          console.log(error);
          throw error;
      }

  }