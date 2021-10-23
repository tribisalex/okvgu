import {OPEN_MODAL} from "../../types";

const initialState = {
  menuItems: [
    {
      name: 'Колледж', /*require*/
      id: 1, /*require*/
      isOpen: true, /*require*/
      path: 'college',
      children: [
        {
          name: 'Главная',
          id: 1,
          isOpen: false,
          path: 'about_college',
        },
        {
          name: 'Администрация',
          id: 2,
          isOpen: false,
          path: 'administration',
          children: [
            {
              name: 'для запаса на 3 уровень меню',
              id: 1
            }
          ]
        },
        {
          name: 'Структура',
          id: 3,
          isOpen: false,
          path: 'structure',
        },
        {
          name: 'Цикловые комиссии',
          id: 4,
          isOpen: false,
          path: 'commissions',
        },
        {
          name: 'Материально-техническая база',
          id: 5,
          isOpen: false,
          path: 'mtb',
        },
        {
          name: 'Доска объявлений',
          id: 6,
          isOpen: false,
          path: 'bulletin_board',
        },
        {
          name: 'Наши достижения',
          id: 7,
          isOpen: false,
          path: 'achievements',
        },
        {
          name: 'Система менеджмента качества',
          id: 8,
          isOpen: false,
          path: 'qms',
        },
        {
          name: 'Первичная профсоюзная организация',
          id: 9,
          isOpen: false,
          path: 'trade_union_organization'
        },
        {
          name: 'Фотогалерея',
          id: 10,
          isOpen: false,
          path: 'photo_gallery'
        },
        {
          name: 'Новости',
          id: 11,
          isOpen: false,
          path: 'news'
        }
      ]
    },
    {
      name: 'Обучение', /*require*/
      id: 2, /*require*/
      isOpen: true, /*require*/
      path: 'training',
      children: [
        {
          name: 'Специальности',
          id: 1,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Стоимость обучения',
          id: 2,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Научно-исследовательская деятельность',
          id: 3,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Расписание',
          id: 4,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Изменённое расписание',
          id: 5,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Практика',
          id: 6,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Учебно-планирующая документация',
          id: 7,
          isOpen: false,
          path: '111'
        },
        {
          name: 'Заочная форма обучения',
          id: 8,
          isOpen: false,
          path: '111'
        },
        {
          name: 'График образовательного процесса',
          id: 9,
          isOpen: false,
          path: '111'
        }
      ]
    },
    {
      name: 'Воспитание', /*require*/
      id: 3, /*require*/
      isOpen: true, /*require*/
      path: 'education',
      children: [
        {
          name: "item3-1",
          id: 1,
          path: '111',
          isOpen: false
        }
      ]
    },
    {
      name: 'Методическая работа', /*require*/
      id: 4, /*require*/
      isOpen: true, /*require*/
      path: 'methodical_work',
      children: [
        {
          name: "item3-1",
          id: 1
        }
      ]
    },
    {
      name: 'Сотрудничество', /*require*/
      id: 5, /*require*/
      isOpen: true, /*require*/
      path: 'cooperation',
      children: [
        {
          name: "item3-1",
          id: 1
        }
      ]
    },
    {
      name: 'Абитуриенту', /*require*/
      id: 6, /*require*/
      isOpen: true, /*require*/
      path: 'to_the_applicant',
      children: [
        {
          name: "item3-1",
          id: 1
        }
      ]
    },
    {
      name: 'Контакты', /*require*/
      id: 7, /*require*/
      isOpen: true, /*require*/
      path: 'contacts',
      children: [
        {
          name: "item3-1",
          id: 1
        }
      ]
    },
    {
      name: 'English', /*require*/
      id: 8, /*require*/
      isOpen: true, /*require*/
      path: 'english_version',
      children: [
        {
          name: "the end",
          id: 1,
          path: 'the_end'
        }
      ]
    }
  ]
};

const MenuReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_MODAL:
    {
      return {
      ...state,
        menuItems: state.menuItems.map((menuItem) => menuItem.id === action.id ? { ...menuItem, isOpen: !menuItem.isOpen} : menuItem)}
      };



    default:
      return state;
  }
}

export default MenuReducer;