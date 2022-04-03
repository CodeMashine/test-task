import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = [
    { id: nanoid(), name: "old man", phone: "8966255", city: "arroio", isEdit: false, isSearch: false },
    { id: nanoid(), name: "dog", phone: "3588890", city: "new york", isEdit: false, isSearch: false },
    { id: nanoid(), name: "gool", phone: "66587", city: "necro city", isEdit: false, isSearch: false },
];



const contactPageSlice = createSlice({
    name: "contactPage",
    initialState,
    reducers: {
        deleteFunc: (state, action) => {
            const newState = Object.assign([],state) ;
            return newState.filter(item => item["id"] !== action.payload);
        },
        toggleEditFunc: (state, action) => {
            const newState = Object.assign([],state) ;
            return  newState.map(item => {
                if (item["id"] === action.payload) {
                    return { ...item, "isEdit": !item["isEdit"], "isSearch": false };
                } else {
                    return { ...item, "isEdit": false, };
                }
            });
        },
        changeFunc: (state, action) => {
            const [name ,value] = action.payload;
            const  newState = Object.assign([],state) ;
            return  newState.map(item => {
                if (item["isEdit"]) {
                    return { ...item, [name]: value };
                } else {
                    return item;
                }
            })
        },
        createFunc: (state,action) => {
            const [name , phone ,city] = action.payload ;
            if (!name|| !phone || !city) return;
            const newFriend = {
                id: nanoid(),
                name: name,
                phone: phone,
                city: city,
                isEdit: false,
                isSearch: false
            }
            let newState = Object.assign([], state);
            newState.push(newFriend);
            return newState;
        }
        , searchFunc: (state, action) => {
            let input;
            if (action.payload) {
                input = action.payload;
            } else {
                input = document.getElementById("searchField");
                input.value = "";
            }
            
            const newState = Object.assign([],state) ;
         
            return newState.map(obj => {
                let values = Object.values(obj).splice(1, 3);
                if (values.find(word => word.includes(input))) {
                    return { ...obj, "isSearch": true };
                } else {
                    return { ...obj, "isSearch": false };
                }
            })
        }

    }
});

export const { deleteFunc, toggleEditFunc, changeFunc, createFunc, searchFunc, clearFieldFunc, exitFunc } = contactPageSlice.actions;

export default contactPageSlice.reducer;

