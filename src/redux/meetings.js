const INITIAL_LOADING_MEETINGS = 'INITIAL-LOADING-MEETINGS';
const ACTIV_MEETINGS = 'ACTIV-MEETINGS';



let initialState = {
    items: [
        {
            id:1,
            picture: 'meetings1_1447_964',
            alt: 'meetings1.jpg',
            text: '',
            width: '1447',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'meetings1_721_480',
            },
            // grid
            picture_grid: {
                picture: 'meetings1_450',
                width: '450',
                height: '300',
            },
            active:  true
        },
        {
            id:2,
            picture: 'meetings2_1447_964',
            alt: 'meetings2.jmg',
            text: '',
            width: '1447',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'meetings2_721_480',
            },
            // grid
            picture_grid: {
                picture: 'meetings2_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 3,
            picture: 'meetings3_1447_964',
            alt: 'meetings3.jpg',
            text: '',
            width: '1447',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'meetings3_721_480',
            },
            // grid
            picture_grid: {
                picture: 'meetings2_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 4,
            picture: 'marton2_1285_964',
            alt: 'marton2_1285_964.jpg',
            text: '',
            width: '1285',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'marton2_721_540',
            },
            // grid
            picture_grid: {
                picture: 'marton2_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 5,
            picture: 'farukh_ruzimatov2_1447_964',
            alt: 'farukh_ruzimatov2.jpg',
            text: '',
            width: '1446',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'farukh_ruzimatov2_721_480',
            },
            // grid
            picture_grid: {
                picture: 'farukh_ruzimatov2_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 6,
            picture: 'farukh_ruzimatov3_1446_964',
            alt: 'farukh_ruzimatov3.jpg',
            text: '',
            width: '1446',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'farukh_ruzimatov3_721_481',
            },
            // grid
            picture_grid: {
                picture: 'farukh_ruzimatov3_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 7,
            picture: 'img9015',
            alt: 'img9015.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img9015_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img9015_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 8,
            picture: 'img8965',
            alt: 'img8965.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8965_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8965_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 9,
            picture: 'img8907',
            alt: 'img8907.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8907_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8907_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 10,
            picture: 'img8904',
            alt: 'img8904.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8904_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8904_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 11,
            picture: 'img8873',
            alt: 'img8873.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8873_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8873_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 12,
            picture: 'img8847',
            alt: 'img8847.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8847_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8847_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 13,
            picture: 'img8770',
            alt: 'img8770.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8770_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8770_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 14,
            picture: 'img8754',
            alt: 'img8754.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8754_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8754_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 15,
            picture: 'img8695',
            alt: 'img8695.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8695_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8695_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 16,
            picture: 'img8667',
            alt: 'img8667.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8667_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8667_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 17,
            picture: 'img8798',
            alt: 'img8798.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8798_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8798_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 18,
            picture: 'img8784',
            alt: 'img8784.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8784_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8784_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 19,
            picture: 'img8717',
            alt: 'img8717.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8717_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8717_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 20,
            picture: 'img8705',
            alt: 'img8705.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8705_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8705_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 21,
            picture: 'img8695',
            alt: 'img8695.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8695_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8695_450',
                width: '450',
                height: '300',
            },
            active:  false
        },
        {
            id: 22,
            picture: 'img8624',
            alt: 'img8624.jpg',
            text: '',
            width: '1280',
            height: '853',
            // slider-mobil
            slider_mobil: {
                picture: 'img8624_721_480',
            },
            // grid
            picture_grid: {
                picture: 'img8624_450',
                width: '450',
                height: '300',
            },
            active:  false
        }
    ],
    currentNumber: 0,
}
const meetingsReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_MEETINGS: 
            return state;
        case ACTIV_MEETINGS: 
            if(action.currentNumber > 0 && action.currentNumber <= state.items.length) {
                state.items = state.items.map(u => {
                    if (u.active !== false) {
                        return {...u, active: false}
                    }
                    return u;
                });
                const numArr2 = state.items.findIndex(e => e.id == action.currentNumber);
                state.items[numArr2].active = true;
                state.currentNumber = numArr2 + 1;
            }
            return state;
        default:
            return state;
    } 
}




export const initialLoadingMeetingsCreator = () => ({ type: INITIAL_LOADING_MEETINGS});
export const activMeetingsCreator = (currentNumber) => ({ type: ACTIV_MEETINGS, currentNumber: currentNumber});

export default meetingsReducer;
