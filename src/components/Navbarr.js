import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../redux/actions/authActions'
import logo from '../images/logo.png'


function Navbarr({ user }) {
  const dispatch = useDispatch()
  const LogoutHandler = () => {
    dispatch(Logout())
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-style">
      <div className="container-fluid ">
        <div class="navbar-brand"  > <Link to="/movie">
          <img className="logo" src="logo.png" alt="dfs" />
        </Link> </div>


        <Link className="navbar-brand text-light" to="/movie">HOME</Link>
        <Link className="navbar-brand text-light" to="/">USER Profile</Link>


        {/* <Link className="navbar-brand text-light" to="/home">Home</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {
              user.role === "ADMIN" ? (
                <li className="nav-item">
                  <Link className="nav-link active navbar-brand text-light mt-1" aria-current="page" to="/admin" style={{ color: "white" }} > Admin </Link>
                </li>
              ) : ""
            }
          </ul>
          <div className="d-flex">
            <div className="mx-4 ">
              {
                !user.isConnected ? (
                  <>



                    <Link
                      className="btn btn-outline-light" to="/login">Login
                    </Link>

                    <Link
                      className="btn btn-outline-light" to="/register">Register
                    </Link>
                  </>
                ) : (

                  <Link
                    className="btn btn-outline-light" to="#" onClick={LogoutHandler}>Logout
                  </Link>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbarr
