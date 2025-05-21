import pictureReducer from './picture'
import {initialLoadingPictureCreator} from './picture';


import meetingsReducer from './meetings'
import {initialLoadingMeetingsCreator} from './meetings'

import billboardsReducer from './billboards'
import {initialLoadingBillboardsCreator} from './billboards'




let store = {
    state: {
        picture: {},
        meetings: {},
        billboards: {}
    },
    getState() {
        let picture = pictureReducer(initialLoadingPictureCreator());
        this.state.picture = {...picture};

        let meetings = meetingsReducer(initialLoadingMeetingsCreator());
        this.state.meetings = {...meetings};


        let billboards = billboardsReducer(initialLoadingBillboardsCreator());
        this.state.billboards = {...billboards};

        return this.state;
    },
    dispatch (action) {
        this.state.picture = pictureReducer(action, this.state.picture);
        this.state.meetings = meetingsReducer(action, this.state.meetings);
    }
};

export default store;
