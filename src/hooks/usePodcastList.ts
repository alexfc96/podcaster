import { useEffect, useState } from "react";
import { Podcast } from "../types";

interface usePodcastListState {
  podcasts: Podcast[];
  isLoadingPodcasts: boolean;
}

const initialState: usePodcastListState = {
  podcasts: [],
  isLoadingPodcasts: false,
};

export function usePodcastList() {
  const [state, setState] = useState<usePodcastListState>(initialState);

  const getData = async () => {
    setState({ ...state, isLoadingPodcasts: true });

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
        setState({ podcasts: parsedData, isLoadingPodcasts: false });
        return;
      }
    }

    // Added a delay of 2 second to show the spinner on the Header component
    setTimeout(() => {
      // If the data is not cached, then we called the API
      fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        .then(async (response) => await response.json())
        .then((res) => {
          const podcastData = res.feed.entry;
          
          // Save the data on cache client
          localStorage.setItem("podcastData", JSON.stringify(podcastData));
          localStorage.setItem("podcastTimestamp", String(new Date().getTime()));
          
          setState({ podcasts: podcastData, isLoadingPodcasts: false });
        })
        .catch((error) => {
          console.log(error);
          setState({ ...state, isLoadingPodcasts: false }); // Catch errors and pass isLoadingPodcasts to false
        });
      }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return { ...state };
}
