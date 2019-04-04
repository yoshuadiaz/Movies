/**
 *
 * Asynchronously loads the component for MovieListItem
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
