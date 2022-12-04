import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import TextFaild from '../../components/TextFaild'
import { editUser } from './UserSlice';

function EditUser() {
    const params = useParams();
    const dispatch = useDispatch();
   
    const users = useSelector(store => store.users.filter(user => user.id == params.id))[0];
  
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: users.name,
        email:users.email
    });

    const handelAddUpdate = () => {
        console.log(values)
        dispatch(editUser({
            id:params.id,
            name: values.name,
            email:values.email
        }))
        navigate("/")
    }
  return (
      <div className="mt-10 max-w-xl mx-auto">

          <TextFaild
              label="UserName"
              inputProps={{ type: "text", placeholder: "said griouri" }}
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <br />

          <TextFaild
              label="Eamil"
              inputProps={{ type: "email", placeholder: "exemple@gmail.com" }}
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
          />

          <Button onClick={handelAddUpdate} >Update</Button>
      </div>
  )
}

export default EditUser