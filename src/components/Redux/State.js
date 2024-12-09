
import { reducerDialog } from "../reducerDialog"; 
import {reducerPost} from '../reducerPost'

 export let store = {
      _state : {
        profilePage:{
            posts: [
                { id: "1", messages: "Hello my freind", likescount: "9" },
                { id: "2", messages: "How are you", likescount: "19" }
            ],
            newPostText: ["hello, Saber njjk"]
        },
        dialogsPage:{
            dialogs: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Petr" },
                { id: 3, name: "Vasya" },
                { id: 4, name: "Darya" },
                { id: 5, name: "Isrofil" }
            ],
            messages:[
                { id: 1, message: "hi" },
                { id: 2, message: "how are you" },
                { id: 3, message: "I`m from Samarkand" }
            ],
            newMessageText:["lklk"]
             
        },
         freinds:[
             { id: 1, name: "Sasha" },
             { id: 2, name: "Petr" },
             { id: 3, name: "Vasya" },
         ],
       
     },

     subscriber:null,
     getState(){
        return this._state
     },
      
     callSubscrider (state){
            console.log("state is changed");
        if (this.subscriber){
            this.subscriber(state)
        }

            
            
        },
     subscribe (observer){
       
       this.subscriber = observer
       
    },
     dispatch (action) {

        this._state.profilePage = reducerPost(this._state.profilePage,action)
        this._state.dialogsPage = reducerDialog(this._state.dialogsPage,action)

        
         this.callSubscrider(this._state)
        }
     }
    
 

  
    
    

