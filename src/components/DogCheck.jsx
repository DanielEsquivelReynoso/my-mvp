// 1. Manage form state
// 2. Handling form submission
// 3. Validation and Error Messages

import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function DogCheck () {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      dogName: '',
    },
    onSubmit: values => {
      console.log('Form data: ', values)
    }
  })

  // console.log('Form Values: ', formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='dogName'>Dog Name</label>
        <input type="text" id="dogName" name="dogName" onChange={formik.handleChange} value={formik.values.dogName}></input>
        <button type='submit' onClick={() => { navigate('/dogHealthData') }}>Look for Dog Data</button>
      </form>
    </div>
  )
}

export default DogCheck;