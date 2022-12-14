import React from 'react';
import { useDispatch } from 'react-redux'
import { DeleteProfile } from '../redux/actions/profileActions';


function RowDetails({ _id, user, tel, city, country, skills, postalcode }) {
  const dispatch = useDispatch()
  const DeleteHandler = (id) => {
    dispatch(DeleteProfile(id))
  }
  return (
    <tr>
      <th >{user.name}</th>
      <td >{user.email}</td>
      <td >{user.role}</td>
      <td >{tel}</td>
      <td >{country}</td>
      <td >{city}</td>
      <td >{postalcode}</td>
      <td >{skills}</td>
      <button class="btn btn-outline-danger" onClick={() => DeleteHandler(_id)}>Delete</button>
    </tr>
  )
}

export default RowDetails
