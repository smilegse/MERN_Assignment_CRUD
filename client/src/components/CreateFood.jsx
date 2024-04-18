const CreateFood = () => {

    return (
            <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h6>Create Food Item</h6>
              </div>
              <form  >
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <label  className="form-label">Food Name</label>
                        <input type="text" className="form-control form-control-sm " placeholder="Enter food name"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label  className="form-label">Food Code</label>
                        <input type="email" className="form-control form-control-sm " placeholder="Enter food code"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label  className="form-label">Food Image</label>
                        <input type="email" className="form-control  form-control-sm " placeholder="Enter food image"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <label  className="form-label">Food Category</label>
                        <input type="text" className="form-control form-control-sm " placeholder="Enter food category"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">QTY</label>
                        <input type="email" className="form-control form-control-sm " placeholder="Enter food qty"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label  className="form-label">Price</label>
                        <input type="email" className="form-control form-control-sm " placeholder="Enter food price"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
              </form>
          </div>
      </div>
    );
}

export default CreateFood;