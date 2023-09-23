import React, { useState } from "react";


const ToDoList = () =>{
    const [inputList,setInputList] = useState();
    const[itemListData,setItemListData] = useState([]);

    const inputItemList = (event)=> {
        setInputList(event.target.value);
    }
    const itemList = ()=> {
        if(inputList) {

            setItemListData( (oldList) => {
                return [...oldList,inputList];
            });
            setInputList('');
        }
    };

return (
    <>
        <div className="container">
                <div className="card text-center">
                        <div className="card-header text-center" style={{ backgroundColor : 'purple',color: "white"}}>ToDo List</div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" value={inputList} placeholder="Add an Item" aria-label="Username" aria-describedby="basic-addon1" onChange={inputItemList} />
                                <div className="input-group-append">
                                    <button className="btn btn btn-primary btn-circle btn-xl" type="button" onClick={itemList}>+</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <ol>

                            { itemListData.map((value) => {
                                    return <li>{value}</li>;
                                })
                            }
                            </ol>
                        </div>
                </div>
        </div>
    </>
)

}


export default ToDoList;