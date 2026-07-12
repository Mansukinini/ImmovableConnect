import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import './Dashboad.css';

/* ------------------------------------------------------------------ *
 * Date / greeting helpers
 * ------------------------------------------------------------------ */
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_MS = 24 * 60 * 60 * 1000;

function greetingFor(hour) {
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
}

function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// Whole years between the account/start date and today.
function yearsOfService(since) {
    if (!since) return null;
    const start = new Date(since);
    if (Number.isNaN(start.getTime())) return null;
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const beforeAnniversary =
        now.getMonth() < start.getMonth() ||
        (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
    if (beforeAnniversary) years -= 1;
    return Math.max(0, years);
}

function daysUntil(date) {
    return Math.round((startOfDay(date) - startOfDay(new Date())) / DAY_MS);
}

function formatDay(date) {
    return `${String(date.getDate()).padStart(2, '0')}-${MONTHS[date.getMonth()]}`;
}

/* ------------------------------------------------------------------ *
 * Derived / placeholder data
 * These read from the user first and fall back to sensible defaults so
 * the card stays populated until the backend exposes HR fields
 * (phone, employment status, leave balance, calendar events).
 * ------------------------------------------------------------------ */
function buildEvents() {
    const today = startOfDay(new Date());
    const at = (offset) =>
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
    return [
        { date: at(0), title: 'Lukhanyo on leave', type: 'leave' },
        { date: at(1), title: 'Ismail on leave', type: 'leave' },
        { date: at(4), title: 'Ismail on leave', type: 'leave' },
        { date: at(7), title: "Ismail's anniversary", type: 'anniversary', years: 1 },
    ];
}

const EVENT_ICON = {
    leave: 'far fa-calendar',
    anniversary: 'fas fa-user-friends',
};

function eventBadge(ev) {
    if (ev.type === 'anniversary') {
        return { kind: 'duration', text: `${ev.years} ${ev.years === 1 ? 'YEAR' : 'YEARS'}` };
    }
    const days = daysUntil(ev.date);
    if (days <= 0) return { kind: 'today', text: 'TODAY!' };
    return { kind: 'duration', text: `${days} ${days === 1 ? 'DAY' : 'DAYS'}` };
}

/* ------------------------------------------------------------------ *
 * Component
 * ------------------------------------------------------------------ */
function Dashboard({ user }) {
    if (!user) {
        return (
            <div className="dashboard-layout">
                <Sidebar />
                <main className="dashboard-main" />
            </div>
        );
    }

    const now = new Date();
    const firstName = user.name ? user.name.split(' ')[0] : 'there';
    const greeting = greetingFor(now.getHours());
    const weekday = WEEKDAYS[now.getDay()];

    const years = yearsOfService(user.date);
    const serviceLabel =
        years == null ? '—'
            : years === 0 ? 'Joined this year'
                : `${years} ${years === 1 ? 'year' : 'years'} of service`;

    const details = [
        { icon: 'far fa-envelope', text: user.email, href: user.email ? `mailto:${user.email}` : null },
        { icon: 'fas fa-phone-alt', text: user.phone || 'Add a phone number', muted: !user.phone },
        { icon: 'fas fa-user-tie', text: user.status || 'Permanent' },
        { icon: 'far fa-clock', text: serviceLabel },
    ];

    const leaveBalance = user.leaveBalance ?? 13;
    const actions = [
        { key: 'annual', label: `Apply for annual leave (Bal. ${leaveBalance})`, icon: 'far fa-calendar-check' },
        { key: 'sick', label: 'Log sick leave', icon: 'fas fa-notes-medical' },
        { key: 'password', label: 'Reset password', icon: 'fas fa-key' },
    ];

    const events = buildEvents();

    const handleAction = (key) => {
        // TODO: wire to backend (leave request, sick-leave log, password reset).
        // eslint-disable-next-line no-console
        console.log(`dashboard action: ${key}`);
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-main">
                <div className="dashboard-content">
                    <section className="dash-primary">
                        <header className="dash-greeting">
                            <h1>{greeting}, {firstName}</h1>
                            <p>Let&apos;s see what {weekday} has in store for us today</p>
                        </header>
                    </section>

                    <aside className="dash-aside">
                        {/* Profile card */}
                        <section className="dash-card profile-card" aria-label="Your profile">
                            <div className="profile-top">
                                {user.avatar ? (
                                    <img className="profile-avatar" src={user.avatar} alt={user.name} />
                                ) : (
                                    <i className="fas fa-user-circle profile-avatar-icon" aria-hidden="true" />
                                )}

                                <div className="profile-headside">
                                    <h2 className="profile-name">{user.name}</h2>
                                    <ul className="profile-details">
                                        {details.map((d) => (
                                            <li className="profile-detail" key={d.icon}>
                                                <span className={`profile-detail-text${d.muted ? ' muted' : ''}`}>
                                                    {d.href ? <a href={d.href}>{d.text}</a> : d.text}
                                                </span>
                                                <i className={d.icon} aria-hidden="true" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="profile-actions">
                                <p className="profile-actions-title">Actions:</p>
                                <ul>
                                    {actions.map((a) => (
                                        <li key={a.key}>
                                            <button
                                                type="button"
                                                className="profile-action"
                                                onClick={() => handleAction(a.key)}
                                            >
                                                <span>{a.label}</span>
                                                <i className={a.icon} aria-hidden="true" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Upcoming events card */}
                        <section className="dash-card events-card" aria-label="Upcoming events">
                            <header className="events-head">
                                <h2 className="events-title">
                                    <i className="far fa-calendar-alt" aria-hidden="true" />
                                    Upcoming Events
                                </h2>
                                <button type="button" className="events-open" aria-label="Open calendar">
                                    <i className="fas fa-external-link-alt" aria-hidden="true" />
                                </button>
                            </header>

                            <ul className="events-list">
                                {events.map((ev, i) => {
                                    const badge = eventBadge(ev);
                                    return (
                                        <li className="event-row" key={`${ev.title}-${i}`}>
                                            <span className="event-main">
                                                <i className={EVENT_ICON[ev.type]} aria-hidden="true" />
                                                <span className="event-text">
                                                    <span className="event-date">{formatDay(ev.date)}</span> {ev.title}
                                                </span>
                                            </span>
                                            <span className="event-meta">
                                                {badge.kind === 'today' ? (
                                                    <span className="event-badge today">{badge.text}</span>
                                                ) : (
                                                    <span className="event-days">{badge.text}</span>
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    </aside>
                </div>
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
