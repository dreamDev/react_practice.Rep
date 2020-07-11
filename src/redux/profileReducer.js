const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// Создаем начальное значение нашего state для конкретного reducer, что бы при первой отрисовке(инициализации) не получить undefined. Редакс при первой инициализации сам диспатчит некоторые action, но так как таких экшенов у нас нет, а по дефолту редьюсер возвращает state, то в итоге вернется undefined.
const initialState = {
  posts: [
    { id: "dlsajd02h39d2", message: "Hi, how are you?", likesCount: 32 },
    { id: "jf283h923d2d", message: "Helloo", likesCount: 12 },
    { id: "ojf892h398d2d3", message: "Where are you?", likesCount: 3 },
    { id: "jf92h3d82382", message: "LOL", likesCount: 5 }
  ],
  textarea: {
    stateValue: ''
  }
}

// reducer - это чистая функция уоторая принимает state, принимает action, затем если нужно этот action применят к этому state и возвращает новый state. Либо же возвращает state, который не был изменен, то бишь не изменят state, если action не подошел.
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: new Date().getTime().toString(), message: state.textarea.stateValue, likesCount: 0 }
        ],
        textarea: {
          stateValue: ''
        }
      }
    case UPDATE_NEW_POST_TEXT:
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
export const addPostAC = () => ({ type: "ADD-POST" })
export const textareaPostChangeAC = value => ({ type: "UPDATE-NEW-POST-TEXT", value: value })