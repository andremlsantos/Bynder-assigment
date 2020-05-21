// require syntax
const fetch = require("node-fetch");
global.fetch = fetch;

const Unsplash = require("unsplash-js").default;
const unsplash = new Unsplash({
    accessKey: "",
    secret: "",
    callbackUrl: "",
    bearerToken: "",
});

module.exports = unsplash;
