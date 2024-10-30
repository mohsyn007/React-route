// state --> data
//  state--> loader
// useEffect
// fetch-->set state-->set s
import './Users.css'
import User from '../User/User';

import { useLoaderData } from "react-router-dom";
// import User from "./User/User";


const Users = () => {
    const users=useLoaderData()
    return (
        <div >
            <h2>Our Users: {users.length}</h2>
            <p>The fantastic users</p>
            <div className='users'>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)

                }
                
            </div>
        </div>
    );
};

export default Users;