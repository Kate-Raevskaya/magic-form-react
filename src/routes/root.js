import {
    NavLink,
    Outlet
} from "react-router-dom";
import "../root.css";

export default function Root() {

    const linkClass = ({isActive, isPending}) =>
        isActive
            ? "active"
            : isPending
                ? "pending"
                : "";

    return (
        <>
            <div id='menu'>
                <nav>
                    <ul>
                        <li key='form'>
                            <NavLink to={''} className={linkClass}>
                                Form
                            </NavLink>
                        </li>
                        <li key='history'>
                            <NavLink to={'history'} className={linkClass}>
                                History
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}