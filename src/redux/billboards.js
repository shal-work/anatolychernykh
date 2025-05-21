const INITIAL_LOADING_BILLBOARDS = 'INITIAL-LOADING-BILLBOARDS';




let initialState = {
    items: [
        {
            id:1,
            name: 'pavlova',
            poster: 'exhibition-pavlova',
            alt: 'exhibition-pavlova',
            text: [
                    'Анатолий Черных', 
                    ' приглашает на выставку ко дню рождения Анны Павловой.',
            ],
            width: '640',
            height: '892',
            images: [
                {
                    picture: 'gergiev_maestro_158_346',
                    alt: 'gergiev_maestro',
                    width: '158',
                    height: '346',
                },
                {
                    picture: 'tsiskaridze_158_207',
                    alt: 'Цискаридзе',
                    width: '158',
                    height: '207',
                },
                {
                    picture: 'Art_11_183',
                    alt: 'Art_11',
                    width: '183',
                    height: '183',
                },
            ]
        },
        {
            id:2,
            name: 'peterhof',
            poster: 'exhibition-first_650_929',
            alt: 'exhibition-first',
            text: [
                'Анатолий Черных', 
                ' приглашает на выставку в Петергоф',
            ],
            width: '650',
            height: '929',
            images: [
                {
                    picture: 'carmen_158_328',
                    alt: 'Кармен. 2024г.',
                    width: '158',
                    height: '328',
                },
                {
                    picture: 'apocalypse_158_239',
                    alt: 'Апокалипсис.2024г_',
                    width: '158',
                    height: '239',
                },
                {
                    picture: 'holytrinity_183_270',
                    alt: 'Троица',
                    width: '183',
                    height: '270',
                },
            ]
        },
        {
            id:3,
            name: 'second',
            poster: 'exhibition-second_650_920',
            alt: 'exhibition-second',
            text: [
                '«Я люблю – и значит, я живу!»', 
                ' ',
            ],
            width: '650',
            height: '920',
            images: [
                {
                    picture: 'levitical_158_341',
                    alt: 'Портрет Елены Левитской',
                    width: '158',
                    height: '341',
                },
                {
                    picture: 'levitical_round_158',
                    alt: 'Портрет Елены Левитской',
                    width: '2000',
                    height: '2000',
                },
                {
                    picture: 'vysotsky_vladi_183_243',
                    alt: 'Высоцкий и Влади',
                    width: '183',
                    height: '243',
                },
            ]
        },
        {
            id:4,
            name: 'third',
            poster: 'exhibition-third_651_922',
            alt: 'exhibition-third',
            text: [
                'Лица России!', 
                ' ',
            ],
            width: '651',
            height: '922',
            images: [
                {
                    picture: 'hvorostovsky_158_258',
                    alt: 'Хворостовский',
                    width: '158',
                    height: '258',
                },
                {
                    picture: 'tsiskaridze_158_207',
                    alt: 'Цискаридзе',
                    width: '158',
                    height: '207',
                },
                {
                    picture: 'makhotin_183_132',
                    alt: 'Махотин_',
                    width: '183',
                    height: '132',
                },
            ]
        },
    ]
}
const billboardsReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_BILLBOARDS: 
            return state;
        default:
            return state;
    } 
}




export const initialLoadingBillboardsCreator = () => ({ type: INITIAL_LOADING_BILLBOARDS});


export default billboardsReducer;
