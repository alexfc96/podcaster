import { useEffect, useState } from "react";
import { PodcastDetail } from "../types";

interface usePodcastDetailState {
  podcastDetail: PodcastDetail[] | null;
  isLoading: boolean;
}

const initialState: usePodcastDetailState = {
  podcastDetail: null,
  isLoading: false,
};

export function usePodcastDetail(podcastId?: string) {
  const [state, setState] = useState<usePodcastDetailState>(initialState);

  const getPodcastDetailFromCache = (): PodcastDetail[] | null => {
    // Retrieve the object of podcast details from cache
    const cachedData = localStorage.getItem("podcastDetails");
    
    if (cachedData) {
      const podcastDetails: { [key: string]: PodcastDetail[] } = JSON.parse(cachedData);

      // Find the details for the given podcastId, if they exist and haven't expired
      const podcastDetail = podcastDetails[podcastId || ""];

      if (podcastDetail) {
        return podcastDetail;
      }
    }

    return null;
  };

  const savePodcastDetailToCache = (podcastDetails: { [key: string]: PodcastDetail[] }) => {
    // Retrieve the existing object of podcast details from cache or create a new one
    const cachedData = localStorage.getItem("podcastDetails");
    const existingPodcastDetails: { [key: string]: PodcastDetail[] } = cachedData ? JSON.parse(cachedData) : {};

    // Update or add the new details to the existing object
    existingPodcastDetails[podcastId || ""] = podcastDetails[podcastId || ""];

    // Store the updated object back in cache
    localStorage.setItem("podcastDetails", JSON.stringify(existingPodcastDetails));
  };

  const getData = () => {
    setState({ ...state, isLoading: true });
  
    // Try to get podcast details from cache first
    const cachedPodcastDetail = getPodcastDetailFromCache();
    if (cachedPodcastDetail) {
        setState({ podcastDetail: cachedPodcastDetail, isLoading: false });
        return;
    }
    
    // If not in cache make the API call
    fetch(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )
      .then(async (response) => await response.json())
      .then((res) => {
        const podcastDetails = res.results as PodcastDetail[];

        // Save podcast details to cache
        const podcastDetailObject: { [key: string]: PodcastDetail[] } = {};
        podcastDetailObject[podcastId || ""] = podcastDetails;
        savePodcastDetailToCache(podcastDetailObject);
        
        // Set state to show the podcastDetail in the final component
        setState({ podcastDetail: podcastDetails, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, isLoading: false });
      });
  };

  useEffect(() => {
    if (podcastId) {
      getData();
    }
  }, [podcastId]);

  return { ...state };
}
