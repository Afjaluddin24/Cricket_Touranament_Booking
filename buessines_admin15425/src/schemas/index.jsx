import * as Yup  from 'Yup'

export const RegistrationSchema = Yup.object({
   Name:Yup.string().max(25).required("Require"),
   Email:Yup.string().email().required("Require"),
   PhoneNo: Yup.string()
             .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
             .required("Required"),
   Password: Yup.string().min(8, 'Password must 8 characters')
                      .matches(/[0-9]/, 'Password requires number')
                      .matches(/[a-z]/, 'Password requires lowercase')
                      .matches(/[A-Z]/, 'Password requires uppercase ')
                      .matches(/[^\w]/, 'Password requires symbol')
})

export const LoginSchema = Yup.object({
   Name:Yup.string().required("Require"),
   Password: Yup.string().min(8, 'Password must 8 characters')
                      .matches(/[0-9]/, 'Password requires number')
                      .matches(/[a-z]/, 'Password requires lowercase')
                      .matches(/[A-Z]/, 'Password requires uppercase ')
                      .matches(/[^\w]/, 'Password requires symbol')
})

export const ProfileSchema = Yup.object({
   Name:Yup.string().max(25).required("Require"),
   FullName:Yup.string().max(25).required("Require"),
   CubName:Yup.string().max(25).required("Require"),
   Logo:Yup.string().required("Require"),
   PhoneNo: Yup.string()
           .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
           .required("Required"),
   Address:Yup.string().max(50).required("Require"),
   City:Yup.string().required("Require"), 
   State:Yup.string().required("Require")
})

export const TeamsLimetSchema = Yup.object({
   BookingPerson:Yup.number(1).required("Require")
})

export const TournamentSchema = Yup.object({
   TournamentName:Yup.string().max(25).required("Require"),
   StarDate: Yup.string().max(25).required("Require"),
   Description:Yup.string().max(50).required("Require"),
   TournamentType:Yup.string().required("Require"),
   Amount:Yup.number().required("Require"),
   Logo:Yup.string().required("Require"),
   BookingLimetId:Yup.number().required("Require"),
})

export const MatchSedulSchema = Yup.object({
   TeamA: Yup.string().required("Required"),
   TeamB: Yup.string().required("Required"),
   MatchDate: Yup.string().required("Required"),
   Venue: Yup.string().required("Required"),
   Match_type: Yup.string().required("Required"),
   Note: Yup.string().required("Required"),
 })

 export const NewsSchema = Yup.object({
   Imgs: Yup.string().required("Required"),
   Title: Yup.string().max(50).required("Required"),
   Description: Yup.string().required("Required"),
 })