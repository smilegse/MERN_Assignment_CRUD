
export default function Card(props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src="" className="card-img-top" alt=""/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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