const { default: axios } = require("axios");

const sha = (input) => axios.get("/api/sha?" + "input=" + input);
export default { sha };
