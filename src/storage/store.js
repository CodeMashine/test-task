import { configureStore } from '@reduxjs/toolkit' ;
import loginPage from '../features/contactList/loginPage/loginPageSlice'; 
import contactPage from '../features/contactList/contactPage/contactPageSlice'; 

export const store=configureStore({
    reducer:{
        login:loginPage,
        contact:contactPage,
    }
})