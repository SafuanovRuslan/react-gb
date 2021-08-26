import { newsReducer } from "..";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR } from "../actionTypes";

const remouteInfo = {
    events: [],
    featured: false,
    id: 10505,
    imageUrl: "https://spacenews.com/wp-content/uploads/2020/09/blacksky-mission-solutions.jpg",
    launches: [],
    newsSite: "SpaceNews",
    publishedAt: "2021-08-26T14:05:25.000Z",
    summary: "From hiking the price of cars to impacting the readiness of militaries, the havoc that COVID-19 wreaks across supply chains is far-ranging and sometimes surprising.",
    title: "Geospatial intelligence giving supply chain clarity in uncertain times",
    updatedAt: "2021-08-26T14:05:25.285Z",
    url: "https://spacenews.com/geospatial-intelligence-giving-supply-chain-clarity-in-uncertain-times/",
}

const error = 'Failed to fetch';

const initialState = {
    data: [],
    request: {
      status: 0,
      error: null,
    },
  };

describe('newsReducer', () => {
    it('request success', () => {
        const result = newsReducer(initialState, { type: REQUEST_SUCCESS, payload: remouteInfo });

        expect(result).toEqual({
            data: remouteInfo,
            request: {
              status: 2,
              error: null,
            },
        })
    })

    it('request error', () => {
        const result = newsReducer(initialState, { type: REQUEST_ERROR, payload: error });

        expect(result).toEqual({
            data: [],
            request: {
              status: 3,
              error: error,
            },
        })
    })
})