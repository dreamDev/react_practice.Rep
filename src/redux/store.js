import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'

const store = {

  _state: {
    profilePage: {
      posts: [
        { id: "jf29hdj239ud20", message: "Hi, how are you?", likesCount: 32 },
        { id: "jd0283hd922d328", message: "Helloo", likesCount: 12 },
        { id: "fj02h3j2030f2", message: "Where are you?", likesCount: 3 },
        { id: "foi2983uf9jd230d", message: "LOL", likesCount: 5 }
      ],
      textarea: {
        stateValue: ''
      }
    },
    dialogsPage: {
      messages: [
        { id: "dj238ydh29d2", message: "Hi" },
        { id: "jd293hd2937dy", message: "Hello" },
        { id: "dh2983d924f34", message: "Greetings Traveler" },
        { id: "jf20983h8374h", message: "OLOLO" },
        { id: "dk239j347g839", message: "Yo" },
      ],
      dialogs: [
        { id: "0fg384uf9374h", name: "Anton" },
        { id: "dj923763dg823", name: "Sahsa" },
        { id: "hf873gf3dh398", name: "Lena" },
        { id: "fh348738ydu3", name: "Kirill" },
        { id: "f834hd8374ui", name: "Vika" }
      ],
      textarea: {
        stateValue: ''
      }
    }
  },

  getState() {
    return this._state
  },

  // Функция "заглушка" для subscribe.
  _callSubscriber() { },

  // Создаем и экспортируем в index.js функцию, котрую мы там вызовем и передадим(подпишем) настоящую функцию для ререндера, что бы переопределить нашу "заглушку" и пользоваться настоящим ререндером в этом файле(state.js).
  // Это нужно для эвойда циклической зависимости между state.js и index.js
  subscribe(observer) {
    this._callSubscriber = observer  // Паттерн observer(наблюдатель)
  },

  // Функция dispatch принимает объект action, у которого есть как минимум поле type, что бы узнать, какой тип экшена произошел и вызвать соответствующий метод для обработки/изменения стейта.
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }

}

export default store
window.store = store