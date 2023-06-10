import axios from "axios";

const instance = axios.create({
    baseURL: `https://todoist.com/`,
  });

export const api = {
    authRequest: (id: string, scope: string, state: string) => 
    instance({
        method: "POST",
        url: `oauth/authorize?client_id=${id}&scope=${scope}&state=${state}`
    })
}