// require syntax
const fetch = require("node-fetch");
global.fetch = fetch;

const Unsplash = require("unsplash-js").default;
const unsplash = new Unsplash({
    accessKey: "qvpjQXjjQEjYwfoqn1DcPRWXyBzy6akr8D1ZKJAH5tc",
    secret: "IYI3SAW87GJi-7PlA0TdProl-eLN3hh8qSmb5wOKlYA",
    callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
    bearerToken: "x6oI0hpYjvl0NCMrTlUHN_5akAdjrFzM24PqqwFNdWA",
});

module.exports = unsplash;
