import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../loader/Loader.jsx";
import Helper from "../utility/Helper.js";

const FoodCardList = () => {
    let [Data, SetData] = useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData();
        })()
    }, []);

    const ReadData = async ()=>{
        let res = await axios.get(`${Helper.baseURL}/api/read`);
        console.log(res.data['row'])
        SetData(res.data['row']);
    }

    const DeleteData = async (id) =>{
        alert(id)
        let res = await axios.get(`${Helper.baseURL}/api/delete/${id}`)
        if(res.data['status'] === 'Success'){
            toast.success('Deleted Successfully!');
            await ReadData();
        }else{
            toast.err('Deleted Failed!');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h6>All Food List</h6>
                </div>
                
                {/* Data.length === 0? <Loader/> :
                Data.map((item,i) => {
                    return(
                        <ul key={i}>
                            <li></li>
                        </ul>
                    )
                }) */}
                        
                
            </div>
        </div>
    )
};

export default FoodCardList;

{/* 
<div key={i} className="card col-md-3">
<img src={item['foods_image']} className="card-img-top" alt=""/>
<div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
        <button href="#" className="btn btn-danger">Edit</button>
        <button href="#" className="btn btn-success">Delete</button>
    </div>
    
</div>
</div> */}

{/* // <tr key={i}>
//     <td>{item['food_code']}</td>
//     <td className="w-50">{item['foods_name']}</td>
//     <td>{item['qty']}</td>
//     <td>{item['price']}</td>
//     <td> <img className="img-fluid" src={item['foods_image']} alt='image name'/></td>
//     <td className="w-25">
//         <button className="btn btn-success btn-sm w-25 m-2">Edit</button> 
//         <button onClick={async()=> {await DeleteData(item['_id'])}} className="btn btn-danger btn-sm w-25 m-2">Delete</button>
//     </td>
// </tr> */}