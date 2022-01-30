import React, { useReducer, useEffect } from 'react'
import { initialState } from '../Reducer/initialState'
import { Reducer } from '../Reducer/Reducer'

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
      <a className="navbar-brand" href="/#">
        Keyfimin Şirketi
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/#">
              Anasayfa <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/#">
              Sepet{' '}
              <span className="badge">{state.totalCount.toFixed(2)} $</span>
            </a>
          </li>
        </ul>
        <div className="d-flex ">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                <i className="fa fa-shopping-cart"></i>
                &nbsp;
                <span className="badge badge-light">{state.total}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
