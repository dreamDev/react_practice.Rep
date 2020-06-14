const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXTAREA = "UPDATE-NEW-MESSAGE-TEXTAREA";

// Функция для генерации рандомного id
const _generateId =() => `f${(~~(Math.random() * 1e8)).toString(16)}`

const store = {

  // Функция "заглушка" для subscribe.
  _callSubscriber() { },

  _state: {
    profilePage: {
      posts: [
        { id: _generateId(), message: "Hi, how are you?", likesCount: 32 },
        { id: _generateId(), message: "Helloo", likesCount: 12 },
        { id: _generateId(), message: "Where are you?", likesCount: 3 },
        { id: _generateId(), message: "LOL", likesCount: 5 }
      ],
      textarea: {
        stateValue: ''
      }
    },
    dialogsPage: {
      messages: [
        { id: _generateId(), message: "Hi" },
        { id: _generateId(), message: "Hello" },
        { id: _generateId(), message: "Greetings Traveler" },
        { id: _generateId(), message: "OLOLO" },
        { id: _generateId(), message: "Yo" },
      ],
      dialogs: [
        { id: _generateId(), name: "Anton" },
        { id: _generateId(), name: "Sahsa" },
        { id: _generateId(), name: "Lena" },
        { id: _generateId(), name: "Kirill" },
        { id: _generateId(), name: "Vika" }
      ],
      textarea: {
        stateValue: ''
      }
    }
  },

  getState() {
    return this._state
  },

  // Создаем и экспортируем в index.js функцию, котрую мы там вызовем и передадим(подпишем) настоящую функцию для ререндера, что бы переопределить нашу "заглушку" и пользоваться настоящим ререндером в этом файле(state.js).
  // Это нужно для эвойда циклической зависимости между state.js и index.js
  subscribe(observer) {
    this._callSubscriber = observer  // Паттерн observer(наблюдатель)
  },

  _addPost(postMessage) {
    this._state.profilePage.posts.push(
      { id: _generateId(), message: postMessage, likesCount: 0 }
    )
    this._state.profilePage.textarea.stateValue = ''
    this._callSubscriber(this._state)
  },

  _textareaPostChange(value) {
    this._state.profilePage.textarea.stateValue = value;
    this._callSubscriber(this._state)
  },

  _sendMessage(message) {
    this._state.dialogsPage.messages.push(
      { id: _generateId(), message: message }
    )
    this._state.dialogsPage.textarea.stateValue = ''
    this._callSubscriber(this._state)
  },

  _textareaMessageChange(value) {
    this._state.dialogsPage.textarea.stateValue = value;
    this._callSubscriber(this._state)
  },

  dispatch(action) {
    switch (action.type) {

      case ADD_POST:
        this._addPost(action.postMessage)
        break;

      case UPDATE_NEW_POST_TEXT:
        this._textareaPostChange(action.value)
        break;

      case SEND_MESSAGE:
        this._sendMessage(action.message)
        break;
      
      case UPDATE_NEW_MESSAGE_TEXTAREA:
        this._textareaMessageChange(action.value)
        break;

      default:
        console.error("Wrong action type!", action)
        break;

    }
  }

}

// Создаем Action Creators и экспортируем их, для того, что бы использовать их в компоненте и не создавать объект action в UI.
export const addPostAC = message => ({ type: "ADD-POST", postMessage: message })
export const textareaPostChangeAC = value => ({ type: "UPDATE-NEW-POST-TEXT", value: value })
export const sendMessageAC = message => ({ type: "SEND-MESSAGE", message: message })
export const textareaMessageChangeAC = value => ({ type: "UPDATE-NEW-MESSAGE-TEXTAREA", value: value })

export default store
window.store = store