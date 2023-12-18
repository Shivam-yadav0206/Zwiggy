import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: 'John',
        email: 'Jphn@gmail.com',
    }
});

export default UserContext;



/*


const [user,setUser] = useState({
    name: 'Johnupdated',
    email: 'Jphnupdated@gmail.com',
})



<UserContext.Provider
    value={{
        user: {
            name: 'Johnupdated',
            email: 'Jphnupdated@gmail.com',
        }
    }}
    value={{
        user: user
    }}
    <Header/>
    <Outlet />
    <Footer />
</UserContext.Provider>

*/

//when we click the add button it dispatches an action that calls a reducer function which updates the slice of our redux store slice
//to get that data we need to use a selector function (which will know the updating slice)
//Cart component is subscribed to cart slice of redux store