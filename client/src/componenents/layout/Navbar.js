import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {
  const authContet = useContext(AuthContext)
  const contactContext = useContext(ContactContext)

  const { isAuthenticated, logoutUser, user } = authContet
  const { clearContacts } = contactContext

  const onLogout = () => {
    logoutUser()
    clearContacts()
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm' onClick={onLogout}>
            Logout
          </span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  )
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
}

export default Navbar
