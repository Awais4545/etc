import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivateRounting from './PrivateRounting';
import NavBar from '../navBar/NavBar';
import AddProduct from '../pages/addProduct/AddProduct';
import ShowProduct from '../pages/showProduct/ShowProduct';
import ShowOrder from '../pages/showOrder/ShowOrder';
import LogOut from '../auth/logOut/LogOut';
import Login from '../auth/login/Login';
import SignUp from '../auth/signUp/SignUp';
function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>
                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={
                            <AddProduct />

                        }
                    />


                    <Route
                        path="/ShowProduct"
                        element={
                            <ShowProduct />

                        }
                    />
                        <Route
                        path="/ShowOrder"
                        element={
                            <ShowOrder />

                        }
                    />
                
            
                    <Route
                        path="/LogOut"
                        element={
                            <LogOut />

                        }
                    />
                
               
                </Route>


                <Route path="/login" element={<Login />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting