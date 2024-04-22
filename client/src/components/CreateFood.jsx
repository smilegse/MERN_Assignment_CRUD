import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Helper from "../utility/Helper";
import { toast } from 'react-hot-toast';
import ButtonSpinner from "./ButtonSpinner";


const CreateFood = () => {
    
    let navigate = useNavigate();
    let [submit,setSubmit] = useState(false);
    
    const CreateData = async (event)=>{
        event.preventDefault()
        
        let formData = new FormData(event.target);
        let foods_name=formData.get("foods_name");
        let food_code=formData.get("food_code");
        let foods_image=formData.get("foods_image");
        let food_category=formData.get("food_category");
        let qty = parseInt(formData.get("qty"));
        let price = parseFloat(formData.get("price"));

        if(Helper.isEmpty(foods_name)){
            toast.error('Food name is Required!');
        }else if(Helper.isEmpty(food_code)){
            toast.error('Food code is Required!');
        }else if(Helper.isEmpty(foods_image)){
            toast.error('Food image is Required!');
        }else if(Helper.isEmpty(food_category)){
            toast.error('Food category is Required!');
        }else if(Helper.isEmpty(foods_name)){
            toast.error('Food name is Required!');
        }else if(Helper.isEmpty(qty)){
            toast.error('Food quantity is Required!');
        }else if(Helper.isEmpty(price)){
            toast.error('Food price is Required!');
        }else{
            setSubmit(true);
            const res = await axios.post(`${Helper.baseURL}/api/create`, {
                foods_name: foods_name, 
                food_code: food_code, 
                foods_image: foods_image,
                food_category: food_category,
                qty: parseInt(qty),
                price: parseFloat(price)
            });
            if(res.data['status'] === 'Success') {
                navigate('/');
            }else{                
                setSubmit(false);
                toast.error('Food price is Required!');
            }

        }
    }

    return (
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                    <h6>Create Food Item</h6>
              </div>
              <form onSubmit={CreateData} >
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Food Name</label>
                        <input name="foods_name" type="text" className="form-control form-control-sm " placeholder="Enter food name"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Food Code</label>
                        <input name="food_code" type="text" className="form-control form-control-sm " placeholder="Enter food code"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Food Image</label>
                        <input name="foods_image" type="text" className="form-control  form-control-sm " placeholder="Enter food image"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Food Category</label>
                        <input name="food_category" type="text" className="form-control form-control-sm " placeholder="Enter food category"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">QTY</label>
                        <input name="qty" type="number" className="form-control form-control-sm " placeholder="Enter food qty"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Price</label>
                        <input name="price" type="number" className="form-control form-control-sm " placeholder="Enter food price"/>
                    </div>
                    <div className="col-md-2 mb-3">
                        <button disabled={submit} type="submit" className="btn btn-primary form-control mt-3">{ submit ? (<ButtonSpinner/>) :  ("Submit")}</button>
                    </div>
                </div>
                
              </form>
          </div>
      </div>
    );
}

export default CreateFood;