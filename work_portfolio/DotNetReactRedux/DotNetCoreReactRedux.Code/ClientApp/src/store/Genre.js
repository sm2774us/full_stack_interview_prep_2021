"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestGenreInfo: function (genre) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.genres && genre !== appState.genres.genre) {
            fetch("genre/info/" + genre)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_GENRE_INFO', genre: genre, genreInfo: data });
            });
            dispatch({ type: 'REQUEST_GENRE_INFO', genre: genre });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var pars = [];
var emptyGenreInfo = { genreName: '', paragraphs: pars };
var unloadedState = { genre: '', genreInfo: emptyGenreInfo, isLoading: false };
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_GENRE_INFO':
            return {
                genre: action.genre,
                genreInfo: state.genreInfo,
                isLoading: true
            };
        case 'RECEIVE_GENRE_INFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            var castedAction = action;
            if (action.genre === state.genre) {
                return {
                    genre: castedAction.genre,
                    genreInfo: castedAction.genreInfo,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
//# sourceMappingURL=Genre.js.map