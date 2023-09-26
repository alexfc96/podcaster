import { useEffect, useState } from "react";
import { PodcastDetail } from "../types";

interface usePodcastDetailState {
  podcastDetail: PodcastDetail[];
  isLoading: boolean;
}

const initialState: usePodcastDetailState = {
  podcastDetail: null,
  isLoading: false,
};

export function usePodcastDetail(podcastId?: string) {
  const [state, setState] = useState<usePodcastDetailState>(initialState);

  const getData = () => {
    setState({ ...state, isLoading: true });
    // Make the API call to get podcast details
    fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
      .then(async (response) => await response.json())
      .then((res) => {
        //TODO: Save on array in the cache
        setState({ podcastDetail: res.results, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, isLoading: false });
      });
  };

  useEffect(() => {
    if(podcastId) getData();
  }, [podcastId]);

  return { ...state };
}
