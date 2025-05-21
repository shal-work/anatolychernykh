const INITIAL_LOADING_PICTUR = 'INITIAL-LOADING-PICTUR';
const ACTIV_PICTURE = 'ACTIV-PICTURE';



let initialState = {
    items: [
        {
            id:1,
            // slider
            picture: 'holytrinity_653_964',
            alt: 'Троица',
            text: 'Поздравляю с Троицей! Здоровья и благополучия Вам!',
            width: '653',
            height: '964',
            // slider-mobil
            slider_mobil: {
                   picture: 'holytrinity_653_964',
            },
            // grid
            picture_grid: {
                picture: 'holytrinity_200',
                width: '200',
                height: '300',
            },
            active:  true
        },
        {
            id:2,
            // slider
            picture: 'apocalypse_638_964',
            alt: 'Апокалипсис.2024г.',
            text: 'Апокалипсис.2024г.',
            width: '330',
            height: '498',
            // slider-mobil
            slider_mobil: {
                picture: 'apocalypse_638_964',
            },
            // grid
            picture_grid: {
                picture: 'apocalypse_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 3,
            // slider
            // picture: 'carmen_240_498',
            picture: 'carmen_465_964',
            alt: 'Кармен. 2024г.',
            text: 'Кармен. 2024г.',
            width: '465',
            height: '964',
                // slider-mobil
            slider_mobil: {
                picture: 'carmen_465_964',
            },
            // grid
            picture_grid: {
                picture: 'carmen_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 4,
            // slider
            picture: 'duel',
            alt: 'И...дорога на дуэль',
            text: 'И...дорога на дуэль',
            width: '1080',
            height: '874',
            // slider-mobil
            slider_mobil: {
                // picture: 'duel_761_616',
                picture: 'duel',
            },
            // grid
            picture_grid: {
                picture: 'duel_200',
                width: '200',
                height: '300',
            },
            active:  false,
        },
        {
            id: 5,
            picture: 'pushkin_774_964',
            alt: 'Последний восход. А.С.Пушкин',
            text: 'Последний восход. А.С.Пушкин',
            width: '774',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'pushkin_774_964',
            },
            // grid
            picture_grid: {
                picture: 'pushkin_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 6,
            picture: 'levitical_446_963',
            alt: 'Портрет Елены Левитской',
            text: 'Цвет сирени. Портрет Елены Левитской. Михайловский театр.',
            width: '446',
            height: '963',
            // slider-mobil
            slider_mobil: {
                picture: 'levitical_446_963',
            },
            // grid
            picture_grid: {
                picture: 'levitical_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 7,
            picture: 'pushkin2_895_964',
            alt: 'Поздравляю всех с днём рождения великого русского поэта!',
            text: 'Поздравляю всех с днём рождения великого русского поэта!',
            width: '895',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'pushkin2_895_964',
            },
            // grid
            picture_grid: {
                picture: 'pushkin2_200',
                width: '200',
                height: '300',
            },

            active:  false
        },
        {
            id: 8,
            picture: 'mamonov_1012_964',
            alt: 'Мамонов',
            text: 'Одно мгновение и ... вечность. Посвящение Петру Мамонову 2024г.',
            width: '1012',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'mamonov_1012_964',
            },
            // grid
            picture_grid: {
                picture: 'mamonov_200',
                width: '200',
                height: '300',
            },

            active:  false
        },
        {
            id: 9,
            // picture: 'gergiev_maestro_440_964',
            picture: 'gergiev_maestro',
            alt: 'Маэстро Валерий Гергиев',
            text: 'Маэстро Валерий Гергиев',
            width: '310',
            height: '680',
            // slider-mobil
            slider_mobil: {
                // picture: 'gergiev_maestro_440_964',
                picture: 'gergiev_maestro',
            },
            // grid
            picture_grid: {
                picture: 'gergiev_maestro_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 10,
            picture: 'atlantis',
            alt: 'Атлантида. Какой она была? 2022 г.',
            text: 'Атлантида. Какой она была? 2022 г.',
            width: '1024',
            height: '682',
            // slider-mobil
            slider_mobil: {
                // picture: 'atlantis_1447_964',
                picture: 'atlantis',
            },
            // grid
            picture_grid: {
                picture: 'atlantis_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 11,
            picture: 'annunciation',
            alt: 'Благовещение или равнодушие сегодняшней жизни 2022г.',
            text: 'Благовещение или равнодушие сегодняшней жизни 2022г.',
            width: '1024',
            height: '683',
            // slider-mobil
            slider_mobil: {
                picture: 'annunciation',
            },
            // grid
            picture_grid: {
                picture: 'annunciation_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 12,
            picture: 'pushkin_you_appeared_1209_964',
            alt: 'передо мной явилась ты',
            text: 'Передо мной явилась ты',
            width: '1209',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'pushkin_you_appeared_721_575',
            },
            // grid
            picture_grid: {
                picture: 'pushkin_you_appeared_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 13,
            picture: 'temirkanov',
            alt: 'Портрет Ю.Темирканова 2011г',
            text: 'Портрет Ю. Х. Темирканова. 2011г. Талантливый дирижёр, и прекрасный художник!',
            width: '337',
            height: '800',
            // slider-mobil
            slider_mobil: {
                picture: 'temirkanov',
            },
            // grid
            picture_grid: {
                picture: 'temirkanov_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 14,
            picture: 'temirkanov2',
            alt: 'Портрет Ю. Х. Темирканова.',
            text: 'Портрет Ю. Х. Темирканова.',
            width: '419',
            height: '800',
            // slider-mobil
            slider_mobil: {
                picture: 'temirkanov2',
            },
            // grid
            picture_grid: {
                picture: 'temirkanov2_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 15,
            picture: 'marton_997_964',
            alt: 'Н.С. Мартон',
            text: 'Н.С. Мартон',
            width: '967',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'marton_997_964',
            },
            // grid
            picture_grid: {
                picture: 'marton_200',
                width: '200',
                height: '300',
            },
            active:  false
        },
        {
            id: 16,
            picture: 'lanovoy_964_964',
            alt: 'Портрет народного артиста СССР В. С. Ланового. 2018г',
            text: 'Портрет народного артиста СССР В. С. Ланового. 2018г',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'lanovoy_964_964',
            },
            // grid
            picture_grid: {
                picture: 'lanovoy_200',
                width: '200',
                height: '300',
            },            
            active:  false
        },
        {
            id: 17,
            picture: 'color_lilac_1094_964',
            alt: 'Во все времена красоту женщины сравнивали с цветком…',
            text: 'Во все времена красоту женщины сравнивали с цветком…',
            width: '750',
            height: '661',
            // slider-mobil
            slider_mobil: {
                picture: 'color_lilac_721_635',
            },
            // grid
            picture_grid: {
                picture: 'color_lilac_200',
                width: '200',
                height: '300',
            },              
            active:  false
        },
        {
            id: 18,
            picture: 'good_friday',
            alt: 'Страстная Пятница.',
            text: 'Страстная Пятница. 2004г.х.м., работа написана на страстную неделю, лик Христа пальцем в Пятницу.',
            width: '1124',
            height: '329',
            // slider-mobil
            slider_mobil: {
                picture: 'good_friday',
            },
            // grid
            picture_grid: {
                picture: 'good_friday_200',
                width: '200',
                height: '300',
            },             
            active:  false
        },
        {
            id: 19,
            picture: 'rhodes',
            alt: 'Попутный ветер острова Родос',
            text: 'Попутный ветер острова Родос',
            width: '780',
            height: '670',
            // slider-mobil
            slider_mobil: {
                picture: 'rhodes',
            },
            // grid
            picture_grid: {
                picture: 'rhodes_200',
                width: '200',
                height: '300',
            },  
            active:  false
        },
        {
            id: 20,
            picture: 'Art_02_344_964',
            alt: 'Art_02.jpg',
            text: '',
            width: '344',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_02_344_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_02_200',
                width: '200',
                height: '300',
            },              
            active:  false
        },
        {
            id: 21,
            picture: 'Art_03_377_964',
            alt: 'Art_03.jpg',
            text: '',
            width: '377',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_03_377_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_03_200',
                width: '200',
                height: '300',
            },   
            active:  false
        },
        {
            id: 22,
            picture: 'rudolf_nureyev_1361_964',
            alt: 'Рудольф Нуреев',
            text: 'Рудольф Нуреев',
            width: '1361',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'rudolf_nureyev_721_511',
            },
            // grid
            picture_grid: {
                picture: 'rudolf_nureyev_200',
                width: '200',
                height: '300',
            },   
            active:  false
        },
        {
            id: 23,
            picture: 'lesgaft_732_964',
            alt: 'Лесгафт Петр Францевич',
            text: 'Лесгафт Петр Францевич',
            width: '732',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'lesgaft_732_964',
            },
            // grid
            picture_grid: {
                picture: 'lesgaft_200',
                width: '200',
                height: '300',
            },   
            active:  false
        },
        {
            id: 24,
            picture: 'Art_06_346_964',
            alt: 'Art_06.jpg',
            text: '',
            width: '346',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_06_346_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_06_200',
                width: '200',
                height: '300',
            },          
            active:  false
        },
        {
            id: 25,
            picture: 'Art_07_377_964',
            alt: 'Art_07.jpg',
            text: '',
            width: '377',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_07_377_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_07_200',
                width: '200',
                height: '300',
            },            
            active:  false
        },
        {
            id: 26,
            picture: 'Art_11_964_964',
            alt: 'Art_11.jpg',
            text: '',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_11_964_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_11_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 27,
            picture: 'farukh_ruzimatov_964_964',
            alt: 'Фарух Рузиматов',
            text: 'Фарух Рузиматов',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'farukh_ruzimatov_964_964',
            },
            // grid
            picture_grid: {
                picture: 'farukh_ruzimatov_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 28,
            picture: 'Art_13_1383_964',
            alt: 'Art_13.jpg',
            text: '',
            width: '1383',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_13_721_502',
            },
            // grid
            picture_grid: {
                picture: 'Art_13_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 29,
            picture: 'Art_14_1743_964',
            alt: 'Art_14.jpg',
            text: '',
            width: '1743',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_14_721_399',
            },
            // grid
            picture_grid: {
                picture: 'Art_14_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 30,
            picture: 'Art_08_1532_964',
            alt: 'Art_08.jpg',
            text: '',
            width: '1532',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_08_721_454',
            },
            // grid
            picture_grid: {
                picture: 'Art_08_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 31,
            picture: 'Art_15_1449_964',
            alt: 'Art_15.jpg',
            text: '',
            width: '14449',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_15_721_480',
            },
            // grid
            picture_grid: {
                picture: 'Art_15_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 32,
            picture: 'Art_17_346_964',
            alt: 'Art_17.jpg',
            text: '',
            width: '346',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_17_346_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_17_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 33,
            picture: 'Art_18_385_964',
            alt: 'Art_18.jpg',
            text: '',
            width: '385',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_18_385_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_18_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 34,
            picture: 'Art_19_389_964',
            alt: 'Art_19.jpg',
            text: '',
            width: '389',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_19_389_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_19_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 35,
            picture: 'Art_20_488_964',
            alt: 'Art_20.jpg',
            text: '',
            width: '488',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_20_488_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_20_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 36,
            picture: 'Art_21_488_964',
            alt: 'Art_21.jpg',
            text: '',
            width: '488',
            height: '864',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_21_488_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_21_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 37,
            picture: 'Art_23_1446_964',
            alt: 'Art_23.jpg',
            text: '',
            width: '1446',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_23_721_481',
            },
            // grid
            picture_grid: {
                picture: 'Art_23_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 38,
            picture: 'vysotsky_vladi_726_964',
            alt: 'Владимир Высоцкий и Марина Влади',
            text: 'Владимир Высоцкий и Марина Влади',
            width: '726',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'vysotsky_vladi_726_964',
            },
            // grid
            picture_grid: {
                picture: 'vysotsky_vladi_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 39,
            picture: 'makhotin_1336_964',
            alt: 'Алексей Николаевич Махотин',
            text: 'Алексей Николаевич Махотин',
            width: '1336',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'makhotin_721_520',
            },
            // grid
            picture_grid: {
                picture: 'makhotin_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 40,
            picture: 'vysotsky_724_964',
            alt: 'Владимир Высоцкий',
            text: 'Владимир Высоцкий',
            width: '724',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'vysotsky_724_964',
            },
            // grid
            picture_grid: {
                picture: 'vysotsky_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 41,
            picture: 'vysotsky2_780_964',
            alt: 'Владимир Высоцкий',
            text: 'Владимир Высоцкий',
            width: '780',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'vysotsky2_780_964',
            },
            // grid
            picture_grid: {
                picture: 'vysotsky2_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 42,
            picture: 'Art_27_790_964',
            alt: 'Art_27.jpg',
            text: '',
            width: '790',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_27_790_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_27_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 43,
            picture: 'Art_28_783_964',
            alt: 'Art_28.jpg',
            text: '',
            width: '783',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_28_783_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_28_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 44,
            picture: 'Art_29_962_964',
            alt: 'Art_29.jpg',
            text: '',
            width: '962',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_29_962_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_29_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 45,
            picture: 'ivan_krasko_976_964',
            alt: 'Иван Краско',
            text: 'Иван Краско',
            width: '976',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'ivan_krasko_976_964',
            },
            // grid
            picture_grid: {
                picture: 'ivan_krasko_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 46,
            picture: 'hvorostovsky_591_964',
            alt: 'Дмитрий Хворостовский',
            text: 'Дмитрий Хворостовский',
            width: '591',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'hvorostovsky_591_964',
            },
            // grid
            picture_grid: {
                picture: 'hvorostovsky_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 47,
            picture: 'matsuev_550_964',
            alt: 'Денис Мацуев',
            text: 'Денис Мацуев',
            width: '550',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'matsuev_550_964',
            },
            // grid
            picture_grid: {
                picture: 'matsuev_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 48,
            picture: 'Art_33_326_964',
            alt: 'Art_33.jpg',
            text: '',
            width: '326',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_33_326_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_33_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 49,
            picture: 'Art_34_392_964',
            alt: 'Art_34.jpg',
            text: '',
            width: '392',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_34_392_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_34_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 50,
            picture: 'Art_35_964_964',
            alt: 'Art_35.jpg',
            text: '',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_35_964_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_35_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 51,
            picture: 'Art_36_403_964',
            alt: 'Art_36.jpg',
            text: '',
            width: '403',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_36_403_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_36_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 52,
            picture: 'Art_38_1449_964',
            alt: 'Art_38.jpg',
            text: '',
            width: '1449',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_38_721_480',
            },
            // grid
            picture_grid: {
                picture: 'Art_38_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 53,
            picture: 'Art_39_1060_964',
            alt: 'Art_39.jpg',
            text: '',
            width: '1060',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_39_1060_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_39_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 54,
            picture: 'Art_40_1197_964',
            alt: 'Art_40.jpg',
            text: '',
            width: '1197',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_40_721_581',
            },
            // grid
            picture_grid: {
                picture: 'Art_40_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 55,
            picture: 'Art_41_964_964',
            alt: 'Art_41.jpg',
            text: '',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_41_964_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_41_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 56,
            picture: 'tsiskaridze_736_964',
            alt: 'Николай Цискаридзе',
            text: 'Николай Цискаридзе',
            width: '736',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'tsiskaridze_736_964',
            },
            // grid
            picture_grid: {
                picture: 'tsiskaridze_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 57,
            picture: 'Art_45_964_964',
            alt: 'Art_45.jpg',
            text: '',
            width: '964',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_45_964_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_45_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 58,
            picture: 'judgment_day_662_964',
            alt: 'Судный день. 2022г.',
            text: 'Судный день. 2022г.',
            width: '662',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'judgment_day_662_964',
            },
            // grid
            picture_grid: {
                picture: 'judgment_day_200',
                width: '200',
                height: '300',
            },     
            active:  false
        },
        {
            id: 59,
            picture: 'Art_50_601_964',
            alt: 'Art_50.jpg',
            text: '',
            width: '601',
            height: '964',
            // slider-mobil
            slider_mobil: {
                picture: 'Art_50_601_964',
            },
            // grid
            picture_grid: {
                picture: 'Art_50_200',
                width: '200',
                height: '300',
            },     
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
