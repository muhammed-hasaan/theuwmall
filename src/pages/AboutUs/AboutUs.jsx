// 'use client'

// import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
// import UwMallLogo from "../../../public/GoldenLogoForAllPages.png"
// import GoldenUwMallLogo from "../../../public/goldenUWLogo.png"
// import { useState , useEffect } from "react"
// import { ChevronDown } from "lucide-react"
// import AllPageHeaders from "../../Components/AllPageHeader/AllPageHeader"
// import Footer from "../../Components/Footer/footer"
// export default function AboutUs() {

//   const amenitiesList: string[] = ["Parking", "Gift Vouchers", "Valet Parking", "Taxi Service", "Prayer Room", "ATM", "Feeding Room", "Scooter Parking", "Parking", "Gift Vouchers", "Valet Parking", "Taxi Service", "Prayer Room"]

//     const [formData, setFormData] = useState({
//       fullName: "",
//       email: "",
//       contactNumber: "",
//       business: "",
//       address: "",
//       message: "",
//     })
  
//     const handleChange = (e:any) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//     }
  
//     const handleSubmit = (e:any) => {
//       e.preventDefault()
//       console.log("Form submitted:", formData)
//       // Add your form submission logic here
//     }

//       const scrollRef3 = useState<HTMLDivElement | null>(null);
//       const scrollRef = useState<HTMLDivElement | null>(null);
    
//      const handleNext3 = () => {
//         if (scrollRef3.current) {
//           if (
//             scrollRef3.current.scrollLeft + scrollRef3.current.offsetWidth >=
//             scrollRef3.current.scrollWidth
//           ) {
//             scrollRef3.current.scrollTo({ left: 0, behavior: "smooth" });
//           } else {
//             scrollRef3.current.scrollBy({ left: 200, behavior: "smooth" });
//           }
//         }
//       };
    
//       const handlePrev3 = () => {
//         if (scrollRef3.current) {
//           if (scrollRef3.current.scrollLeft === 0) {
//             scrollRef3.current.scrollTo({
//               left: scrollRef3.current.scrollWidth,
//               behavior: "smooth",
//             });
//           } else {
//             scrollRef3.current.scrollBy({ left: -200, behavior: "smooth" });
//           }
//         }
//       };
//      const handleNext = () => {
//         if (scrollRef.current) {
//           if (
//             scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
//             scrollRef.current.scrollWidth
//           ) {
//             scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//           } else {
//             scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//           }
//         }
//       };
    
//       const handlePrev = () => {
//         if (scrollRef.current) {
//           if (scrollRef.current.scrollLeft === 0) {
//             scrollRef.current.scrollTo({
//               left: scrollRef.current.scrollWidth,
//               behavior: "smooth",
//             });
//           } else {
//             scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//           }
//         }
//       };


//       useEffect(() => {
//           const interval = setInterval(() => {
//             handleNext3();
//           }, 3000);
//           return () => clearInterval(interval);
//         }, []);
//       useEffect(() => {
//           const interval = setInterval(() => {
//             handleNext();
//           }, 3000);
//           return () => clearInterval(interval);
//         }, []);
//   return (
//     <div>
//     <div style={{width:'100%' , maxWidth:'1400px',margin:'0 auto  '}}>
  
// <AllPageHeaders/>

//       {/* Redefining Luxury Section */}
//   {/* Redefining Luxury Section */}
//   <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 bg-white max-w-[1400px] mx-auto">
//   <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//     <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 md:mb-0">
//       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 uppercase tracking-widest">
//         REDEFINING
//         <br />
//         LUXURY
//       </h2>
//       <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
//         More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover!
//       </p>
//     </div>
//     {/* UWM Text */}
//     <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold text-[#00c5b4] md:-mt-16 lg:-mt-20 animate-slideInFromRight">
//       UWM.
//     </div>
//   </div>
// </section>

// <style jsx>{`
//   @keyframes slideInFromRight {
//     0% {
//       transform: translateX(100%);
//       opacity: 0;
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }
//   .animate-slideInFromRight {
//     animation: slideInFromRight 1s ease-out forwards;
//   }
// `}</style>


//       {/* Explore Section */}
//       <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 bg-white max-w-[1400px] mx-auto">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <div className="flex items-center">
//             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#00c2b0] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-sm uppercase font-medium">Explore</h3>
//           </div>
//           <div className="flex space-x-1 md:space-x-2">
//             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
//               <ChevronLeft onClick={handlePrev3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
//             </button>
//             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
//               <ChevronRight onClick={handleNext3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
//             </button>
//           </div>
//         </div>
//         <hr className="border-black mb-4 md:mb-6" />
//         <div ref={scrollRef3} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar mt-12">
//           {[
//             {
//               title: "Gold",
//               img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
//             },
//             {
//               title: "Lifestyle",
//               img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
//             },
//             {
//               title: "Fashion",
//               img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
//             },
//             {
//               title: "Gold",
//               img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
//             },
//             {
//               title: "Lifestyle",
//               img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
//             },
//             {
//               title: "Fashion",
//               img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
//             },
//           ].map((item, ind) => (
//             <div key={ind} className="group cursor-pointer min-w-[430px]">
//               <div className="overflow-hidden mb-2 sm:mb-3 md:mb-4 rounded-sm">
//                 <Image
//                   src={item.img || "/placeholder.svg"}
//                   alt={item.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-[500px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <h4 className="font-bold uppercase text-base sm:text-lg md:text-xl mb-1 md:mb-2">{item.title}</h4>
//               <p className="text-gray-600 text-xs sm:text-sm md:text-base">
//                 Most covatable luxury brands at Fashion Avenue ready for you to discover.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//  {/* Amenities Section */}
//       <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 max-w-[1400px] mx-auto">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <div className="flex items-center">
//             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#b8d12a] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-sm uppercase font-medium">Amenities</h3>
//           </div>
//           <div className="flex space-x-1 md:space-x-2">
//             <button onClick={handlePrev} className="p-1 rounded-full hover:bg-white transition-colors">
//               <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
//             </button>
//             <button onClick={handleNext} className="p-1 rounded-full hover:bg-white transition-colors">
//               <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
//             </button>
//           </div>
//         </div>
//         <hr className="border-black mb-4 md:mb-6" />
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
//           ELEVATE YOUR EXPERIENCE <br className="sm:hidden" /> AT <span className="text-[#bbbf34]">UW MALL</span>
//         </h2>
//         <div className="overflow-hidden w-full relative">
//         <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide no-scrollbar">
//   {amenitiesList.map((amenity, idx) => (
//     <div
//       key={idx}
//       className="flex flex-col  items-center text-center p-2 transition-transform hover:scale-105 min-w-[110px] sm:min-w-[110px] md:min-w-[150px]"
//     >
//       <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-900 flex items-center justify-center mb-2">
//         <span className="text-lg sm:text-xl md:text-2xl">P</span>
//       </div>
//       <span className="text-xs sm:text-sm md:text-base leading-tight">{amenity}</span>
//     </div>
//   ))}
// </div>
//         </div>
//       </section>
//   {/* Redefining Luxury Section */}
    
  
     

//       {/* Amenities Section
//       <section className="py-16 px-6 md:px-10 lg:px-20 ">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-[#b8d12a] mr-3"></div>
//             <h3 className="uppercase font-medium">Amenities</h3>
//           </div>
//           <div className="flex space-x-2">
//             <button className="p-1 rounded-full">
//               <ChevronLeft className="w-6 h-6 text-[#bbbf34]" />
//             </button>
//             <button className="p-1 rounded-full">
//               <ChevronRight className="w-6 h-6 text-[#bbbf34]" />
//             </button>
//           </div>
//         </div>
//         <hr style={{ height: '2px', backgroundColor: 'black' }} />
//         <br />
//         <div className="mb-10">
//           <h2 className="text-xl md:text-3xl font-bold uppercase mb-2">
//             ELEVATE YOUR EXPERIENCE
//             <br />
//             AT <span className="text-[#bbbf34]">UW MALL</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-14">
//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <span className="text-4xl ">P</span>
//             </div>
//             <span className="text-xs">Parking</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
//                 <path d="M16.5 9.4 7.55 4.24" />
//                 <polyline points="3.29 7 12 12 20.71 7" />
//                 <line x1="12" y1="22" x2="12" y2="12" />
//                 <circle cx="18.5" cy="15.5" r="2.5" />
//                 <path d="M20.27 17.27 22 19" />
//               </svg>
//             </div>
//             <span className="text-xs">Gift Vouchers</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect width="20" height="14" x="2" y="5" rx="2" />
//                 <line x1="2" x2="22" y1="10" y2="10" />
//               </svg>
//             </div>
//             <span className="text-xs">Valet Parking</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
//                 <circle cx="7" cy="17" r="2" />
//                 <path d="M9 17h6" />
//                 <circle cx="17" cy="17" r="2" />
//               </svg>
//             </div>
//             <span className="text-xs">Taxi Service</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
//                 <path d="M9 12v6" />
//                 <path d="M13 12v6" />
//                 <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5s2-.5 3-.5 2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
//               </svg>
//             </div>
//             <span className="text-xs">Prayer Room</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect width="18" height="12" x="3" y="8" rx="2" />
//                 <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
//                 <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
//               </svg>
//             </div>
//             <span className="text-xs">ATM</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//               </svg>
//             </div>
//             <span className="text-xs">Feeding Room</span>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="55"
//                 height="55"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="18" cy="17" r="2" />
//                 <circle cx="6" cy="17" r="2" />
//                 <path d="M10 17H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H10l2 3Z" />
//                 <path d="M6 15h4" />
//                 <path d="m15 8-2 9" />
//                 <path d="M18 8c-.5-1-1.9-2-3.5-2H9.5C8.4 6 7 7.1 7 8.5c0 1.1.6 2.2 1.5 2.5h.5c.5 0 1-.5 1-1V8" />
//               </svg>
//             </div>
//             <span className="text-xs">Scooter Parking</span>
//           </div>
//         </div>
//       </section> */}

//       <section className="py-8 px-6 md:px-10 lg:px-8 mb-20 max-w-[1400px] mx-auto">
//         <div className="mb-6">
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-[#ff3366] mr-3"></div>
//             <h3 className="uppercase font-medium">Leasing</h3>
//           </div>
//         </div>
//         <hr className="border-black mb-4 md:mb-6" />
//         <br />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="flex items-center">
//             <h2 className="text-2xl md:text-3xl font-bold uppercase">
//               EXPLORE LEASING
//               <br />
//               OPPORTUNITIES WITH US
//             </h2>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name*"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email*"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="contactNumber"
//                   placeholder="Contact Number*"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <select
//                     name="business"
//                     value={formData.business}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select Business*
//                     </option>
//                     <option value="retail">Retail</option>
//                     <option value="food">Food & Beverage</option>
//                     <option value="jewelry">Jewelry</option>
//                     <option value="fashion">Fashion</option>
//                     <option value="other">Other</option>
//                   </select>
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                     <ChevronDown className="h-5 w-5 text-gray-400" />
//                   </div>
//                 </div>

//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address*"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                   required
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Message*"
//                   value={formData.message}
//                   onChange={handleChange}
//                 //   rows="4"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff3366]"
//                   required
//                 ></textarea>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="bg-white text-[#ff3366] border border-[#ff3366] px-8 py-2 rounded-md hover:bg-[#ff3366] hover:text-white transition-colors"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>


//     </div>
//       <div className="w-full mx-auto bg-black border-4 border-black">

// <Footer />
//       </div>
//       </div>
//   )
// }




import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal,ChevronDown, ParkingCircle, Gift, Car, Church, CreditCard, Baby, Bike} from 'lucide-react';
// Import your images - adjust paths as needed for your project structure
import UwMallLogo from "../../assets/GoldenLogoForAllPages.png";
import GoldenUwMallLogo from "../../assets/goldenUWLogo.png";
import { CarTaxiFront } from "lucide-react";
import Emploreimg1 from "../../assets/Exploreimg1.jpeg"
import Emploreimg2 from "../../assets/Exploreimg2.jpeg"
import Emploreimg3 from "../../assets/Exploreimg3.jpeg"

// Import your components - adjust paths as needed
// import AllPageHeaders from "../../components/AllPageHeader/AllPageHeader";
// import Footer from "../../components/Footer/footer";
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader";
import Footer from "../../Components/Footer/Footer";
import { X } from "lucide-react"


function AboutUs() {
  const amenitiesList = [
    { name: "Parking", icon: <ParkingCircle size={60} strokeWidth={1} /> },
    { name: "Gift Vouchers", icon: <Gift size={60} strokeWidth={1} /> },
    { name: "Valet Parking", icon: <Car size={60} strokeWidth={1} /> },
    { name: "Taxi Service", icon:  <CarTaxiFront size={60}strokeWidth={1} /> },
    { name: "Prayer Room", icon: <Church size={60} strokeWidth={1} /> },
    { name: "ATM", icon: <CreditCard size={60} strokeWidth={1} /> },
    { name: "Feeding Room", icon: <Baby size={60} strokeWidth={1} /> },
    { name: "Scooter Parking", icon: <Bike size={60} strokeWidth={1} /> },
    { name: "Parking", icon: <ParkingCircle size={60} strokeWidth={1} /> },
    { name: "Gift Vouchers", icon: <Gift size={60} strokeWidth={1} /> },
    { name: "Valet Parking", icon: <Car size={60} strokeWidth={1} /> },
    { name: "Taxi Service", icon:  <CarTaxiFront size={60} strokeWidth={1} /> },
    { name: "Prayer Room", icon: <Church size={60} strokeWidth={1} /> },
    { name: "ATM", icon: <CreditCard size={60} strokeWidth={1} /> },
    { name: "Feeding Room", icon: <Baby size={60} strokeWidth={1} /> },
    { name: "Scooter Parking", icon: <Bike size={60} strokeWidth={1} /> },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    business: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const scrollRef3 = useRef(null);
  const scrollRef = useRef(null);

  const handleNext3 = () => {
    if (scrollRef3.current) {
      if (
        scrollRef3.current.scrollLeft + scrollRef3.current.offsetWidth >=
        scrollRef3.current.scrollWidth
      ) {
        scrollRef3.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef3.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    }
  };

  const handlePrev3 = () => {
    if (scrollRef3.current) {
      if (scrollRef3.current.scrollLeft === 0) {
        scrollRef3.current.scrollTo({
          left: scrollRef3.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef3.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      if (
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext3();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

const [readmore , SetReadmore] = useState(false)


const [isOpen, setIsOpen] = useState(false)

// Add effect to control body background when popup is open
useEffect(() => {
  if (isOpen) {
    // Add a class to the body when popup is open
    document.body.classList.add("popup-open")
  } else {
    // Remove the class when popup is closed
    document.body.classList.remove("popup-open")
  }

  // Cleanup function to ensure class is removed when component unmounts
  return () => {
    document.body.classList.remove("popup-open")
  }
}, [isOpen])

const togglePopup = () => {
  setIsOpen(!isOpen)
}

const closePopup = () => {
  setIsOpen(false)
}

  return (
    <div>
      <div className="mx-auto w-[100%] max-w-[1400px]">
        <AllPageHeader />

        <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 bg-transparent max-w-[1400px] mx-auto">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="flex items-center ">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00c2b0] mr-2 md:mr-3"></div>
            <h3 className="text-xs md:text-lg uppercase font-medium ml-4">ABOUT</h3>
          </div>
          {/* <div className="flex space-x-1 md:space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft onClick={handlePrev3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight onClick={handleNext3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
            </button>
          </div> */}
        </div>
        <hr className="border-2 border-black mb-4 md:mb-2" />
        <div className="flex flex-col md:flex-col justify-between items-start md:items-start mt-6">

          <div className="w-[100%] max-w-full md:max-w-[1300px] flex justify-between ">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 uppercase ">
            A NEW DAWN 
              <br />
              <h2 className="md:mt-2">

              OF LUXURY 
              </h2>
            </h2>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-[#00c5b4] font-black -mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
  UWM.
</div>
           </div>

          <div className=" mb-6 md:mb-0 -mt-6 ">
            <p className="text-black text-xs sm:text-sm md:text-base lg:text-md mt-8   sm:px-0 w-full max-w-[800px] ">
  {/* BurJuman Mall is a convergence of tradition, present and future aspirations. It proudly stands as a testament that the past doesn’t confine the future but enriches it. Building upon its storied history as one of Dubai's oldest and most iconic malls, BurJuman Mall seamlessly bridges the past with the present and looks ahead with consumers at the very heart of its being. We are all about embracing a vibrant and thriving community, where diversity blooms in every corner of our place. We are more than just a shopping destination; we are a hub of connection, celebration and shared experiences. */}

 <p className="font-bold"> Dubai’s New Gold Destination  </p> <br/>
 <p className="-mt-3">
 Nestled in the heart of Al Mankhool, Dubai, UW Mall stands as a beacon of luxury—seamlessly blending world-class gold collections with an unparalleled lifestyle experience. As the latest venture of the Unique Group of Companies—a pioneer in business excellence since 1998—UW Mall is more than just a shopping center. It’s a celebration of elegance and style.
 </p>
{/* {readmore && ( */}
  <div id="readmorediv" className="transition-all duration-500 ease-out translate-y-4">
    {/* <p className="font-bold mt-4">A Curated Selection of Prestigious Brands</p> 
    <br/>
    <p className="-mt-4">
      At UW Mall, we are committed to delivering a premium retail experience where luxury, quality, and style come together. We proudly host an exquisite collection of globally renowned brands that set new standards in craftsmanship and innovation. Whether you seek timeless gold jewellery or high-end fashion, our distinguished retailers offer the finest selections.
    </p> */}
{readmore && (
<div>
  <p className="font-bold mt-4">Beyond Shopping – A Lifestyle Experience  </p> 
    <br/>
    <p className="-mt-4">
    At UW Mall, we are committed to offering a space where style is celebrated in every form—from exquisite jewelry to the latest fashion trends—all within a convenient and luxurious environment. We’re not just a shopping destination; we’re a vibrant community that enhances your lifestyle and brings your passions to life.
    </p>
    <p className="font-bold mt-4">Join Our Community
    </p> 
    <br/>
    <p className="-mt-4">
    We invite you to become part of the UW Mall community—a place where fashion, elegance, and lifestyle are celebrated every day. Experience the epitome of luxury shopping and immerse yourself in an environment that reflects your aspirations and style.
    </p>
    <br />
    <i >
    Experience the new dawn of luxury at UW Mall—where your lifestyle shines.
    </i>
    </div>

)}
    {/* READ LESS BUTTON */}
    <button 
    id="readlessbtn"
    className="border-1 border-pink-700 rounded-full text-black px-4 py-1 mt-4 opacity-0 translate-y-4 transition-all duration-500 ease-out"
      onClick={() => {
        document.getElementById("readmorediv").classList.add("opacity-0", "translate-y-4");
        document.getElementById("readmorediv").classList.remove("opacity-100", "translate-y-0");
        document.getElementById("readlessbtn").classList.add("opacity-0", "translate-y-4");
        document.getElementById("readlessbtn").classList.remove("opacity-100", "translate-y-0");
        setTimeout(() => {
          SetReadmore(false);
        }, 500);
      }}
style={{cursor: 'pointer'}}
    >
      READ LESS
    </button>
  </div>
{/* )} */}
</p>
{/* READ MORE BUTTON */}
<button 
  className={`border-1 border-pink-700 rounded-full text-black px-4 py-1  ${readmore ? 'hidden' : ''}` } 
style={{ zIndex: 9999, position: 'relative', cursor: 'pointer' }}
  onClick={() => {
    SetReadmore(true);
    // setTimeout(() => {
      console.log("ok")
      document.getElementById("readmorediv").classList.remove("opacity-0", "translate-y-4");
      document.getElementById("readmorediv").classList.add("opacity-100", "translate-y-0");
      document.getElementById("readlessbtn").classList.remove("opacity-0", "translate-y-4");
      document.getElementById("readlessbtn").classList.add("opacity-100", "translate-y-0");
    // }, 10);
  }}
>
  READ MORE
</button>


         
          </div>
          {/* UWM Text */}
        
        </div>
      </section>

      <style jsx>{`
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animate-slideInFromRight {
    animation: slideInFromRight 1s ease-out forwards;
  }
`}</style>

      {/* Explore Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 bg-transparent max-w-[1400px] mx-auto mt-4"> 
     
      <div ref={scrollRef3} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar mt-4">
        {[
                    {
                      title: "Gold",
                      img: Emploreimg1,
                      description: "Timeless craftsmanship, radiant designs, and pure elegance. Elevate your jewelry collection with the finest pieces from globally renowned brands."
                    },
                    {
                      title: "Lifestyle",
                      img: Emploreimg2,
                      description: "Elevate your everyday with handpicked luxury essentials. From decor that transforms your space to accessories that add finesse to your routine, indulge in the finer things."
                    },
                    {
                      title: "Fashion",
                      img: Emploreimg3,
                      description: "Step into the world of high-end fashion, where trendsetting designs, luxury craftsmanship, and iconic labels come together to elevate your unique style and confidence. "
                    },
                    {
                      title: "Gold",
                      img: Emploreimg1,
                      description: "Timeless craftsmanship, radiant designs, and pure elegance. Elevate your jewelry collection with the finest pieces from globally renowned brands."
                    },
                    {
                      title: "Lifestyle",
                      img: Emploreimg2,
                      description: "Elevate your everyday with handpicked luxury essentials. From decor that transforms your space to accessories that add finesse to your routine, indulge in the finer things."
                    },
                    {
                      title: "Fashion",
                      img: Emploreimg3,
                      description: "Step into the world of high-end fashion, where trendsetting designs, luxury craftsmanship, and iconic labels come together to elevate your unique style and confidence. "
                    },
                  
        
                  ].map((item, ind) => (
                    <div key={ind} className="group cursor-pointer min-w-full sm:min-w-[300px] md:min-w-[410px]">
                      <div className="overflow-hidden mb-2 sm:mb-3 md:mb-4 ">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-[563px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-bold uppercase text-base sm:text-lg md:text-xl mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-md ">
                        {/* Most covatable luxury brands at Fashion Avenue ready for you to discover. */}
                        {item.description}
                      </p>
                    </div>
                  ))}
        </div>
      </section>

        {/* Amenities Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="flex items-center ">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#b8d12a] mr-2 md:mr-3"></div>
            <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Amenities</h3>
          </div>
          <div className="flex space-x-1 md:space-x-2">
            <button onClick={handlePrev} className="p-1 rounded-full hover:bg-white transition-colors">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
            </button>
            <button onClick={handleNext} className="p-1 rounded-full hover:bg-white transition-colors">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
            </button>
          </div>
        </div>
        <hr className=" border-2 border-black mb-4 md:mb-6" />
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
          ELEVATE YOUR EXPERIENCE <br  /> AT <span className="text-[#bbbf34]">UW MALL</span>
        </h2>
        <div className="overflow-hidden w-full relative">
          <div ref={scrollRef} className="flex space-x-3 overflow-x-scroll scrollbar-hide no-scrollbar">
            {amenitiesList.map((amenity, idx) => (
              <div
              key={idx}
              className="flex flex-col  items-center text-center p-2 transition-transform hover:scale-105 min-w-[110px] sm:min-w-[110px] md:min-w-[150px]"
              onMouseOver={togglePopup}

            >
              <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-600 flex items-center justify-center mb-2">
                <span className="text-lg sm:text-xl md:text-2xl text-gray-600">{amenity.icon}</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base leading-tight text-gray-600">{amenity.name}</span>
            </div>
            ))}
          </div>
        </div>
      </section>

        {/* Leasing Section */}
        <section className="py-2 px-6 md:px-10 lg:px-12 mb-28 max-w-[1400px] mx-auto">
          <div className="mb-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#ff3366] mr-3"></div>
              <h3 className="uppercase font-medium ml-6">Leasing</h3>
            </div>
          </div>
          <hr className="border-2 border-black mb-4 md:mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center">
              <h2 className="text-lg md:text-3xl font-bold uppercase">
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
      </div>

      <div className="flex  w-full items-center justify-center p-4">

{/* Backdrop */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
    onClick={closePopup}
  />
)}

{/* Popup */}
<div
  className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl z-50 w-[90%] max-w-md
    transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
>
  <div className="absolute top-3 right-3">
    <button
      onClick={closePopup}
      className="rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <X className="h-5 w-5" />
    </button>
  </div>

  <div className="text-center space-y-4">
    <div className="w-16 h-16 bg-[#ff3366] rounded-full mx-auto flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">COMING SOON</h3>

    <p className="text-gray-600 dark:text-gray-300">
    Thank you for stopping by! 🎉 Exciting offers are on their way—stay tuned and get ready for something amazing! ✨            </p>

    <div className="pt-4">
      <button
        onClick={closePopup}
        className="bg-[#ff3366] p-1 text-white rounded-full hover:to-violet-600 w-full"
      >
        Got it!
      </button>
    </div>
  </div>
</div>  
</div>

      <div className="w-full mx-auto bg-black border-4 border-black">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;