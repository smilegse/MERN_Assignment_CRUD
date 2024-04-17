import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../loader/Loader.jsx";

const HomePage = () => {
    let [Data, SetData] = useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData();
        })()
    }, []);

    const ReadData = async ()=>{
        let res = await axios.get('/api/read');
        SetData(res.data['row']);
    }

    const DeleteData = async (id) =>{
        await axios.get(`api/delete/${id}`)
        await ReadData();
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Read page</h1>
                    <table className="table table-">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.length === 0? <Loader/> :
                                Data.map((item,i)=> {
                                    return (
                                        <tr key={i}>
                                            <td>{item['food_code']}</td>
                                            <td>{item['foods_name']}</td>
                                            <td>{item['qty']}</td>
                                            <td>{item['price']}</td>
                                            <td> <img className="w-25 flex" src={item['foods_image']} alt='image name'/></td>
                                            <td>
                                                <button className="btn btn-success btn-sm w-100">Edit</button>  &nbsp;
                                                <button className="btn btn-danger btn-sm w-100">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
        ;
};

export default HomePage;