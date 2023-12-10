import axios from "axios";
import { Data } from "../../assets/data/Data";
import { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLoading = () => {
  return { type: FETCH_LOADING };
};
export const fetchError = (message) => {
  return { type: FETCH_ERROR, payload: message };
};
export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchAnother = () => (dispatch) => {
  const axiosProjects = [...Data.en.projects, ...Data.tr.projects];
  dispatch(fetchLoading());
  axios
    .post(
      "https://654a3b8ae182221f8d52c75a.mockapi.io/portfolio",
      axiosProjects
    )
    .then((response) => {
      console.log("response:", response);
      setTimeout(() => {
        dispatch(fetchSuccess(response.data));
      }, 700);
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchError(error));
    });
};
