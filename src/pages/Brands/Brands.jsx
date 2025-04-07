"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import UwMallLogo from '../../assets/GoldenLogoForAllPages.png'
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
import Footer from "../../Components/Footer/Footer"
import brandimg1 from "../../assets/brand1.png"
import brandimg2 from "../../assets/brand2.png"
import brandimg3 from "../../assets/brand3.png"
import brandimg4 from "../../assets/brand4.png"
import brandimg5 from "../../assets/brand5.png"
import brandimg6 from "../../assets/brand6.png"
import brandimg7 from "../../assets/brand7.png"
import brandimg8 from "../../assets/brand8.png"
import brandimg9 from "../../assets/brand8.png"
import brandimg10 from "../../assets/brand10.png"
export default function Brands() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        business: "",
        address: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your form submission logic here
    }

    return (
        <div>
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto  ' }}>
            <AllPageHeader />

            <main className="min-h-screen max-w-[1400px]  mt-10">
                {/* Brands Section */}
                <section className="py-8 px-6 md:px-10 lg:px-10 ">
                    <div className="mb-6">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#b8d12a] mr-3"></div>
                            <h3 className="uppercase font-medium ml-4">Brands</h3>
                        </div>
                    </div>
                    <hr style={{ height: '2px', backgroundColor: 'black' }} />
                    <br />

                    <div className="grid grid-cols-1 md:grid-cols-4">
  {/* Row 1 */}
  <div className="border-2 md:border-t-0 md:border-l-0 border-b border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg1}
        alt="Malabar Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 md:border-t-0 border-b border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg2}
        alt="Tanishq"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 md:border-t-0 border-b border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg3}
        alt="Kavitha"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="border-2 md:border-t-0 border-b md:border-r-0 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg4}
        alt="Kalyan Jewellers"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b md:border-l-0 border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg5}
        alt="Joyalukkas"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b-1 border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg6}
        alt="Ziya"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="border-2 border-b md:border-b-3 border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg7}
        alt="Senco Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b md:border-b-3 md:border-r-0 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg8}
        alt="Shubham"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>



  <div className="border-2 border-b border-r md:border-l-0 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg9}
        alt="Senco Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 h-28 w-28"
      />
    </div>
  </div>
  <div className="border-2 md:border-b-0 border-r-3 border-black p-8 flex items-center justify-center"> 
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src={brandimg10}
        alt="Shubham"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
</div>


                </section>

                {/* Leasing Section */}
                    <section className="py-2 px-6 md:px-10 lg:px-12 mb-14 mt-22 max-w-[1400px] mx-auto">
                        <div className="mb-6">
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-[#ff3366] mr-3"></div>
                            <h3 className="uppercase font-medium ml-6">Leasing</h3>
                          </div>
                        </div>
                        <hr className="border-2 border-black mb-4 md:mb-2" />
                        <br />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="flex items-center">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase">
                              EXPLORE LEASING
                              <br />
                              OPPORTUNITIES WITH US
                            </h2>
                          </div>
              
                          <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                <input
                                  type="text"
                                  name="fullName"
                                  placeholder="Full Name*"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-[#000000] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                  required
                                />
                              </div>
              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email*"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-[#000000] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                  required
                                />
                                <input
                                  type="tel"
                                  name="contactNumber"
                                  placeholder="Contact Number*"
                                  value={formData.contactNumber}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-[#000000] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                  required
                                />
                              </div>
              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                  <select
                                    name="business"
                                    value={formData.business}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-[#000000] rounded-2xl appearance-none focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                    required
                                  >
                                    <option value="" disabled>
                                      Select Business*
                                    </option>
                                    <option value="retail">Retail</option>
                                    <option value="food">Food & Beverage</option>
                                    <option value="jewelry">Jewelry</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="other">Other</option>
                                  </select>
                                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                  </div>
                                </div>
              
                                <input
                                  type="text"
                                  name="address"
                                  placeholder="Address*"
                                  value={formData.address}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-[#000000] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                  required
                                />
                              </div>
              
                              <div>
                                <textarea
                                  name="message"
                                  placeholder="Message*"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows="4"
                                  className="w-full p-3 border border-[#000000] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
                                  required
                                ></textarea>
                              </div>
              
                              <div>
                                <button
                                  type="submit"
                                  className="bg-white text-[#ff3366] border border-[#ff3366] px-8 py-2 rounded-2xl hover:bg-[#ff3366] hover:text-white transition-colors"
                                >
                                  SUBMIT
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </section>
            </main>
<br />
<br />
            
        </div>
        {/* <div className="bg-black w-full max-w-[1400px] mx-auto pl-20"> */}

<Footer />
        {/* </div> */}
</div>
    )
}

