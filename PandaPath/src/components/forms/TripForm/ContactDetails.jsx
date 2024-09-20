import { useState } from "react"

const ContactDetails = () => {
  const [formData, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",


  })

  return (
    <>

      <form className="w-7/12 mx-auto mt-20 pt-10 pb-20 min-h-lvh bg-white shadow-md rounded-lg">
        <div className="mb-20 w-4/5 mx-auto px-10 border-2 pt-5 pb-5 rounded-xl ">
          <h3 className="text-4xl mb-10 font-medium text-center">How can we best reach you?</h3>

          <fieldset className="space-y-8 w-10/12 ml-auto mr-auto">

            {/* First Name and Last Name */}
            <div className="flex justify-between space-x-4">
              <label className="w-1/2">
                First Name<br />
                <input
                  type="text"
                  className="p-3 border-gray-500 border w-full rounded-md text-lg"
                />
              </label>
              <label className="w-1/2">
                Last Name<br />
                <input
                  type="text"
                  className="p-3 border-gray-500 border w-full rounded-md text-lg"
                />
              </label>
            </div>

            {/* Email */}
            <div className="flex">
              <label className="w-full">
                Email<br />
                <input
                  type="email"
                  className="p-3 border-gray-500 border w-full rounded-md text-lg"
                />
              </label>
            </div>

            {/* Country Code and Phone */}
            <div className="flex justify-between space-x-4">
              <label className="w-1/4">
                Country Code<br />
                <input
                  type="text"
                  className="p-3 border-gray-500 border w-full rounded-md text-lg"
                />
              </label>
              <label className="w-3/4">
                Phone<br />
                <input
                  type="text"
                  className="p-3  border border-gray-500 w-full rounded-md text-lg"
                />
              </label>
            </div>

            <div className="flex">
              <label htmlFor="additionalinfo" className="w-full">Additional information
                <textarea
                  id="additionalinfo"
                  name="additionalinfo"
                  className="border-gray-500 border w-full rounded-md  min-h-20 p-3 "
                />
              </label>

            </div>

          </fieldset>
        </div>
      </form>


    </>


  )

}
export default ContactDetails