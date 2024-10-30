
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    const navigation=useNavigation();
    const loacation=useLocation();
    console.log(loacation)
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading"? <p>Loading.....</p>:<Outlet></Outlet>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;