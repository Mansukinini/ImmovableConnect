import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import './Dashboad.css';

function Dashboard({ user }) {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-main">
                <h1 className="large text-primary">Dashboard</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Welcome{user ? `, ${user.name}` : ''}
                </p>
                <p>You are signed in to Immovable Connect.</p>
            </main>
        </div>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
