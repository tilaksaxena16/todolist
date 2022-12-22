import React, { useState } from "react";
import "./Todolist.css";
import { Inputitems } from "./Inputitems";

const Todolist = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, indexno) => {
                return indexno !== id;
            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {items.map((itemVal, indexno) => {
                            return <Inputitems key={indexno} id={indexno} text={itemVal} onSelect={deleteItems} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export { Todolist };