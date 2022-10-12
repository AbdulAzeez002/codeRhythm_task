import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import { toast } from 'react-toastify'


//Form schema
const formSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const submit=async(value)=>{
  const response=await axios.post('/api/formSubmit',value)
  console.log(response)
  if(response){
    toast("form submitted")
  }
}

function Contact() {
  //formik
  const formik = useFormik({
    
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values,{resetForm}) => {
      submit(values);
      resetForm({values:''})
    },
    validationSchema: formSchema,
  });

  return (
    <div className="mt-20  flex justify-center items-center">
      <div class="block p-6 border border-black rounded-lg shadow-lg bg-white max-w-md">
        <form className="w-80" onSubmit={formik.handleSubmit}>
          <p className="text-center text-3xl mb-4">Contact Form</p>

          <div class="form-group mb-2">
            <input
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="text-red-400 mb-2">
                      {formik.touched.name && formik.errors.name}
                    </div>

          <div class="form-group mb-2">
            <input
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              type="email"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="text-red-400 mb-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
          <div class="form-group mb-2">
            <textarea
            value={formik.values.message}
            onChange={formik.handleChange("message")}
            onBlur={formik.handleBlur("message")}
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="text-red-400 mb-6">
                      {formik.touched.message && formik.errors.message}
                    </div>

          <button
            type="submit"
            class="
      w-full
      px-6
      py-2.5
      bg-gray-800
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-600
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
