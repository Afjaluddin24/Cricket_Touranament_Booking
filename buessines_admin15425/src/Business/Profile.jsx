import React, { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useFormik } from "formik";
import { ProfileSchema } from "../schemas";
import { getData, postData } from "../APIConfig/ConfigAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { errorAlert, successAlert } from "../Message/SweetAlert";

const  Profile = (props)=> {
  const [Buttonvalue,setButtonvalue] = useState("Save");
  const [base64String, setBase64String] = useState(""); 
  const [initialValues,setinitialValues] = useState({
    Name:"",
    FullName:"",
    CubName:"",
    Logo:"",
    Email:"",
    PhoneNo:"",
    Location:"",
    Map:"",
    Address:"",
    City:"", 
    State:""
  })
  

  const GetDetalslist =async (Id) =>{
    try {
      const response = await getData("Admin/Getdetals/"+localStorage.getItem("UserId"));
      if(response.status == "Ok")
      {
         const data = response.result;
         console.log(data);
         setinitialValues({
            Name:data.name,
            FullName:data.fullName,
            CubName:data.cubName,
            Logo:data.logo,
            Email:data.email,
            PhoneNo:data.phoneNo,
            Location:data.location,
            Map:data.map,
            Address:data.address,
            City:data.city,
            State:data.state,
         })
      }
      else{
        console.log(response.result);
      }
    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(()=>{
    GetDetalslist();
  },[])
  const {values,errors,handleBlur,handleChange,handleSubmit,touched,setFieldValue}= useFormik({
    enableReinitialize:true,
    initialValues:initialValues,
    validationSchema:ProfileSchema,
    onSubmit:async(values)=>{
      const Savedata ={
        AdminMasterId:localStorage.getItem("UserId"),
        Name:values.Name,
        FullName:values.FullName,
        CubName:values.CubName,
        Logo:values.Logo,
        Email:values.Email,
        PhoneNo:values.PhoneNo.toString(),
        Location:values.Location,
        Map:values.Map,
        Address:values.Address,
        City:values.City, 
        State:values.State,
      }
      console.log(Savedata);
      setButtonvalue("Please Wait...");
      try {
        const response = await  postData("Admin/AdminUpdate",Savedata);
        if(response.status == "Ok")
        {
            successAlert("Save",response.result);
            setButtonvalue("Save");
        }
        else{
            errorAlert("Error",response.result);
            setButtonvalue("Save");
        }
      } catch (error) {
        console.log(error.message);
        setButtonvalue("Save");
      }
    }
  })

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1]; // Remove base64 prefix
        setBase64String(base64); // Set the base64 string to state
        setFieldValue("Logo", base64); // Set base64 to Formik field value
        console.log("Base64 String:", base64); // Log the base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  const hedealChange = (event, fieldName) => {
    setFieldValue(fieldName, event.target.value);
  };
  return (
    <>
      <div className="container-scroller">
        <HeaderNavigation />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{props.name}</h4>
                      <p className="card-description"></p>
                      <form onSubmit={handleSubmit} className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <span>User Name</span><span className="text-danger">&nbsp;*{errors.Name && touched.Name ?errors.Name :null }</span>
                            <input
                              type="text"
                              name="Name"
                              id="Name"
                              value={values.Name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <span>Full Name</span><span className="text-danger">&nbsp;*{errors.FullName && touched.FullName ?errors.FullName :null }</span>
                            <input
                              type="text"
                              name="FullName"
                              id="FullName"
                              value={values.FullName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <span>Club Name</span><span className="text-danger">&nbsp;*{errors.CubName && touched.CubName ?errors.CubName :null }</span>
                            <input
                              type="text"
                              name="CubName"
                              id="CubName"
                              value={values.CubName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mt-2">
                            <span>Club Logo</span><span className="text-danger">&nbsp;*{errors.Logo && touched.Logo ?errors.Logo :null }</span>
                            <input
                              type="file"
                              name="Logo"
                              id="Logo"
                              onBlur={handleBlur}
                              onChange={handleImageChange} 
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mt-2">
                            <span>Email</span><span className="text-danger">&nbsp;{errors.Email && touched.Email ?errors.Email :null }</span>
                            <input
                              type="email"
                              name="Email"
                              id="Email"
                              value={values.Email}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4 mt-2">
                            <span>PhoneNo</span><span className="text-danger">&nbsp;*{errors.PhoneNo && touched.PhoneNo ?errors.PhoneNo :null }</span>
                            <input
                              type="number"
                              name="PhoneNo"
                              id="PhoneNo"
                              value={values.PhoneNo}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mt-2">
                            <span>CricHeroes Club Name</span><span className="text-danger">&nbsp;{errors.Location && touched.Location ?errors.Location :null }</span>
                            <input
                              type="text"
                              name="Location"
                              id="Location"
                              value={values.Location}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mt-2">
                            <span>Map Adress URL</span><span className="text-danger">&nbsp;{errors.Map && touched.Map ?errors.Map :null }</span>
                            <input
                              type="text"
                              name="Map"
                              id="Map"
                              value={values.Map}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-12 mt-2">
                            <span>Adress</span><span className="text-danger">&nbsp;*{errors.Address && touched.Address ?errors.Address :null }</span>
                            <textarea
                              type="text"
                              name="Address"
                              id="Address"
                              value={values.Address}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="col-md-6 mt-2">
                            <span>City</span><span className="text-danger">&nbsp;*{errors.City && touched.City ?errors.City :null }</span>
                            <select
                              name="City"
                              id="City"
                              onBlur={handleBlur}
                              onChange={(e) => hedealChange(e, "City")}
                              className="form-select"
                            >
                              <option value="">Select City</option>
                              <option value="Ahmedabad">Ahmedabad</option>
                              <option value="Bharuch">Bharuch</option>
                              <option value="Surat">Surat</option>
                              <option value="Vadodara">Vadodara</option>
                              <option value="Rajkot">Rajkot</option>
                              <option value="Bhavnagar">Bhavnagar</option>
                              <option value="Jamnagar">Jamnagar</option>
                            </select>
                          </div>

                          {/* State Select - India States */}
                          <div className="col-md-6 mt-2">
                            <span>State</span><span className="text-danger">&nbsp;*{errors.State && touched.State ?errors.State :null }</span>
                            <select
                              name="State"
                              id="State"
                              onBlur={handleBlur}
                              onChange={(e) => hedealChange(e,"State")}
                              className="form-select"
                            >
                              <option value="">Select State</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Punjab">Punjab</option>
                              <option value="Karnataka">Karnataka</option>
                            </select>
                          </div>
                          <div className="col-md-12 mt-3">
                             <button type="submit" disabled={Buttonvalue !== "Save"} className="btn btn-success">{Buttonvalue !== "Save" ?<b><FontAwesomeIcon style={{fontSize:"20px"}} icon={faSpinner} spin/>&nbsp;lease Wait...</b>:"Save"}</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
