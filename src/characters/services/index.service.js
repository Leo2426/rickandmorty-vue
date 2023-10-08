import axios from "axios";

export class Service {
     static  getAll() {
         return  axios.get("https://rickandmortyapi.com/api/character");
    }
}
