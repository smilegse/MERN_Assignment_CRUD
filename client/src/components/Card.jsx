
export default function Card(props) {
    // alert(JSON.stringify(props.item))
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={props.item['foods_image']} alt='image name'/>
            <div className="card-body">
                <p className="card-text">{props.item['foods_name']}</p>
                <div>
                    <button href="#" className="btn btn-danger">Edit</button>
                    <button href="#" className="btn btn-success">Delete</button>
                </div>
                
            </div>
        </div>
    );
}


// <tr key={i}>
//     <td>{item['food_code']}</td>
//     <td className="w-50">{item['foods_name']}</td>
//     <td>{item['qty']}</td>
//     <td>{item['price']}</td>
//     <td> <img className="img-fluid" src={item['foods_image']} alt='image name'/></td>
//     <td className="w-25">
//         <button className="btn btn-success btn-sm w-25 m-2">Edit</button> 
//         <button onClick={async()=> {await DeleteData(item['_id'])}} className="btn btn-danger btn-sm w-25 m-2">Delete</button>
//     </td>
// </tr>