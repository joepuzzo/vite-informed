/**------------------------------------------------------------------
 * Setup function for global variables
 */
const setupGlobals = () => {
  global.myapp = {};
};

/**------------------------------------------------------------------
 * Setup cors
 *
 * origin - ["http://example1.com", /\.example2\.com$/] will accept any request
 * from “http://example1.com” or from a subdomain of “example2.com”.
 */
const setupCors = () => {
  if (process.env.NODE_ENV === "spec") {
    return {};
  }
  let whitelist = [];
  if (process.env.NODE_ENV === "development") {
    whitelist = ["http://localhost:3000"];
  }
  if (process.env.NODE_ENV === "dev") {
    whitelist = ["http://localhost:3000", "https://dev.myapp.com"];
  }
  if (process.env.NODE_ENV === "production") {
    whitelist = ["https://myapp.com"];
  }
  return {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
};

/**------------------------------------------------------------------
 * All setup function are called here, results can be added to the
 * configuration object
 */

const setup = async () => {
  const configuration = {
    PORT: 3000,
  };
  // ---- Always add globals first ----
  setupGlobals();

  // ---- Do any async setup here ----
  // await setupDB();

  // ---- Now for the syncrounous stuff ;) ----
  configuration.corsConfig = setupCors();

  // ---- Put stuff onto global object ----
  global.myapp.configuration = configuration;

  // Give the configuration object to the caller ( will be used to build epxress app )
  return configuration;
};

export default setup;
