import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "../components/layout/Landing";
import Navbar from "../components/layout/Navbar";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Dashboard from "../components/dashboard/Dashboad";
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

function PrivateRoute({ children }) {
    const { isAuthenticated, loading } = store.getState().auth;
    if (loading) return null;
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppContent() {
    const location = useLocation();
    const hideOnPaths = ['/login', '/register', '/dashboard'];
    return (
        <Fragment>
            {!hideOnPaths.includes(location.pathname) && <Navbar />}
            <Alert />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
                    <PrivateRoute><Dashboard /></PrivateRoute>
                } />
            </Routes>
        </Fragment>
    );
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
