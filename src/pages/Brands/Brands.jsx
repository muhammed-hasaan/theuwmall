"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import UwMallLogo from '../../assets/GoldenLogoForAllPages.png'
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
import Footer from "../../Components/Footer/Footer"
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
        src="https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iVM0tulOMlu44-rLaWvIiDhtgpPVjtp5udy8bmpyFIM59DWwpUMGV5v~YS8CrQPulWU321z~pcKLxs6u2zWg2wttbdLlQgl96U721e4X7OlPvy4IEr7jn-p~KJ9gpxBlTobeGUallPLLcywuQCLbSCGodC0E7coSH20CxYXt1COMj7VQXA068hJSa4WDXnLVGvhKtE-yiZR55bJlLpGA36GsY-Mup6zAmwywFZx8zcapxSrVEQReDQKYBj~xsNWpGLGR30kajl-aQRj6AhVZ-eVhF1yyoZdm2UwiL~MfmCdSaEB7h4wy7G4nFuCDiEgWBpRER6JNLRsvOiDELRgBTg__"
        alt="Malabar Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 md:border-t-0 border-b border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Knm80NksHV04sDWonAjYsR32AjLDxpx~iDyndO5MaWxHH6dVycyqqt9YP8GQRCmnuK2tk2WxwfTJNBEjITMfNBXla05Lqagn8ly7F-QixZNIB1Tn~YcfCvawX8VMKJ74hEWrjgv8QGCE4Gjok6UwIBZ1nKF1ufJ4Opt-U4-J7u~ejvndnOM5vY9HUszsP~1dm~SpHZKByrh-XiocQ2dwYBg1oAEu8tte9k~Gs3eSOzlSkE4EQxRzw6XKw4cHAIaOG6o1~KD7pCBI3ZbVCijN30b27uf-KseBnfWeuE5fe9ooqCN1xmPszJIbIkbNT-8AleG2aWysRzMY0~2kx9HMBw__"
        alt="Tanishq"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 md:border-t-0 border-b border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bdSykeL54UNLH7eqVb72g8I4gSaEfQwcqkv5WshXZ277i1s118~t-kAtVyN3CFPSetWp9hTD-RTHsh5XEk9b653ZNZoy8Ic-OjM2eeILNQDQdAymg5FdR1Z-p7SAhVwvqOkzmvWt~7YXWjrTv447VMr68~vUOgpox~kX4noNimZsGLDKPBXwMoZTyJiDhQ1VQqLLgUwQ5MPi-j5juhQCbfp4-wEBNHj0kcIYqIt-u2cjbfFlNUAvVMD-U2SbBWjPL8R1gmzwNP2cwcJ~69bxU~Synpg4O0bOs3A1dzh~ufF1rXeI-s5tMG5x8l04D5vNgKkcqp9A0bHF~rOb62OLeQ__"
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
        src="https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4woZ3qwwaGVR1nDtWI19MTIXLB8q~FPop8rFPZDqRrJTLnUujBaOxFiovF6MIjMYNOB~SvTGov-KjNGmzfmi1Kf9414d4MGKUCLvgNqmV1UZeVn5E9~2XMZ486YxsblypAiq87~RJ1MLc87m-nVW98SoPup5cPTf5yGrLm8GRMnwx6-BiczL5kIqeU3-ZXrJGx6rL0GFUVjGiaBvPSXvsm9Ts22F1z9GgOI6RiRtSD~XmJRlKrDIdZeCZRZcmqDH2eAQePAjDO64gkTxfErXB3GxRUMIifR7NOaJWpC-zh-dpYBNUeQDdTnydm3cEAG-HDTuMCYsR3Fdo3nS4bwZw__"
        alt="Kalyan Jewellers"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b md:border-l-0 border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/d494/f10e/52645103c1b65317768045fb522c90c2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MzNTZxnNIRffyePR9qfSgcn1KaUGoXVYQA2P0HO6XkB5b~LexROVN~vMArSI1B43jQVmW3WM8DtuQ60z61f5vUGsVmkgxV5WJIQLxk0OSp5sgTvrz-NVXwBcuOAKEyER7iyKWy1j9OhZZfYFsHkRVmc1OQbcMWNCiiEsfvjct~Ab58sGjp9GrrK2fPLNV~Z2J5Liuk-6LQ4z-gmO9PDbFziV~YA-05cro36N3nwrqDVH2XB8ADkfaHDNS9~2IIrle4T95beYwNgk-6DI-ScHZfdOuR5rW~mv1UryX~ynOgeI1dQLj3yDPkHai4Ea-y1a35GhYw7XS~aOCaSZh~KqgA__"
        alt="Joyalukkas"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b-1 border-r border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/b532/0ee2/695ff7731938732dd31aab6fde3846bb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRKDjAxy0Wq5gSGpCbf1pMBXP17QS9K6Mr05nlNzwX1BdFW09TDOiAOjk9LC0Uyd0nbKOHktbMMIS~MemCPpaPFmNJVq7Btlz~blqMfc-t~Hwjtk0CgA00Fy0Uu~v5pc8AKxxRiOrxg7L3qq-ESUu652GT0rHklcSUKK9ZkpGDuxjPbntJDjBiwJUU9CM9p0UK0BIrf~tPuotmDmYF3PVEJ1qNlVS4oVKN-EKaN4d5DArUfo~0Y1zSdsFW1C7LHD4J30X0oRqolJcSYw7~38PLbs7-zBeyJNaS~9zIflm6tgX1edPRHGEevURQosW9zllI3NVPYaKtb2WPiFNMDlog__"
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
        src="https://s3-alpha-sig.figma.com/img/6526/761d/e7efc06ef7fd62923a46beb644e285a7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IV75bNRJUmjPQQk51W6tov1QMbfJTrgwrCgGQxG1-dZB1P2F8Pu9a1YguXNT4v4XQ8tudvzohOyxzEUxzRtROgrFAahQpG43cw6gtMRg2ViBcG3vFpYRAYTcbg94G78KzbWVpZ9CxvJZ2f5CtES7Ot1FV9Y-o6qu1TLy6E1dpNmbFKMk-pHYj2j7NH8f5XdxxeTzJ~eP-8v~E6ag0qtsXSejuhB9GlX3AXPD82VJf0-dtth85vxtv-s5yJVkOnhsDurPhmeAIz0wpYss5LZeLxq~drxNK1TwJIXxjXHrp7GQY2gS9Nth4tB03GuZyZmnzO8tw7xkBOWG3eHnRKdNKA__"
        alt="Senco Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  <div className="border-2 border-b md:border-b-3 md:border-r-0 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/faa8/5a58/6c3d696cb20e38b4bdbdafeab1d2dc9c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EAMswF1BiO6NlbArRMht57~xPJkqwxMUnXlTLRHwevgTopVh9NH09t2wg6GzJFvJ~kqgKTQTR-tM8g83GixdBll~tK3pZ8kwhEFIXsr99XJF7AvzuNbegFvQMfIrQDI55UrvclgYXgnBGoA6Yt7auTSEc0Lyh~JF3IYp6rcvVQm5yyuNOqemV0Ss7zyqT6zH~Zer~POeJddV-iWw5O2JmUBBgamTv~BAewNUtQcFUs5NhSfznPADOGKFr~irm76r-nZee~dr95qRdrdBf13aRI6VdF8Ve0BJdjDAxhdqnIcNC1OTgIX41n1lhtsZagtFJXKxxp3u231CQfygxGwf6Q__"
        alt="Shubham"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>



  <div className="border-2 border-b border-r md:border-l-0 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/6b45/20dc/575cd5bac3e8a42c15474358f7a159b1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QHIDlM~nN7yvAaG5SP91mfNoVnbsOvxdhz8V4BABKJ3QCLFL0UljrZFfyqDXs5qEyKrzjJqozmyGYmcdaPMyttJnJ~x0Ku6mKVikTNujPINeI35lMvQJZVNHohvxEP8fa9K1tBpkHTatpDi-YRmVt~VjS0fCUEerUbU2-X7YkmDPLZZTFo~lc3nl1ExmzFu-~vBkEqRNrekGBqiERYTob6Fgg~Lg0t4vS1-F-2RDMca-fdES4inny41tQ-0ucQktsnQJUma02AXf93I7rDttlaMH7u5sAdKFjGmFus6QTJcm2rApHdQ7hQPYYX1MBClwEvl6gcyohBz6jqpfTNFQXg__"
        alt="Senco Gold & Diamonds"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 h-28 w-28"
      />
    </div>
  </div>
  <div className="border-2 md:border-b-0 border-r-3 border-black p-8 flex items-center justify-center"> 
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/6b1e/fb52/6e98accdb4c47f5f2e93eab6e560e644?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HXGrnorAUvtMrxjaaF75ZkeDYbK2RdOipTULD~g0Ujd7d-s3iQbAa2hR8fVI-Zdh-lFZ4VRM1dGK7ELobcLYs4cGiE5lpac5KKILbJa7fYKgGF74b1NPsfgjR-4aRvPKJ3AYdbWptrD5utt7Nq7B~NznZ6-a4kTd3NEXnvyqIsIUM0lcOanfWXQpT1dQ6la64~4wVgUxnuHS2odjSwika5ZDb~IxvovE7qsaquCWE2M1XM2SKddskesDIybx1JwRZJiEonJKVeIasM0VASNsYQnhOdP7pyRaZrWJESfFMHknwvA9j~H~elygrqDCTpL6BlG4N2y9YiNRuY~IohoqbQ__"
        alt="Shubham"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
  {/* <div className="border-2 md:border-l-0 border-b-3 border-r-3 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/6b45/20dc/575cd5bac3e8a42c15474358f7a159b1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QHIDlM~nN7yvAaG5SP91mfNoVnbsOvxdhz8V4BABKJ3QCLFL0UljrZFfyqDXs5qEyKrzjJqozmyGYmcdaPMyttJnJ~x0Ku6mKVikTNujPINeI35lMvQJZVNHohvxEP8fa9K1tBpkHTatpDi-YRmVt~VjS0fCUEerUbU2-X7YkmDPLZZTFo~lc3nl1ExmzFu-~vBkEqRNrekGBqiERYTob6Fgg~Lg0t4vS1-F-2RDMca-fdES4inny41tQ-0ucQktsnQJUma02AXf93I7rDttlaMH7u5sAdKFjGmFus6QTJcm2rApHdQ7hQPYYX1MBClwEvl6gcyohBz6jqpfTNFQXg__"
        alt="PC Jewellers"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 h-32 w-32"
      />
    </div>
  </div>
  <div className="border-2 md:border-l-0 border-b-3 border-r-3 border-black p-8 flex items-center justify-center">
    <div className="relative h-40 w-40 group flex justify-center items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/6b1e/fb52/6e98accdb4c47f5f2e93eab6e560e644?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HXGrnorAUvtMrxjaaF75ZkeDYbK2RdOipTULD~g0Ujd7d-s3iQbAa2hR8fVI-Zdh-lFZ4VRM1dGK7ELobcLYs4cGiE5lpac5KKILbJa7fYKgGF74b1NPsfgjR-4aRvPKJ3AYdbWptrD5utt7Nq7B~NznZ6-a4kTd3NEXnvyqIsIUM0lcOanfWXQpT1dQ6la64~4wVgUxnuHS2odjSwika5ZDb~IxvovE7qsaquCWE2M1XM2SKddskesDIybx1JwRZJiEonJKVeIasM0VASNsYQnhOdP7pyRaZrWJESfFMHknwvA9j~H~elygrqDCTpL6BlG4N2y9YiNRuY~IohoqbQ__"
        alt="PC Jewellers"
        layout="fill"
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 h-32 w-32"
      />
    </div>
  </div> */}
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

