import React from 'react'

export default function Layout(props) {
    return (
        <div className="container-fluid">
            <div className="row border-bottom">
                <div className="col-md-2 brand-bg">
                    <div className='logo d-flex'>
                        <div className='d-flex logo-circle rounded-circle text-center'>
                            <span className='logo-icon'>G</span> 
                        </div>
                        <div className='logo-title w-100'>CRUD Food </div>
                    </div>
                </div>
                <div className="col-md-10"> </div>
            </div>
            <div className="row ">
                <div className="col-md-2 menu min-vh-100 ">
                    <h6 className='menu-title'>MENU</h6>

                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                        <li className="nav-item menu-item mt-2 w-100 ">
                            <a href="/create" className="nav-link  align-middle">
                                <i className="bi-cart-dash-fill"></i> 
                                <span className="ms-1 d-none d-sm-inline">Create Food</span>
                            </a>
                        </li>
                        <li className="nav-item menu-item mt-2 w-100  ">
                            <a href="/" className="nav-link active align-middle ">
                                <i className="bi-grid-fill"></i> 
                                <span className="ms-1 d-none d-sm-inline">All Foods</span>
                            </a>
                        </li>                  
                    </ul>

                </div>
                <div className="col-md-10 p-4 ">
                    {props.children}
                </div>
            </div>
            
        </div>
    )
}


// <div className="container-fluid">
//     <div className="row flex-nowrap">
//         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//             <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                 <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <span className="fs-5 d-none d-sm-inline">Menu</span>
//                 </a>
//                 <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link align-middle px-0">
//                             <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//                             <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//                         <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
//                             </li>
//                         </ul>
//                     </li>                    
//                 </ul>
                
//             </div>
//         </div>
//     </div>
// </div>