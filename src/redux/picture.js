const INITIAL_LOADING_PICTUR = 'INITIAL-LOADING-PICTUR';
const ACTIV_PICTURE = 'ACTIV-PICTURE';



let initialState = {
    items: [
        {
            id:1,
            picture: 'holytrinity',
            alt: 'Троица',
            text: 'Поздравляю с Троицей! Здоровья и благополучия Вам!',
            width: '1463',
            height: '2160',
            active:  true
        },
        {
            id:2,
            picture: 'apocalypse',
            alt: 'Апокалипсис.2024г.',
            text: 'Апокалипсис.2024г.',
            width: '1059',
            height: '1600',
            active:  false
        },
        {
            id: 3,
            picture: 'carmen',
            alt: 'Кармен. 2024г.',
            text: 'Кармен. 2024г.',
            width: '772',
            height: '1600',
            active:  false
        },
        {
            id: 4,
            picture: 'duel',
            alt: 'И...дорога на дуэль',
            text: 'И...дорога на дуэль',
            width: '1080',
            height: '874',
            active:  false
        },
        {
            id: 5,
            picture: 'pushkin',
            alt: 'Последний восход. А.С.Пушкин',
            text: 'Последний восход. А.С.Пушкин',
            width: '822',
            height: '1024',
            active:  false
        },
        {
            id: 6,
            picture: 'levitical',
            alt: 'Портрет Елены Левитской',
            text: 'Цвет сирени. Портрет Елены Левитской. Михайловский театр.',
            width: '741',
            height: '1600',
            active:  false
        },
        {
            id: 7,
            picture: 'pushkin2',
            alt: 'Поздравляю всех с днём рождения великого русского поэта!',
            text: 'Поздравляю всех с днём рождения великого русского поэта!',
            width: '1221',
            height: '1316',
            active:  false
        },
        {
            id: 8,
            picture: 'mamonov',
            alt: 'Мамонов',
            text: 'Одно мгновение и ... вечность. Посвящение Петру Мамонову 2024г.',
            width: '1080',
            height: '1029',
            active:  false
        },
        {
            id: 9,
            picture: 'gergiev_maestro',
            alt: 'Маэстро Валерий Гергиев',
            text: 'Маэстро Валерий Гергиев',
            width: '310',
            height: '680',
            active:  false
        },
        {
            id: 10,
            picture: 'atlantis',
            alt: 'Атлантида. Какой она была? 2022 г.',
            text: 'Атлантида. Какой она была? 2022 г.',
            width: '1024',
            height: '682',
            active:  false
        },
        {
            id: 11,
            picture: 'annunciation',
            alt: 'Благовещение или равнодушие сегодняшней жизни 2022г.',
            text: 'Благовещение или равнодушие сегодняшней жизни 2022г.',
            width: '1024',
            height: '683',
            active:  false
        },
        {
            id: 12,
            picture: 'pushkin_you_appeared',
            alt: 'передо мной явилась ты',
            text: 'Передо мной явилась ты',
            width: '1405',
            height: '1120',
            active:  false
        },
        {
            id: 13,
            picture: 'temirkanov',
            alt: 'Портрет Ю.Темирканова 2011г',
            text: 'Портрет Ю. Х. Темирканова. 2011г. Талантливый дирижёр, и прекрасный художник!',
            width: '337',
            height: '800',
            active:  false
        },
        {
            id: 14,
            picture: 'temirkanov2',
            alt: 'Портрет Ю. Х. Темирканова.',
            text: 'Портрет Ю. Х. Темирканова.',
            width: '419',
            height: '800',
            active:  false
        },
        {
            id: 15,
            picture: 'marton',
            alt: 'Н.С. Мартон',
            text: 'Н.С. Мартон',
            width: '2000',
            height: '1935',
            active:  false
        },
        {
            id: 16,
            picture: 'lanovoy',
            alt: 'Портрет народного артиста СССР В. С. Ланового. 2018г',
            text: 'Портрет народного артиста СССР В. С. Ланового. 2018г',
            width: '1600',
            height: '1600',
            active:  false
        },
        {
            id: 17,
            picture: 'color_lilac',
            alt: 'Во все времена красоту женщины сравнивали с цветком…',
            text: 'Во все времена красоту женщины сравнивали с цветком…',
            width: '750',
            height: '661',
            active:  false
        },
        {
            id: 18,
            picture: 'good_friday',
            alt: 'Страстная Пятница.',
            text: 'Страстная Пятница. 2004г.х.м., работа написана на страстную неделю, лик Христа пальцем в Пятницу.',
            width: '1124',
            height: '329',
            active:  false
        },
        {
            id: 19,
            picture: 'rhodes',
            alt: 'Попутный ветер острова Родос',
            text: 'Попутный ветер острова Родос',
            width: '780',
            height: '670',
            active:  false
        },
        {
            id: 20,
            picture: 'Art_02',
            alt: 'Art_02.jpg',
            text: '',
            width: '1049',
            height: '2942',
            active:  false
        },
        {
            id: 21,
            picture: 'Art_03',
            alt: 'Art_03.jpg',
            text: '',
            width: '1151',
            height: '2944',
            active:  false
        },
        {
            id: 22,
            picture: 'rudolf_nureyev',
            alt: 'Рудольф Нуреев',
            text: 'Рудольф Нуреев',
            width: '2000',
            height: '1416',
            active:  false
        },
        {
            id: 23,
            picture: 'lesgaft',
            alt: 'Лесгафт Петр Францевич',
            text: 'Лесгафт Петр Францевич',
            width: '1365',
            height: '1798',
            active:  false
        },
        {
            id: 24,
            picture: 'Art_06',
            alt: 'Art_06.jpg',
            text: '',
            width: '1096',
            height: '3054',
            active:  false
        },
        {
            id: 25,
            picture: 'Art_07',
            alt: 'Art_07.jpg',
            text: '',
            width: '1194',
            height: '3055',
            active:  false
        },
        {
            id: 26,
            picture: 'Art_11',
            alt: 'Art_11.jpg',
            text: '',
            width: '1345',
            height: '1345',
            active:  false
        },
        {
            id: 27,
            picture: 'farukh_ruzimatov',
            alt: 'Фарух Рузиматов',
            text: 'Фарух Рузиматов',
            width: '1345',
            height: '1345',
            active:  false
        },
        {
            id: 28,
            picture: 'Art_13',
            alt: 'Art_13.jpg',
            text: '',
            width: '2000',
            height: '1394',
            active:  false
        },
        {
            id: 29,
            picture: 'Art_14',
            alt: 'Art_14.jpg',
            text: '',
            width: '2000',
            height: '1106',
            active:  false
        },
        {
            id: 30,
            picture: 'Art_08',
            alt: 'Art_08.jpg',
            text: '',
            width: '2000',
            height: '1259',
            active:  false
        },
        {
            id: 31,
            picture: 'Art_15',
            alt: 'Art_15.jpg',
            text: '',
            width: '2000',
            height: '1331',
            active:  false
        },
        {
            id: 32,
            picture: 'Art_17',
            alt: 'Art_17.jpg',
            text: '',
            width: '964',
            height: '2685',
            active:  false
        },
        {
            id: 33,
            picture: 'Art_18',
            alt: 'Art_18.jpg',
            text: '',
            width: '1128',
            height: '2826',
            active:  false
        },
        {
            id: 34,
            picture: 'Art_19',
            alt: 'Art_19.jpg',
            text: '',
            width: '1147',
            height: '2837',
            active:  false
        },
        {
            id: 35,
            picture: 'Art_20',
            alt: 'Art_20.jpg',
            text: '',
            width: '1145',
            height: '2261',
            active:  false
        },
        {
            id: 36,
            picture: 'Art_21',
            alt: 'Art_21.jpg',
            text: '',
            width: '1145',
            height: '2261',
            active:  false
        },
        {
            id: 37,
            picture: 'Art_23',
            alt: 'Art_23.jpg',
            text: '',
            width: '2000',
            height: '1333',
            active:  false
        },
        {
            id: 38,
            picture: 'vysotsky_vladi',
            alt: 'Владимир Высоцкий и Марина Влади',
            text: 'Владимир Высоцкий и Марина Влади',
            width: '747',
            height: '992',
            active:  false
        },
        {
            id: 39,
            picture: 'makhotin',
            alt: 'Алексей Николаевич Махотин',
            text: 'Алексей Николаевич Махотин',
            width: '2000',
            height: '1443',
            active:  false
        },
        {
            id: 40,
            picture: 'vysotsky',
            alt: 'Владимир Высоцкий',
            text: 'Владимир Высоцкий',
            width: '810',
            height: '1078',
            active:  false
        },
        {
            id: 41,
            picture: 'vysotsky2',
            alt: 'Владимир Высоцкий',
            text: 'Владимир Высоцкий',
            width: '813',
            height: '1005',
            active:  false
        },
        {
            id: 42,
            picture: 'Art_27',
            alt: 'Art_27.jpg',
            text: '',
            width: '1484',
            height: '1811',
            active:  false
        },
        {
            id: 43,
            picture: 'Art_28',
            alt: 'Art_28.jpg',
            text: '',
            width: '2000',
            height: '2462',
            active:  false
        },
        {
            id: 44,
            picture: 'Art_29',
            alt: 'Art_29.jpg',
            text: '',
            width: '2000',
            height: '2004',
            active:  false
        },
        {
            id: 45,
            picture: 'ivan_krasko',
            alt: 'Иван Краско',
            text: 'Иван Краско',
            width: '2000',
            height: '1983',
            active:  false
        },
        {
            id: 46,
            picture: 'hvorostovsky',
            alt: 'Дмитрий Хворостовский',
            text: 'Дмитрий Хворостовский',
            width: '1817',
            height: '2965',
            active:  false
        },
        {
            id: 47,
            picture: 'matsuev',
            alt: 'Денис Мацуев',
            text: 'Денис Мацуев',
            width: '1689',
            height: '2959',
            active:  false
        },
        {
            id: 48,
            picture: 'Art_33',
            alt: 'Art_33.jpg',
            text: '',
            width: '1008',
            height: '2983',
            active:  false
        },
        {
            id: 49,
            picture: 'Art_34',
            alt: 'Art_34.jpg',
            text: '',
            width: '1211',
            height: '2979',
            active:  false
        },
        {
            id: 50,
            picture: 'Art_35',
            alt: 'Art_35.jpg',
            text: '',
            width: '2000',
            height: '2000',
            active:  false
        },
        {
            id: 51,
            picture: 'Art_36',
            alt: 'Art_36.jpg',
            text: '',
            width: '1295',
            height: '3101',
            active:  false
        },
        {
            id: 52,
            picture: 'Art_38',
            alt: 'Art_38.jpg',
            text: '',
            width: '2000',
            height: '1331',
            active:  false
        },
        {
            id: 53,
            picture: 'Art_39',
            alt: 'Art_39.jpg',
            text: '',
            width: '2000',
            height: '1819',
            active:  false
        },
        {
            id: 54,
            picture: 'Art_40',
            alt: 'Art_40.jpg',
            text: '',
            width: '2000',
            height: '1610',
            active:  false
        },
        {
            id: 55,
            picture: 'Art_41',
            alt: 'Art_41.jpg',
            text: '',
            width: '2000',
            height: '2000',
            active:  false
        },
        {
            id: 56,
            picture: 'tsiskaridze',
            alt: 'Николай Цискаридзе',
            text: 'Николай Цискаридзе',
            width: '2000',
            height: '2617',
            active:  false
        },
        {
            id: 57,
            picture: 'Art_45',
            alt: 'Art_45.jpg',
            text: '',
            width: '2000',
            height: '2000',
            active:  false
        },
        {
            id: 58,
            picture: 'judgment_day',
            alt: 'Судный день. 2022г.',
            text: 'Судный день. 2022г.',
            width: '2000',
            height: '2910',
            active:  false
        },
        {
            id: 59,
            picture: 'Art_50',
            alt: 'Art_50.jpg',
            text: '',
            width: '1937',
            height: '3107',
            active:  false
        }
    ],
    currentNumber: 0,
}


const pictureReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_PICTUR: 
            return state;
        case ACTIV_PICTURE: 
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

export const initialLoadingPictureCreator = () => ({ type: INITIAL_LOADING_PICTUR});
export const activPpictureCreator = (currentNumber) => ({ type: ACTIV_PICTURE, currentNumber: currentNumber});

export default pictureReducer;
