import moment from "moment";


export const navbarBrand = "Your News";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";


export const router = [
  { path: "/", key: "general", category: "general" },
  { path: "/categories/general", key: "general", category: "general", },
  { path: "/categories/business", key: "business", category: "business", },
  { path: "/categories/sports", key: "sports", category: "sports", },
  { path: "/categories/science", key: "science", category: "science", },
  { path: "/categories/health", key: "health", category: "health", },
  { path: "/categories/entertainment", key: "entertainment", category: "entertainment",},
  { path: "/categories/technology", key: "technology", category: "technology", }
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
