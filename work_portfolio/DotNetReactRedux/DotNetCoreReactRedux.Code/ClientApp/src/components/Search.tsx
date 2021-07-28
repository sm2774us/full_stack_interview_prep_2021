import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

//css
import './css/Search.css';


//redux
import { ApplicationState } from '../store';
import * as SearchStore from '../store/Search';

export interface SearchProps {

}

interface ISearchState {
    selectedItem: string;
    selectedSearchItem: SearchStore.GenreDetailedItem;
}

const initialState: ISearchState = {
    selectedItem: '',
    selectedSearchItem: null
}


const Search: React.FunctionComponent<SearchProps> = () => {

    const dispatch = useDispatch();

    const [currentState, setState] = useState<ISearchState>(initialState);

    const onGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '--') {
            return;
        }

        setState(
            {
                selectedItem: e.target.value,
                selectedSearchItem: null
            }
        );
    }

    const onImgMouseDown = (item: SearchStore.GenreDetailedItem) => {
        setState(
            {
                ...currentState,
                selectedSearchItem: item
            }
        );
    }

    const storeState: SearchStore.SearchState = useSelector(
        (state: ApplicationState) => state.search as SearchStore.SearchState
    );

    React.useEffect(() => {
        dispatch(SearchStore.actionCreators.requestSearchInfo(currentState.selectedItem));
    }, [currentState.selectedItem]);

    return (
        <div>
            <div>

                <div>
                    <div className="mainHeader" style={{ color: "#0094FF" }}>Search For Stuff</div>
                    <div className="subHeader">Pick a Genre to see some examples, and learn a bit more about the fascinating world of electronic music</div>
                </div>

                <form>
                    <div className="form-group spaced-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <select className="form-control" id="sel1" onChange={onGenreChange}>
                                        <option>--</option>
                                        <option>Gabber</option>
                                        <option>Acid House</option>
                                        <option>Drum & Bass</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <Scrollbars className="search-scroll">
                    <div>
                        <div className="searchimages">
                            {storeState.searchInfo.items.map((item, index) => (
                                <div className="searchItem">
                                    <div className="center">
                                        <p className="searchTitle" style={{ color: "#0094FF" }}>{item.title}</p>
                                    </div>
                                    <div className="center">
                                        <p className="searchText">{item.band}</p>
                                    </div>
                                    <div className="center">
                                        <img className="searchImg" src={item.imageUrl} onMouseOver={() => onImgMouseDown(item)} data-toggle="modal" data-target="#exampleModal"/>
                                    </div>

                                </div>
                            ))} 
                        </div>
                    </div>

                </Scrollbars>
                {
                    currentState.selectedSearchItem != null &&
                    <div>
                        <div>
                            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#0094FF" }}>{currentState.selectedSearchItem.title}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img className="searchImgPopup" src={currentState.selectedSearchItem.imageUrl} />
                                            <Scrollbars
                                                autoHeight
                                                autoHeightMin={200}
                                                autoHeightMax={600}
                                                style={{ width: 300 }}>
                                                <div className="mainHeader" style={{ color: "#0094FF" }}>{currentState.selectedSearchItem.band}</div>
                                                <div className="subHeader">
                                                    {currentState.selectedSearchItem.paragraphs.map((para, index) => (
                                                        <p key={index}>{para}</p>
                                                    ))}
                                                </div>
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Search;
