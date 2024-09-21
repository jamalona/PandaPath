import { useState } from "react"

const ContactDetails = ({ addEvent }) => {
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    additionalInfo: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setData(values => (
      { ...values, [name]: value }
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addEvent(formData)
    setData({ firstName: "", lastName: "", email: "", countryCode: "", phoneNumber: "", additionalInfo: "", })
  }

  return (
    <>
      <div className="w-full bg-white">
        <form onSubmit={handleSubmit} className="w-7/12 mx-auto  mt-20 pt-10 pb-20 h-fit border shadow-xl  min-h-lvh   rounded-lg" >

          <div className="mb-20 w-4/5 mx-auto px-10 border-2 pt-5 pb-5 rounded-xl shadow-xl ">
            <h3 className="text-4xl mb-10 font-medium text-center">How can we best reach you?</h3>

            <fieldset className="space-y-8 w-10/12 ml-auto mr-auto">

              {/* First Name and Last Name */}
              <div className="flex justify-between space-x-4">
                <label className="w-1/2">
                  First Name<br />
                  <input
                    onChange={formData.firstName}
                    type="text"
                    className="p-3 border-gray-500 border w-full rounded-md text-lg"
                  />
                </label>
                <label className="w-1/2">
                  Last Name<br />
                  <input
                    name="lastName"
                    onChange={formData.lastName}
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
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="p-3 border-gray-500 border w-full rounded-md text-lg"
                  />
                </label>
              </div>

              {/* Country Code and Phone..note: just a substitute. remember to use dropdown list for phone codes.*/}
              <div className="flex justify-between space-x-4">
                <label className="w-1/4">
                  Country Code<br />
                  <input
                    name="countrycode"
                    onChange={formData.countryCode}
                    type="text"
                    className="p-3 border-gray-500 border w-full rounded-md text-lg"

                  />
                </label>
                <label className="w-3/4">
                  Phone<br />
                  <input
                    onChange={formData.phoneNumber}

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
                    onChange={formData.additionalInfo}
                    className="border-gray-500 border w-full rounded-md  min-h-20 p-3 "
                  />
                </label>

              </div>
            </fieldset>
          </div>
        </form>
      </div>


    </>


  )

}
export default ContactDetails