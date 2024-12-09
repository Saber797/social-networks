const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Sasha" },
            { id: 2, name: "Petr" },
            { id: 3, name: "Vasya" },
            { id: 4, name: "Darya" },
            { id: 5, name: "Isrofil" }
        ],
        messages: [
            { id: 1, message: "hi" },
            { id: 2, message: "how are you" },
            { id: 3, message: "I`m from Samarkand" }
        ],
        newMessageText: "kmknk" // Используем строку для текста сообщения
    }
};

export const reducerDialog = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            // Обновляем текст нового сообщения
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    newMessageText: action.body
                }
            };

        case SEND_MESSAGE:
            // Отправляем новое сообщение
            const newMessage = {
                id: state.dialogsPage.messages.length + 1, // Генерируем новый id
                message: state.dialogsPage.newMessageText
            };
            
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    messages: [...state.dialogsPage.messages, newMessage], // Добавляем новое сообщение
                    newMessageText: "" // Очищаем текст нового сообщения
                }
            };

        default:
            return state;
    }
};

// Action Creators
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    };
};
