import * as Yup from 'yup'

export const LoginSchemas = Yup.object({
    Name:Yup.string().required("Required"),
    Password:Yup.string().required("Required"),
})

export const ImgsnavigationSchemas = Yup.object({
    Imgs:Yup.string().required("Required"),
    Title:Yup.string().max(50).required("Required"),
    Description:Yup.string().required("Required")
});