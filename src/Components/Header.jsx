import React from 'react'

import { Link } from 'react-router-dom'

const Header = ({ state }) => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary ml-0 mr-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/#">
        Keyfimin Şirketi
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/#">
              Anasayfa <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/cart" className="nav-link">
              Sepet Toplamı{' '}
              <span className="badge badge-secondary">
                {state.totalCount.toFixed(2)} $
              </span>
            </Link>
          </li>
        </ul>
        <div className="d-flex ">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fa fa-shopping-cart"></i>
                &nbsp;
                <span className="badge badge-light">{state.total}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
