import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface SearchState {
    isLoading: boolean;
    genre: string;
    searchInfo: GenreDetailedItemContainer;
}

export interface GenreDetailedItemContainer {
    genreName: string;
    items: Array<GenreDetailedItem>;
}


export interface GenreDetailedItem {
    title: string;
    band: string;
    imageUrl: string;
    paragraphs: Array<string>;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestSearchInfoAction {
    type: 'REQUEST_SEARCH_INFO';
    genre: string;
}

interface ReceiveSearchInfoAction {
    type: 'RECEIVE_SEARCH_INFO';
    genre: string;
    searchInfo: GenreDetailedItemContainer;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestSearchInfoAction | ReceiveSearchInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestSearchInfo: (genre: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.search && genre !== appState.search.searchInfo.genreName) {
            fetch(`genre/details/${genre}`)
                .then(response => response.json() as Promise<GenreDetailedItemContainer>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_SEARCH_INFO', genre: genre, searchInfo: data });
                });

            dispatch({ type: 'REQUEST_SEARCH_INFO', genre: genre });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
let items: GenreDetailedItem[] = [];
const emptySearchInfo = { genreName: '', items: items };
const unloadedState: SearchState = { genre: '', searchInfo: emptySearchInfo, isLoading: false };

export const reducer: Reducer<SearchState> = (state: SearchState | undefined, incomingAction: Action): SearchState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
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
            var castedAction = action as ReceiveSearchInfoAction;
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
