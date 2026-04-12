import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../components/layout/Landing";
import Navbar from "../components/layout/Navbar";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Alert from "../components/layout/Alert";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import './App.css';

// Redux
import { Provider } from "react-redux";
import store from "../store";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    // useEffect(() =>{
    //     store.dispatch(loadUser());
    // }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>                
                    {/* <section> */}
                        <Alert/>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="register" element={<Register />} />
                            <Route path="login" element={<Login />} />                            
                        </Routes>
                    {/* </section>  */}
                </Fragment>
            </Router>
        </Provider>
    );   
}

export default App;
