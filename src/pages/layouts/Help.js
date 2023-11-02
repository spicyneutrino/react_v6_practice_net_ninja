import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Help() {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>Duis cillum ea occaecat eu. Non incididunt pariatur ea et. Quis minim voluptate ipsum qui sunt sit magna culpa officia adipisicing.</p>
            <nav>
                <NavLink to="faq">Visit FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />

        </div>
    )
}
