import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFunc, toggleEditFunc, changeFunc, createFunc, searchFunc } from "./contactPageSlice";
import { exitFunc } from "../loginPage/loginPageSlice";
import styles from "./style.module.css";


export default function ContactPage() {
    const friendList = useSelector(state => state.contact);
    const dispatch = useDispatch();
    const [name,setName]=useState("") ;
    const [phone,setPhone]=useState("") ;
    const [city,setCity]=useState("") ;

    const body = friendList.map(item => {
        return <tr key={item["id"]} className={item["isSearch"] ? styles["isSearch"] : null}>
            {item["isEdit"] ? <>
                <td><input id="name" value={item["name"]} onChange={() => dispatch(changeFunc("name"))} /></td>
                <td><input id="phone" value={item["phone"]} onChange={() => dispatch(changeFunc("phone"))} /></td>
                <td><input id="city" value={item["city"]} onChange={() => dispatch(changeFunc("city"))} /></td>
            </> : <>
                <td className = {styles.td}>{item["name"]}</td>
                <td className = {styles.td} >{item["phone"]}</td>
                <td className = {styles.td} >{item["city"]}</td>
            </>
            }
            <td><button onClick={() => dispatch(toggleEditFunc(item["id"]))} >{item["isEdit"] ? "Save" : "Edit"}</button></td>
            <td><button onClick={() => dispatch(deleteFunc(item["id"]))}>Delete</button> </td>
        </tr>
    });


    return (
        <div className={styles.main}>
            <h2>Friend List</h2>
            <span>
                <input id="searchField"
                    placeholder="search"
                    onChange={(event) => dispatch(searchFunc(event.target.value))}
                    onBlur={(event) => event.target.value = ""}
                />
                <button onClick={() => dispatch(searchFunc(false))}>clear</button> <br />
            </span>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tfoot><tr>
                    <td> <input value = {name} onChange={(event)=>setName(event.target.value)} /> </td>
                    <td> <input value = {phone} onChange={(event)=>setPhone(event.target.value)} /> </td>
                    <td> <input value = {city} onChange={(event)=>setCity(event.target.value)} /> </td>

                    <td><button onClick={() => {
                        dispatch(createFunc([name,phone,city])) ;
                        setName("");
                        setPhone("");
                        setCity("");
                        }
                        }>Save</button></td>
                </tr>
                </tfoot>
                <tbody>
                    {body}
                </tbody>
            </table>
            <button onClick={() => dispatch(exitFunc())}>Exit</button>
        </div>
    )
}