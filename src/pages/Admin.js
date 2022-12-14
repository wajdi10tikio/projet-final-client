import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../components/RowDetails'
import { GetProfiles } from '../redux/actions/profileActions'

function Admin() {

  const profiles = useSelector(state => state.profiles)
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      dispatch(GetProfiles())
    }
    fetchData()
  }, []);




  return (

    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">

        <div className="col-lg-12 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-user fs-1 mx-2" style={{ color: "white" }}></i> <h2 style={{ color: "white" }}>Profiles list</h2>
          </div>
          <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">lastname</th>
                  <th scope="col">firstname</th>
                  <th scope="col">email</th>
                  <th scope="col">role</th>
                  <th scope="col">telephone</th>
                  <th scope="col">country</th>
                  <th scope="col">city</th>
                  <th scope="col">postalcode</th>
                  <th scope="col">skills</th>
                  <th scope="col">actions</th>
                </tr>
              </thead>
              <tbody>
                {/* map pour les profiles */}
                {
                  profiles.profiles.map(({ _id, user, tel, city, country, skills, postalcode }) => (
                    <RowDetails _id={_id} user={user} tel={tel} city={city} country={country} skills={skills} postalcode={postalcode} />
                  ))
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Admin
