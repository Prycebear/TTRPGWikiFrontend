import {
    Link,
    Outlet
} from "react-router-dom";





const Header = () => {

    return (
        <>
            <div>
                <Link to="/">
                    <button>App</button>
                </Link>
                <Link to="/home">
                    <button>Home</button>
                </Link>
                <br/>
                <br/>
                <br/>
                <Outlet/>
            </div>
        </>
    )
};
export default Header;