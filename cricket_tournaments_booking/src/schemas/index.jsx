import * as Yup from 'yup'

export const RegistrationSchemas =  Yup.object({
  Name:Yup.string().max(25).required("Require"),
  Email:Yup.string().email().required("Require"),
  PhoneNo: Yup.string()
          .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
          .required("Required"),
  Password: Yup.string().min(8, 'Password must 8 characters')
                   .matches(/[0-9]/, 'Password requires number')
                   .matches(/[a-z]/, 'Password requires lowercase')
                   .matches(/[A-Z]/, 'Password requires uppercase ')
                   .matches(/[^\w]/, 'Password requires symbol'),
  CPassword:Yup.string().oneOf([Yup.ref('Password'), null], 'Must match "password"'),
})

export const LoginSchemas =  Yup.object({
  Name:Yup.string().max(25).required("Require"),
  Password: Yup.string().min(8, 'Password must 8 characters')
                   .matches(/[0-9]/, 'Password requires number')
                   .matches(/[a-z]/, 'Password requires lowercase')
                   .matches(/[A-Z]/, 'Password requires uppercase ')
                   .matches(/[^\w]/, 'Password requires symbol')
                   .required("Require")
})


export const TemesLimetSchemas =  Yup.object({
  BookingPerson:Yup.number().required("Require"),
})

export const TournamentSchemas = Yup.object({
  TournamentName:Yup.string().max(25).required("Require"),
  StarDate:Yup.date().required("Require"),
  Description:Yup.string().max(50).required("Require"),
  TournamentType:Yup.string().min(1).required("Require"),
  Amount:Yup.number().required("Require"),
  Logo :Yup.string().required("Require"),
  BookingLimetId:Yup.number().required("Require")
})

export const BookingSchemas = Yup.object({
  Logo:Yup.string().required("Require"),
  TeamsName:Yup.string().max(25).required("Require"),
  CricHeroesUrl:Yup.string().required("Require"),
  CaptainName :Yup.string().max(25).required("Require") ,
  VCaptainName :Yup.string().max(25).required("Require"),
  ContactNo:Yup.string()
               .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
               .required("Required"), 
  VContactNo:Yup.string()
               .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
               .required("Required"),
  Email:Yup.string().email()
})