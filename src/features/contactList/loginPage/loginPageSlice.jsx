import {createSlice} from '@reduxjs/toolkit' ;

const initialState={
   login:'admin' ,
   password :'admin',
   loginAtempt:'',
   passwordAtempt:'',
   validation:false ,
}


const loginPageSlice = createSlice({
    name:'loginPage',
    initialState ,
    reducers:{
        loginAtemptFunc:(state,action)=>{
            state.loginAtempt=action.payload;
        },
        passwordAtemptFunc:(state,action)=>{
            state.passwordAtempt=action.payload ;
        },
        comparison:(state)=>{
            if ((state.login===state.loginAtempt)&&(state.password===state.passwordAtempt)){
                state.passwordAtempt=state.loginAtempt='' ;
                state.validation=true ;
            }
            
        },
        exitFunc:(state)=>{
            state.validation=false;
        }
    }
}) ;

export const {loginAtemptFunc , passwordAtemptFunc,comparison , exitFunc} =loginPageSlice.actions ;

export default loginPageSlice.reducer ;

