"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genre = require("./Genre");
var Search = require("./Search");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    genres: Genre.reducer,
    search: Search.reducer
};
//# sourceMappingURL=index.js.map