import { useState } from "react";

function TodoList({items, heading, onSelectItem}) {
    let getClassName = function(index) {
        return `list-item ${selectedIndex === index ? "active" : ""}`;
    }

    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
            <div>
                <ul>
                    {items.map(function(item, i){
                        return <li
                            key={item}
                            className={getClassName(i)}
                            onClick={
                                () => {
                                    setSelectedIndex(i);
                                    onSelectItem(item);
                                }
                            }
                        >{item}</li>;
                    })}
                </ul>
            </div>
        </>
    );
}

export default TodoList;