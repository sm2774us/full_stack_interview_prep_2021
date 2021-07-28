"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestSearchInfo: function (genre) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.search && genre !== appState.search.searchInfo.genreName) {
            fetch("genre/details/" + genre)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_SEARCH_INFO', genre: genre, searchInfo: data });
            });
            dispatch({ type: 'REQUEST_SEARCH_INFO', genre: genre });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var items = [];
var emptySearchInfo = { genreName: '', items: items };
var unloadedState = { genre: '', searchInfo: emptySearchInfo, isLoading: false };
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_SEARCH_INFO':
            return {
                genre: action.genre,
                searchInfo: state.searchInfo,
                isLoading: true
            };
        case 'RECEIVE_SEARCH_INFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            var castedAction = action;
            if (action.genre === state.genre) {
                return {
                    genre: castedAction.genre,
                    searchInfo: castedAction.searchInfo,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
//# sourceMappingURL=Search.js.map