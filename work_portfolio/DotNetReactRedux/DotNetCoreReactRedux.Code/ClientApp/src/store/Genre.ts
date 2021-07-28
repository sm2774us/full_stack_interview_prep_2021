import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface GenreInfoState {
    isLoading: boolean;
    genre: string;
    genreInfo: GenreInfo;
}

export interface GenreInfo {
    genreName: string;
    paragraphs: Array<string>;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestGenreInfoAction {
    type: 'REQUEST_GENRE_INFO';
    genre: string;
}

interface ReceiveGenreInfoAction {
    type: 'RECEIVE_GENRE_INFO';
    genre: string;
    genreInfo: GenreInfo;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestGenreInfoAction | ReceiveGenreInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestGenreInfo: (genre: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.genres && genre !== appState.genres.genre) {
            fetch(`genre/info/${genre}`)
                .then(response => response.json() as Promise<GenreInfo>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_GENRE_INFO', genre: genre, genreInfo: data });
                });

            dispatch({ type: 'REQUEST_GENRE_INFO', genre: genre });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
let pars: string[] = [];
const emptyGenreInfo = { genreName: '', paragraphs: pars };
const unloadedState: GenreInfoState = { genre: '', genreInfo: emptyGenreInfo, isLoading: false };

export const reducer: Reducer<GenreInfoState> = (state: GenreInfoState | undefined, incomingAction: Action): GenreInfoState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
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
            var castedAction = action as ReceiveGenreInfoAction;
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