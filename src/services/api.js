import axios from "axios";

// Rodar com IPV4: npx json-server --watch -d 180 --host 192.168.0.245 db.json

const api = axios.create({
  baseURL: "http://192.168.0.245:3000/",
});

export default api;
