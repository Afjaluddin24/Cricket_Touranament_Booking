import * as Yup from 'yup'

export const ImgsnavigationSchemas = Yup.object({
    Imgs:Yup.string().required("Required"),
    Title:Yup.string().max(25).required("Required"),
    Description:Yup.string().required("Required")
});