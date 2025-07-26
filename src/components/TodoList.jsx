import { useState } from "react";

function TodoList() {
    const listItems = ["Kate", "Kārlis", "Elza"];

    let getClassName = function(index) {
        return `list-item ${selectedIndex === index ? "active" : ""}`;
    }

    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <div>
                <ul>
                    {listItems.map(function(item, i){
                        return <li
                            key={item}
                            className={getClassName(i)}
                            onClick={
                                () =>
                                    setSelectedIndex(i)
                            }
                        >{item}</li>;
                    })}
                </ul>
            </div>
        </>
    );
}

export default TodoList;