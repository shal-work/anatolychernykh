import pictureReducer from './picture'
import {initialLoadingPictureCreator} from './picture';


import meetingsReducer from './meetings'
import {initialLoadingMeetingsCreator} from './meetings'




let store = {
    state: {
        picture: {},
        meetings: {}
    },
    getState() {
        let picture = pictureReducer(initialLoadingPictureCreator());
        this.state.picture = {...picture};

        let meetings = meetingsReducer(initialLoadingMeetingsCreator());
        this.state.meetings = {...meetings};

        return this.state;
    },
    dispatch (action) {
        this.state.picture = pictureReducer(action, this.state.picture);
        this.state.meetings = meetingsReducer(action, this.state.meetings);
    }
};

export default store;
