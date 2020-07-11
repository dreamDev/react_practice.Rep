const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXTAREA = "UPDATE-NEW-MESSAGE-TEXTAREA";

// Создаем начальное значение нашего state для конкретного reducer, что бы при первой отрисовке(инициализации) не получить undefined. Редакс при первой инициализации сам диспатчит некоторые action, но так как таких экшенов у нас нет, а по дефолту редьюсер возвращает state, то в итоге вернется undefined.
const initialState = {
  messages: [
    { id: "sj230di2i30r", message: "Hi" },
    { id: "ieju298uei329eu", message: "Hello" },
    { id: "wud2983ye923y", message: "Greetings Traveler" },
    { id: "idj293e982e2", message: "OLOLO" },
    { id: "k0du238ye287y", message: "Yo" },
  ],
  dialogs: [
    { id: "iu2j38ue293ye", name: "Anton" },
    { id: "our2083hy92", name: "Sahsa" },
    { id: "o2ij983hye2d", name: "Lena" },
    { id: "od20u83hd923", name: "Kirill" },
    { id: "hg30948uh393", name: "Vika" }
  ],
  textarea: {
    stateValue: ''
  }
}

// reducer - это чистая функция уоторая принимает state, принимает action, затем если нужно этот action применят к этому state и возвращает новый state. Либо же возвращает state, который не был изменен, то бишь не изменят state, если action не подошел.
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: new Date().getTime().toString(), message: state.textarea.stateValue }
        ],
        textarea: {
          stateValue: ''
        }
      }
    case UPDATE_NEW_MESSAGE_TEXTAREA:
      return {
        ...state,
        textarea: {
          stateValue: action.value
        }
      }
    default:
      return state
  }
}

// Создаем Action Creators и экспортируем их, для того, что бы использовать их в компоненте и не создавать объект action в UI.
export const sendMessageAC = () => ({ type: "SEND-MESSAGE" })
export const textareaMessageChangeAC = value => ({ type: "UPDATE-NEW-MESSAGE-TEXTAREA", value: value })