import {createSlice} from '@reduxjs/toolkit' ;
import {nanoid} from 'nanoid';


const initialState=[
    {id: nanoid(), name: 'old man', phone: '8966255', city: 'arroio',isEdit:false , isSearch:false},
	{id: nanoid(), name: 'dog', phone: '3588890', city:'new york' , isEdit:false ,isSearch:false},
	{id: nanoid(), name: 'gool', phone: '66587', city: 'necro city' , isEdit:false ,isSearch:false},
];



const contactPageSlice = createSlice({
    name:'contactPage',
    initialState ,
    reducers:{
        deleteFunc:(state,action)=>{
            const new_state=state.filter(item=>item['id']!==action.payload);
            return new_state ;
        },
        toggleEditFunc:(state,action)=>{
            const new_state= state.map(item=>{
                if (item['id']===action.payload){
                    return {...item, 'isEdit':!item['isEdit'] , 'isSearch':false} ;
                }else{
                    return {...item,'isEdit':false ,} ;
                }
            }) ;
            return new_state ;
        },
        changeFunc :(state,action)=>{
            const value= document.getElementById(action.payload).value ;
            const new_state = state.map(item=>{
                if (item['isEdit']){
                    return {...item , [action.payload]:value} ;
                }else{
                    return item ;
                }
            })
            return new_state ;
        },
        createFunc:(state)=>{
            const name = document.querySelector('#new_name');
            const phone = document.querySelector('#new_phone');
            const city = document.querySelector('#new_city');

            if (!name.value||!phone.value||!city.value) return ;
            const newFriend={
                id:nanoid(),
                name:name.value,
                phone:phone.value,
                city:city.value,
                isEdit:false,
                isSearch:false
            }
            let new_state = Object.assign([],state) ;
            new_state.push(newFriend) ;
            name.value=phone.value=city.value='' ;

        return new_state ;                
        }
        ,searchFunc:(state , action)=>{
            let input;
            if (action.payload){
                input = action.payload ;
            }else{
                input = document.getElementById('searchField') ;
                input.value='' ;
            }
        
            const  new_state=state.map(obj=>{
                    let values = Object.values(obj).splice(1,3) ;
                    if(values.find(word=>word.includes(input))){
                        return {...obj,'isSearch':true} ;
                    }else{
                        return {...obj,'isSearch':false} ;
                    }
                })
            return new_state ;
        }
        
    }
}) ;

export const {deleteFunc , toggleEditFunc , changeFunc , createFunc ,searchFunc,clearFieldFunc , exitFunc } =contactPageSlice.actions ;

export default contactPageSlice.reducer ;

