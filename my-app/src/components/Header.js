export const Header = () => {
    return (
        <div>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Healthy Cook</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="menu.html" className="nav-item nav-link">Menu</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                            <a href="#" className="nav-item nav-link">Sign up</a>
                        </div>
                        <a href className="btn btn-primary py-2 px-4">Order meal</a>
                    </div>
                </nav>
            </div>
            <div className="container-fluid py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Start Your<br />Healthy Lifestyle</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Start your journey to a healthier lifestyle with our fresh and healthy menus, with top quality products and easy to make meals!</p>
                            <a href className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Order meal</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src='/assets/img/main-dish.png' alt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}