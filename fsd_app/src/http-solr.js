import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8983/solr/Product",
  headers: {
    "Content-type": "application/json",
    "Orgin":"http://localhost:3000/"
  }
});

