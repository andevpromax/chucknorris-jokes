// constants
import { url, API_ERROR } from '../constants';

export const fetchData = async () => {
    const arrayOfJokesUrls = Array.from({ length: 10 }, () => url);

    let requests = arrayOfJokesUrls.map((url) => fetch(url));

    const response = await Promise.all(requests)
        .then((response) => {
            response.forEach((response) => {
                if (!response.ok) {
                    throw new Error(API_ERROR);
                }
            });
            return response;
        })
        .then((responses) => Promise.all(responses.map((resp) => resp.json())))
        .then((jokes) => {
            return {
                jokes,
                isLoading: false,
            };
        })
        .catch((error) => {
            return {
                error,
                isLoading: false,
            };
        });

    return response;
};

export const fetchSingleJoke = async () => {
    const response = await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(API_ERROR);
            }
            return response;
        })
        .then((response) => response.json())
        .then((joke) => {
            return {
                joke,
                isLoading: false,
            };
        })
        .catch((error) => {
            return {
                error,
                isLoading: false,
            };
        });

    return response;
};
