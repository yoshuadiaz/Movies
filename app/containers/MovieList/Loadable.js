/**
 *
 * Asynchronously loads the component for MovieList
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
