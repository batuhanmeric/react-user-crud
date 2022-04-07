import axios from "axios";
import Recources from "../Helpers/Recources";

class API {
  static async request(slug, request = {}) {
    const promise = new Promise(resolve => {
      axios
        .post(Recources.api + slug, request)
        .then(res => {
          const data = res.data;
          resolve({
            success: data.success,
            error: data.error,
            message: data.message,
            data: data.data,
          });
        })
        .catch(() => {
          resolve({
            success: false,
            error: true,
            message: "Internal Server Error",
            data: null,
          });
        });
    });
    const result = await promise;
    return result;
  }
}

export default API;
