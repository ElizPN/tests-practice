import axios from "axios";
import { MapArrToString } from "../MapArrToString/MapArrToString.js";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userId = response.data.map((user) => user.id);
    console.log(userId);
    return MapArrToString(userId);
  } catch (e) {}
};
