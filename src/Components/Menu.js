import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Body</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Footer">Footer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Header">Header</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/LaftBar">LaftBar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">React-Bootstrap Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">Custom Html Register</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default  Menu
