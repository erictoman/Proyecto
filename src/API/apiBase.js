import Axios from "axios";

const instancia = Axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  responseType: "json",
});

export default instancia;
