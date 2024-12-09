const ADD_POST = 'ADD_POST';
const UPDATE_NEWPOST_TEXT = 'UPDATE_NEWPOST_TEXT';

let initialState = {
    profilePage: {
        posts: [
            { id: "1", messages: "Hello my friend", likescount: "9" },
            { id: "2", messages: "How are you", likescount: "19" }
        ],
        newPostText: "hello, Saber njjk" // Используем строку для текста нового поста
    }
};
export const reducerPost = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_POST':
            // Создаем новый объект для нового поста
            const newPost = {
                id: state.profilePage.posts.length + 1, // Генерируем новый id на основе длины массива
                messages: state.profilePage.newPostText,
                likescount: "0" // Пример значения для likescount
            };

            // Возвращаем новое состояние с добавленным постом и очищенным полем для текста
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: [...state.profilePage.posts, newPost],
                    newPostText: "" // Очищаем текст нового поста после добавления
                }
            };

        case 'UPDATE_NEWPOST_TEXT':
            // Обновляем текст нового поста
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPostText: action.newtext // Обновляем текст на новый
                }
            };

        default:
            return state;
    }
};

// Action Creators
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEWPOST_TEXT, 
        newtext: text
    };
};
