import axios from "axios";

const KEY = "AELf1Jod3tQ01hmrTVTEpbghG5PEY/eTv4wPdWrtRGs=";

export const clientData = axios.create({
  baseURL: "https://data.usajobs.gov/",
  headers: {
    "Authorization-Key": KEY,
  },
});
