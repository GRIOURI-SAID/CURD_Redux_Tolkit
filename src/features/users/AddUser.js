import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TextFaild from '../../components/TextFaild'
import { addUser } from './UserSlice';

function AddUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email :""
  });

  const handelAddUser = () => {
    setValues({ name: '', email: '' });
    

    dispatch(addUser({
      id: 3,
      name: values.name,
      email: values.email
    }));
    navigate("/")
 }
  return (
    <div  className="mt-10 max-w-xl mx-auto">

      <TextFaild
        label="UserName"
        inputProps={{ type: "text", placeholder: "said griouri" }}
        value={values.name}
        onChange={(e) =>setValues({...values , name:e.target.value})}
      />
      <br />

      <TextFaild
        label="Eamil"
        inputProps={{ type: "email", placeholder: "exemple@gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
     
      <Button onClick={handelAddUser} >Save</Button>
    </div>
  )
}

export default AddUser