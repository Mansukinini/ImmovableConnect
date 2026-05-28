import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Dashboard({ user }) {
    return (
        <section className="container" style={{ paddingTop: '2rem' }}>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome{user ? `, ${user.name}` : ''}
            </p>
            <div style={{ marginTop: '2rem' }}>
                <p>You are signed in to Immovable Connect.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to Home
                </Link>
            </div>
        </section>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
