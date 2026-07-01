import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
    { key: 'home', label: 'Home', icon: 'fas fa-home' },
    { key: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { key: 'orders', label: 'Orders', icon: 'fas fa-table' },
    { key: 'products', label: 'Products', icon: 'fas fa-th-large' },
    { key: 'customers', label: 'Customers', icon: 'fas fa-user-circle' },
];

function Sidebar({ user }) {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState('home');

    // Only render for a logged-in user (the dashboard route is already
    // gated by PrivateRoute, this keeps the profile area from rendering empty).
    if (!user) return null;

    return (
        <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
            <div className="sidebar-header">
                <Link to="/" className="sidebar-brand">
                    <img
                        className="sidebar-brand-logo"
                        src="../../../../../public/images/icon.png"
                        alt="Immovable Connect"
                    />
                    <span className="sidebar-brand-title">Immovable Connect</span>
                </Link>
                <button
                    type="button"
                    className="sidebar-toggle"
                    onClick={() => setCollapsed((c) => !c)}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    aria-expanded={!collapsed}
                >
                    <i className="fas fa-bars" />
                </button>
            </div>

            <hr className="sidebar-divider" />

            <ul className="sidebar-nav">
                {navItems.map((item) => (
                    <li key={item.key}>
                        <button
                            type="button"
                            className={`sidebar-nav-link${active === item.key ? ' active' : ''}`}
                            onClick={() => setActive(item.key)}
                            title={item.label}
                        >
                            <i className={item.icon} />
                            <span className="sidebar-nav-label">{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <hr className="sidebar-divider" />

            <div className="sidebar-profile" title={user.name}>
                {user.avatar ? (
                    <img className="sidebar-profile-avatar" src={user.avatar} alt={user.name} />
                ) : (
                    <i className="fas fa-user-circle sidebar-profile-icon" />
                )}
                <div className="sidebar-profile-info">
                    <span className="sidebar-profile-name">{user.name}</span>
                    <span className="sidebar-profile-email">{user.email}</span>
                </div>
                <i className="fas fa-chevron-down" />
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Sidebar);
