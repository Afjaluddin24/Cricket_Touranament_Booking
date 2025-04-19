import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { useFormik } from "formik";
import { TeamsLimetSchema } from "../../schemas";
import { getData, postData } from "../../APIConfig/ConfigAPI";
import { errorAlert, successAlert, warningAlert } from "../../Message/SweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function TeamsLimet(props) {
  const [Buttonvalue, setButtonvalue] = useState("Save");
  const [initialValues,setinitialValues] = useState({
    BookingPerson:""
  }) 
  const {values,errors,handleBlur,handleChange,handleSubmit,touched,resetForm} = useFormik({
    enableReinitialize:true,
    initialValues:initialValues,
    validationSchema:TeamsLimetSchema,
    onSubmit:async(values)=>{
        const Savedata ={
          AdminMasterId:localStorage.getItem("UserId"),
          BookingPerson:values.BookingPerson,
          BookingLimetId:BookingLimetId
        }
        setButtonvalue("Please Wait...")
        try { 
            var response = await postData(
                BookingLimetId === 0
                  ? "BookingLime/AddBookingLime"
                  : "BookingLime/UpdateBookingLime",
                Savedata
              );
            if(response.status == "Ok")
            {
               successAlert("Success",response.result);
               resetForm();
               getDisplay();
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

  const Clearfore = () => {
    setBookingLimetId(0);
    setinitialValues({ BookingPerson: "" });
    resetForm();
  };

  const [listTeamsBookin,setlistTeamsBookin] = useState([]);
  const getDisplay = async ()=>{
    try {
        const response = await getData("BookingLime/getBookingLime/"+ localStorage.getItem("UserId"));
        setlistTeamsBookin(response.result);
    } catch (error) {
        console.log(error.message);
    }
  }

  const Delete = async (Id) => {
    const confirm = await warningAlert("Warning", "are you went to delete");
    if (confirm) {
      try {
        const response = await getData("BookingLime/DeleteBookingLime/" + Id);
        if (response.status == "Ok") {
          successAlert("Delete", response.result);
          getDisplay();
        } else {
          errorAlert("Error", response.result);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const iconDelete = (data) => {
    return <FontAwesomeIcon onClick={() => Delete(data.bookingLimetId)} style={{color:"red",fontSize:"20px"}} icon={faTrash} />
  };

  const [BookingLimetId, setBookingLimetId] = useState(0);
  const ListBookig = async (Id) => {
    try {
      const response = await getData("BookingLime/ListBookingLime/" + Id);
      if (response.status == "Ok") {
        const data = response.result;
        setinitialValues({
          BookingPerson: data.bookingPerson,
        });
        setBookingLimetId(data.bookingLimetId);
      } else {
        errorAlert("Error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const iconUpdate = (data) => {
    return <FontAwesomeIcon onClick={() => ListBookig(data.bookingLimetId)} style={{color:"blue",fontSize:"20px"}} icon={faEdit} />
  };

  useEffect(()=>{
    getDisplay()
  },[])
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
                          <div className="col-md-12">
                            <span>Play Teams</span>
                            <span className="text-danger">&nbsp;*{errors.BookingPerson && touched.BookingPerson ?errors.BookingPerson :null }</span>
                            <input
                              type="number"
                              name="BookingPerson"
                                id="BookingPerson"
                                value={values.BookingPerson}
                                onBlur={handleBlur}
                                onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-12 mt-3">
                            <button
                              type="submit"
                              disabled={Buttonvalue !== "Save"}
                              className="btn btn-success"
                            >
                              {Buttonvalue !== "Save" ? (
                                <b>
                                  <FontAwesomeIcon
                                    style={{ fontSize: "20px" }}
                                    icon={faSpinner}
                                    spin
                                  />
                                  &nbsp;Please Wait...
                                </b>
                              ) : (
                                "Save"
                              )}
                            </button>&nbsp;&nbsp;
                            <button type="button" onClick={()=> Clearfore()} className="btn btn-danger">Clear</button>
                          </div>
                        </div>
                      </form>
                      <div className="col-md-12 mt-3">
                      <DataTable value={listTeamsBookin} stripedRows tableStyle={{ minWidth: '50rem' }}>
                        <Column field="bookingPerson" header="Play Teams"></Column>
                        <Column body={iconDelete} header="Actions" style={{ width: '100px', textAlign: 'center' }} />
                        <Column body={iconUpdate} header="Actions" style={{ width: '100px', textAlign: 'center' }} />
                      </DataTable>
                      </div>
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
export default TeamsLimet;
