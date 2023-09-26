import { useEffect, useState } from "react";
import { Podcast } from "../types";

interface usePodcastListState {
  podcasts: Podcast[];
  isLoading: boolean;
}

const initialState: usePodcastListState = {
  podcasts: [],
  isLoading: false,
};

export function usePodcastList() {
  const [state, setState] = useState<usePodcastListState>(initialState);

  const getData = () => {
    setState({ ...state, isLoading: true });

    // Check if podcast are on cache
    const cachedData = localStorage.getItem("podcastData");
    const cachedTimestamp = localStorage.getItem("podcastTimestamp");

    if (cachedData && cachedTimestamp) {
      const currentTime = new Date().getTime();
      const cacheTime = new Date(Number(cachedTimestamp)).getTime();
      const cacheExpirationTime = 24 * 60 * 60 * 1000; // 1 day on miliseconds

      if (currentTime - cacheTime <= cacheExpirationTime) {
        // The data on cache are valid
        const parsedData = JSON.parse(cachedData);
        setState({ podcasts: parsedData, isLoading: false });
        return;
      }
    }

    // If the data is not cached, then we called the API
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(async (response) => await response.json())
      .then((res) => {
        const podcastData = res.feed.entry;
        
        // Almacena los datos en caché
        localStorage.setItem("podcastData", JSON.stringify(podcastData));
        localStorage.setItem("podcastTimestamp", String(new Date().getTime()));
        
        setState({ podcasts: podcastData, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, isLoading: false }); // Catch errors and pass isLoading to false
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { ...state };
}
