import AppNavbar from './AppNavbar'

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

                    <AppNavbar/>

                </div>
                <div className="col-md-10 p-4 ">
                    {props.children}
                </div>
            </div>
            
        </div>
    )
}