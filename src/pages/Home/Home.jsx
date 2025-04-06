// // // 'use client'
// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
// // // import UwMallLogo from "../public/UW-Mall-Header-Logo.png"
// // // import GoldenUwMallLogo from "../public/goldenUWLogo.png"
// // // import Footer from "./Components/Footer/footer"

// // // export default function Home() {
// // //   return (
// // //     <main>
// // //       {/* Hero Section */}
// // //       <section className="relative h-screen">
// // //         <div className="absolute inset-0">
// // //           <Image src="https://s3-alpha-sig.figma.com/img/bb87/675c/c1f91f8a44ba53bf704b8d1cbfcc7783?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hKGKWjsPVtAswKqJhQJZQWUuwewMIfcE2VwbAdz-g6ALR0i~aL5wJw7m9tNYjczOW56gzXe0tAwKQ4Oz0Oiks~4aqc234yDSME8ravza8sbdUZ1Kh9I0xQ0AJHUxSVb~wd7w5o9HE4KF5oKD-8T7AFGkA3HOkIjT5Veu-WIwoVr77Al7B9NJegld8TRvBeMFBpUSautmr97d9NXXL5jFMtZFWBphI1im1MK2pXGQ-9bIDWC3K7Lxs0mAaGFFN9Lkay0DX9KXxECws7H3g7BfQ30iD9QhP0pRilO7v95CDmrDCQ~NYYeQTAN7pjeRhmydewc2LZ7-TxNtS2EbeUtNXw__" alt="Luxury jewelry model" fill className="object-cover" priority />
// // //         </div>

// // //         {/* Navigation */}
// // //         <div className="relative z-10 flex justify-between items-center p-6 md:p-10">
// // //           <div className="flex items-center">
// // //             <a href="/" className="text-white text-2xl font-light tracking-widest">
// // //               <Image
// // //                 src={UwMallLogo}
// // //                 alt="UW Mall Logo"
// // //                 style={{
// // //                   mixBlendMode: "multiply", // White background remove karega
// // //                   filter: "brightness(0) invert(1)", // Light color ko dark karega
// // //                 }}
// // //                 width={100}
// // //                 height={100}
// // //               />
// // //               {/* <span className="font-bold">UW</span> MALL1 */}
// // //             </a>
// // //           </div>

// // //           <nav className="hidden md:flex space-x-20 text-white text-sm uppercase tracking-wider">
// // //             <a href="/" className="border-b border-white pb-1">
// // //               EXPLORE OUR MALL
// // //             </a>
// // //             <a href="/Pages/AboutUs" className="hover:border-b hover:border-white pb-1">
// // //               ABOUT
// // //             </a>
// // //             <a href="/Pages/Brands" className="hover:border-b hover:border-white pb-1">
// // //               BRANDS
// // //             </a>
// // //             <a href="#" className="hover:border-b hover:border-white pb-1">
// // //               STORIES
// // //             </a>
// // //             <a href="#" className="hover:border-b hover:border-white pb-1">
// // //               CAREERS
// // //             </a>
// // //             <a href="#" className="hover:border-b hover:border-white pb-1">
// // //               CONTACT
// // //             </a>
// // //           </nav>

// // //           <button className="text-white">
// // //             <MoreHorizontal className="w-10 h-10" />
// // //           </button>
// // //         </div>

// // //         {/* Hero Content */}
// // //         <div className="relative z-10 flex flex-col justify-center items-center h-[600px] text-white text-center px-4">
// // //           <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-4">
// // //             DUBAI&apos;S NEW GOLD DESTINATION
// // //           </h1>
// // //         </div>

// // //         {/* Gold Circle Button */}
// // //         <div className="absolute bottom-10 right-10 z-10 flex flex-col justify-center items-center gap-y-2">
// // //           <div className="bg-[#dbb85d] rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white text-xs cursor-pointer">
// // //             <div className="text-center">
// // //               <div className="font-bold text-[15px] text-black">Watch Reel</div>
// // //               {/* <div>NOW</div> */}
// // //             </div>
// // //           </div>

// // //           <div className="font-bold text-[10px] text-white">UW MALL</div>
// // //         </div>
// // //       </section>

// // //       {/* Redefining Luxury Section */}
// // //       <section className="py-16 px-6 md:px-10 lg:px-20 bg-white">
// // //         <div className="flex flex-col md:flex-row justify-between  md:items-center">
// // //           <div className="max-w-xl">
// // //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase" style={{ letterSpacing: '6px' }}>
// // //               REDEFINING
// // //               <br />
// // //               LUXURY
// // //             </h2>
// // //             <p className="text-gray-600 mb-8 mt-8">
// // //               More than 200 of the most covatable luxury brands at Fashion Avenue ready for you to discover!
// // //             </p>
// // //           </div>
// // //           <div className="text-5xl md:text-6xl lg:text-9xl font-extrabold text-[#00c5b4] -mt-20">UWM.</div>
// // //         </div>
// // //       </section>

// // //       {/* Explore Section */}
// // //       <section className="py-8 px-6 md:px-10 lg:px-20 bg-white">
// // //         <div className="flex justify-between items-center mb-6">
// // //           <div className="flex items-center">
// // //             <div className="w-3 h-3 rounded-full bg-[#00c2b0] mr-3"></div>
// // //             <h3 className="uppercase font-medium">Explore</h3>
// // //           </div>
// // //           <div className="flex space-x-2">
// // //             <button className="p-1  rounded-full">
// // //               <ChevronLeft className="w-6 h-6 text-[#00c5b4]" />
// // //             </button>
// // //             <button className="p-1   rounded-full">
// // //               <ChevronRight className="w-6 h-6 text-[#00c5b4]" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <hr style={{ height: '2px', backgroundColor: 'black' }} />
// // //         <br />
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //           {/* Gold Card */}
// // //           <div className="group cursor-pointer">
// // //             <div className="overflow-hidden mb-4">
// // //               <Image
// // //                 src="https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o98oIwzXAl7OORvTQWn~ulXGe5S~9MBgOPX8YpsKnANDhDKdrXucjFXfH745nVQ2aqTK~2XSw3meXwJZR5OaFNvacj8oPpuHzI83Ubsw9TPEV5SeTvWJqNBELhVQU4Gg9HdE-0cbjD-bLcKVBrwMB~7rPyCq-aLm~mq8D3fXMtBQTiY28w94gLWN9lYhscMe3dmp77NmdDNr4aZwmA33s--g6PwUisWRt3misM2QdO5XZs-0Dod8zyNuF058uQdlsYLmpu-2njkUMLOpQlRabYERfGhd5uw0HqfMoxz6pu~pG6h2JzO0zXXI50engyd8seat8bCItW54Y~nAl53eOg__"
// // //                 alt="Gold luxury"
// // //                 width={400}
// // //                 height={300}
// // //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //               />
// // //             </div>
// // //             <h4 className="font-bold uppercase mb-2 text-2xl">Gold</h4>
// // //             <p className="text-md text-gray-600 ">
// // //               Most covatable luxury brands at Fashion Avenue ready for you to discover.
// // //             </p>
// // //           </div>

// // //           {/* Lifestyle Card */}
// // //           <div className="group cursor-pointer">
// // //             <div className="overflow-hidden mb-4">
// // //               <Image
// // //                 src="https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NttA2hJLhWF-NT4NNrsFcyvfN6Xri1qF3MC6lKGHU1XTTk4gbUcALKLO4en1NPQV608jScY7yQA70L3VtGu6HLe11ouG9TArlYHPKlYBuchYwUmvLamk7t2y0S81mbZAAa-hpktthoHKQ2DIwcdQ~4RIwZT0K5Ir-iHNndmQ0e5bNVvaKoKDVvzeyZ0exciYNQN6aBAe9DFMGgaJ-Ew20GSAB9T3gTpxV37zJ1NBtXLcgWr9Hux1xYJNXAQLB~HGi1MIFAsHpPLBXEvVsTzi8pe0tN~V0sXJ-k0WXvoq5y14Mn4LUXxMe~xEUZAFCAH8PyIE7PVx4m6NgZ1Bh6cXag__"
// // //                 alt="Lifestyle luxury"
// // //                 width={400}
// // //                 height={300}
// // //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //               />
// // //             </div>
// // //             <h4 className="font-bold uppercase mb-2 text-2xl">Lifestyle</h4>
// // //             <p className="text-md text-gray-600">
// // //               Most covatable luxury brands at Fashion Avenue ready for you to discover.
// // //             </p>
// // //           </div>

// // //           {/* Fashion Card */}
// // //           <div className="group cursor-pointer">
// // //             <div className="overflow-hidden mb-4">
// // //               <Image
// // //                 src="https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QoAGqS~NA2SPt3xSBggBYYSHCuBAcUTY-RYJLLfz4NaSFUUSiO-8rJ56uABzQ6YFV3wCSWveUZThaCSIwYL~hHVysO27KlMohxtHQDpOkQNMEU0pzNG~E3-xiJl2wV1l1G-5XQV~q4iS9xwf6tMwPsuDWAPOwIFaPz9L3fAsheBuj5RxXsfluPBoeWDE7LPpsSr-s~nryZOX2tb4B1HgfHU20OUBg~QsF0rpqpdSBV3ct1Tx8D47IqJ2DjhW0CWXfU38RzT~BUCeQ0chtcecZXXTPfIENPhsTLYILWanW0hM2sZggdMxQsbzl~RLzCeX41Q5x1ToIzaHHySLOs57hA__"
// // //                 alt="Fashion luxury"
// // //                 width={400}
// // //                 height={300}
// // //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //               />
// // //             </div>
// // //             <h4 className="font-bold uppercase mb-2 text-2xl">Fashion</h4>
// // //             <p className="text-md text-gray-600">
// // //               Most covatable luxury brands at Fashion Avenue ready for you to discover.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Brands Section */}
// // //       <section className="py-8 px-6 md:px-10 lg:px-20 bg-white  mt-16">
// // //         <div className="flex justify-between items-center mb-6">
// // //           <div className="flex items-center">
// // //             <div className="w-3 h-3 rounded-full bg-[#ff6b35] mr-3"></div>
// // //             <h3 className="uppercase font-medium">Brands</h3>
// // //           </div>
// // //           <div className="flex space-x-2">
// // //             <button className="p-1  rounded-full">
// // //               <ChevronLeft className="w-6 h-6 text-[#FF6B35]" />
// // //             </button>
// // //             <button className="p-1 rounded-full">
// // //               <ChevronRight className="w-6 h-6 text-[#FF6B35]" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <hr style={{ height: '2px', backgroundColor: 'black' }} />
// // //         <br />
// // //         <div className="mb-10">
// // //           <h2 className="text-xl md:text-3xl font-bold uppercase mb-2">
// // //             CREATE YOUR OWN
// // //             <br />
// // //             EXPERIENCE AT <span className="text-[#ff6b35] font-extrabold">UW MALL</span>
// // //           </h2>
// // //         </div>

// // //         <div className="flex justify-between items-center flex-wrap gap-x-6 mt-20 mb-20">
// // //           <div className="flex justify-center">
// // //             <Image src="https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hi5V1ujHr95qSlw0aq0PsmbnPI4hPL1fV4L0lV6y2fgsYndzPiEDNUvq7xs19AE1AEAlVaenJNELo1I-feC98b5hJpnPiAC8D1sN66w~o7jSCyD~plVf2pK3DuyHCtAoZ8YHCmMjdlVA3fgHINvZRgtEfb89cawTFHgc7es-tj0EFSyV2p8CcS~PMYDmfFxWvUSsCu2RwJbOlgXjcdrfu7JD-vd1KZ5dOV37qcT45dMELZNx0eaRxqWxnbqFX~QrLj96ESbkLajBA3qXvHq3xID-nmwPXpQIls9SGHuPIPwbY0nJyIZ3l50VhZ5J2c9bmXL8iwa1amkv~0Mgm7smXQ__" alt="Tanishq" width={220} height={60} />
// // //           </div>
// // //           <div className="flex justify-center">
// // //             <Image src="https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TsuTgBa1d1h7mCsFh7xRgoun~Dktq70cIuqpT08mNIYkpKNrd~mB9BCF5ARyfjf6f68A3JSAtlM572UXT7bE7gXDhpjuLx5S8BdOLyGg82uQWVcIThcNbDvOXrr10Ap3icTi1zWSQHI4~SS8hb-HuHtUpIC9tsLYUnfzksbvj4kgbv-GCOSGsUJci3EdGU7tzq7dd6TLKAqdwmrsF1gWCIsGEocm5mo8ek-Xn~IsFo0z7F71rvGKY9XiVgsYZxSSOsg-NpfsVyfSsAUTGE0nkR1k5B1yQ0M5f4NRFVcfdt~GoDWDEPV~OUtZeeMI3JK30c2joXwk19yaQcgi2hjTrg__" className="-mt-12" alt="Malabar" width={150} height={60} />
// // //           </div>
// // //           <div className="flex justify-center">
// // //             <Image src="https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bdSykeL54UNLH7eqVb72g8I4gSaEfQwcqkv5WshXZ277i1s118~t-kAtVyN3CFPSetWp9hTD-RTHsh5XEk9b653ZNZoy8Ic-OjM2eeILNQDQdAymg5FdR1Z-p7SAhVwvqOkzmvWt~7YXWjrTv447VMr68~vUOgpox~kX4noNimZsGLDKPBXwMoZTyJiDhQ1VQqLLgUwQ5MPi-j5juhQCbfp4-wEBNHj0kcIYqIt-u2cjbfFlNUAvVMD-U2SbBWjPL8R1gmzwNP2cwcJ~69bxU~Synpg4O0bOs3A1dzh~ufF1rXeI-s5tMG5x8l04D5vNgKkcqp9A0bHF~rOb62OLeQ__" alt="Kavitha" width={230} height={60} />
// // //           </div>
// // //           <div className="flex justify-center">
// // //             <Image src="https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4woZ3qwwaGVR1nDtWI19MTIXLB8q~FPop8rFPZDqRrJTLnUujBaOxFiovF6MIjMYNOB~SvTGov-KjNGmzfmi1Kf9414d4MGKUCLvgNqmV1UZeVn5E9~2XMZ486YxsblypAiq87~RJ1MLc87m-nVW98SoPup5cPTf5yGrLm8GRMnwx6-BiczL5kIqeU3-ZXrJGx6rL0GFUVjGiaBvPSXvsm9Ts22F1z9GgOI6RiRtSD~XmJRlKrDIdZeCZRZcmqDH2eAQePAjDO64gkTxfErXB3GxRUMIifR7NOaJWpC-zh-dpYBNUeQDdTnydm3cEAG-HDTuMCYsR3Fdo3nS4bwZw__" className="-mt-20" alt="Kalyan" width={150} height={60} />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Latest Offers Section */}
// // //       <section className="py-16 px-6 md:px-10 lg:px-20 bg-[#1a1a1a] text-white">
// // //         <div className="flex justify-between items-center pt-20">
// // //           <div className="flex items-center">
// // //             <div className="w-3 h-3 rounded-full bg-[#ff3366] mr-3"></div>
// // //             <h3 className="uppercase font-medium">Latest Offers</h3>
// // //           </div>

// // //         </div>

// // //         <div className="flex justify-between items-center flex-wrap w-[100%]">
// // //           <div className="-mt-[450px] w-[40%]">
// // //             <h4 className="text-[#ff3366] text-3xl mb-2">NEVER MISS A DEAL!</h4>
// // //             <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '5px' }}>
// // //               GET THE LATEST
// // //               <br />
// // //               OFFERS HERE
// // //             </h2>
// // //             <button className="border border-[#FF3366] px-6 py-2 rounded-full uppercase text-sm  text-[#FF3366] hover:bg-[#FF3366] hover:text-white transition-colors">
// // //               View All
// // //             </button>


// // //           </div>

// // //           <div className="relative w-[55%] -mt-10">

// // //            <div className="flex justify-start items-start">
// // //             <div className="h-[98vh] flex justify-end items-end  pr-10">
// // //             <div className="flex space-x-2">
// // //             <button className="p-1 rounded-full">
// // //               <ChevronLeft className="w-6 h-6 text-white" />
// // //             </button>
// // //             <button className="p-1 rounded-full">
// // //               <ChevronRight className="w-6 h-6 text-white" />
// // //             </button>
// // //           </div>
// // //             </div>
// // //             <div>

// // //              <Image
// // //               src="https://s3-alpha-sig.figma.com/img/ce4b/6f2b/26f62464757cda973cd6c00fb36f8186?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hzHSocC-k~tbdqsiR6TBsn2vzLulPLPBKuSaPFyrDjqC8LSOjd3PKphshBkhiKagEKy7pOxlaa4dbPTj9p0z7vIiyZLFZYNnMH86U212mIDdVBSJjHTNq~VlT1yfg9ZD~KogGaVzg6hw~V8HU55f2060Qdpap04LWZ0-LDPivlfVRLquVCOBStGlpFVATAfWguiwEPHGVBi2dQINFLLrF-sOYowz9IGJ8T5kSDaqVuKDvfbfVAACQEDtNygWQxtkjw6~54Ei2SFImZXWw5M62BLb~kyGBgGnkS03Cbkc2Lkn0Yfim3WTbA3PxhmXQhirM3S8OWtK-rn96qlNXgOkdw__"
// // //               alt="Gold bangles"
// // //               width={1282}
// // //               height={721}
// // //               className="w-[1281.78px] h-[721px] rounded-lg object-cover object-center"
// // //               />
// // //             <div className="mt-4">
// // //               <h3 className="font-bold text-xl mt-1">MALABAR GOLD</h3>
// // //               <p className="text-sm text-gray-400 mt-1">Shop No. 01, Ground Floor</p>
// // //             </div>
// // //               </div>
// // //               </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Amenities Section */}
// // //       <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-100">
// // //         <div className="flex justify-between items-center mb-6">
// // //           <div className="flex items-center">
// // //             <div className="w-3 h-3 rounded-full bg-[#b8d12a] mr-3"></div>
// // //             <h3 className="uppercase font-medium">Amenities</h3>
// // //           </div>
// // //           <div className="flex space-x-2">
// // //             <button className="p-1 rounded-full">
// // //               <ChevronLeft className="w-6 h-6 text-[#bbbf34]" />
// // //             </button>
// // //             <button className="p-1 rounded-full">
// // //               <ChevronRight className="w-6 h-6 text-[#bbbf34]" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <hr style={{ height: '2px', backgroundColor: 'black' }} />
// // //         <br />
// // //         <div className="mb-10">
// // //           <h2 className="text-xl md:text-3xl font-bold uppercase mb-2">
// // //             ELEVATE YOUR EXPERIENCE
// // //             <br />
// // //             AT <span className="text-[#bbbf34]">UW MALL</span>
// // //           </h2>
// // //         </div>

// // //         <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-14">
// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <span className="text-4xl ">P</span>
// // //             </div>
// // //             <span className="text-xs">Parking</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
// // //                 <path d="M16.5 9.4 7.55 4.24" />
// // //                 <polyline points="3.29 7 12 12 20.71 7" />
// // //                 <line x1="12" y1="22" x2="12" y2="12" />
// // //                 <circle cx="18.5" cy="15.5" r="2.5" />
// // //                 <path d="M20.27 17.27 22 19" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Gift Vouchers</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <rect width="20" height="14" x="2" y="5" rx="2" />
// // //                 <line x1="2" x2="22" y1="10" y2="10" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Valet Parking</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
// // //                 <circle cx="7" cy="17" r="2" />
// // //                 <path d="M9 17h6" />
// // //                 <circle cx="17" cy="17" r="2" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Taxi Service</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
// // //                 <path d="M9 12v6" />
// // //                 <path d="M13 12v6" />
// // //                 <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5s2-.5 3-.5 2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Prayer Room</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <rect width="18" height="12" x="3" y="8" rx="2" />
// // //                 <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
// // //                 <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">ATM</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
// // //                 <circle cx="9" cy="7" r="4" />
// // //                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
// // //                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Feeding Room</span>
// // //           </div>

// // //           <div className="flex flex-col items-center text-center">
// // //             <div className="w-28 h-28 rounded-full border-[2px] border-gray-900 flex items-center justify-center mb-2">
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 width="55"
// // //                 height="55"
// // //                 viewBox="0 0 24 24"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               >
// // //                 <circle cx="18" cy="17" r="2" />
// // //                 <circle cx="6" cy="17" r="2" />
// // //                 <path d="M10 17H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H10l2 3Z" />
// // //                 <path d="M6 15h4" />
// // //                 <path d="m15 8-2 9" />
// // //                 <path d="M18 8c-.5-1-1.9-2-3.5-2H9.5C8.4 6 7 7.1 7 8.5c0 1.1.6 2.2 1.5 2.5h.5c.5 0 1-.5 1-1V8" />
// // //               </svg>
// // //             </div>
// // //             <span className="text-xs">Scooter Parking</span>
// // //           </div>
// // //         </div>
// // //       </section>

// // //   <Footer />
// // //     </main>
// // //   )
// // // }

// // "use client"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
// // import UwMallLogo from "../public/UW-Mall-Header-Logo.png"
// // // import GoldenLogo from "../public/GoldenLogoForAllPages.png"
// // import Footer from "./Components/Footer/footer"
// // import { useState, useEffect, useRef } from "react"
// // // import HeroVideo from "../public/HeroVideo/HeroVideo.mp4"


// // const CustomCursor = ({ isActive }) => {
// //   const [position, setPosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     if (!isActive) return; // Cursor sirf hero section me kaam karega

// //     const moveCursor = (e) => {
// //       setPosition({ x: e.clientX, y: e.clientY });
// //     };

// //     document.addEventListener("mousemove", moveCursor);
// //     return () => {
// //       document.removeEventListener("mousemove", moveCursor);
// //     };
// //   }, [isActive]);

// //   if (!isActive) return null; // Hero section ke bahar cursor gayab ho jaye

// //   return (

// // <div
// //   className="fixed   transition-transform duration-100 ease-out z-[999] pointer-events-none sm:display-none"
// //   style={{
// //     left: `${position.x}px`,
// //     top: `${position.y}px`,
// //     transform: "translate(-50%, -50%)",
// //   }}
// // >
// //   <div className="text-center bg-[#dbb85d] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-28 lg:h-28 flex flex-col items-center justify-center">
// //     <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black">
// //       Watch
// //     </div>
// //     <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black -mt-[9px]">
// //       Reel
// //     </div>
// //   </div>

// //       <div className="text-white mx-auto text-xl font-bold ml-2">
// //         UW MALL
// //       </div>
// // </div>
// //   );
// // };



// // export default function Home() {
// //   const amenitiesList = ["Parking", "Gift Vouchers", "Valet Parking", "Taxi Service", "Prayer Room", "ATM", "Feeding Room", "Scooter Parking", "Parking", "Gift Vouchers", "Valet Parking", "Taxi Service", "Prayer Room"]
// //   const scrollRef = useRef(null);
// //   const scrollRef2 = useState(null);
// //   const scrollRef3 = useState(null);


// //   const [isHovering, setIsHovering] = useState(false);


// //   const handleNext = () => {
// //     if (scrollRef.current) {
// //       if (
// //         scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
// //         scrollRef.current.scrollWidth
// //       ) {
// //         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
// //       } else {
// //         scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (scrollRef.current) {
// //       if (scrollRef.current.scrollLeft === 0) {
// //         scrollRef.current.scrollTo({
// //           left: scrollRef.current.scrollWidth,
// //           behavior: "smooth",
// //         });
// //       } else {
// //         scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   const handleNext2 = () => {
// //     if (scrollRef2.current) {
// //       if (
// //         scrollRef2.current.scrollLeft + scrollRef2.current.offsetWidth >=
// //         scrollRef2.current.scrollWidth
// //       ) {
// //         scrollRef2.current.scrollTo({ left: 0, behavior: "smooth" });
// //       } else {
// //         scrollRef2.current.scrollBy({ left: 200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   const handlePrev2 = () => {
// //     if (scrollRef2.current) {
// //       if (scrollRef2.current.scrollLeft === 0) {
// //         scrollRef2.current.scrollTo({
// //           left: scrollRef2.current.scrollWidth,
// //           behavior: "smooth",
// //         });
// //       } else {
// //         scrollRef2.current.scrollBy({ left: -200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   const handleNext3 = () => {
// //     if (scrollRef3.current) {
// //       if (
// //         scrollRef3.current.scrollLeft + scrollRef3.current.offsetWidth >=
// //         scrollRef3.current.scrollWidth
// //       ) {
// //         scrollRef3.current.scrollTo({ left: 0, behavior: "smooth" });
// //       } else {
// //         scrollRef3.current.scrollBy({ left: 200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   const handlePrev3 = () => {
// //     if (scrollRef3.current) {
// //       if (scrollRef3.current.scrollLeft === 0) {
// //         scrollRef3.current.scrollTo({
// //           left: scrollRef3.current.scrollWidth,
// //           behavior: "smooth",
// //         });
// //       } else {
// //         scrollRef3.current.scrollBy({ left: -200, behavior: "smooth" });
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       handleNext();
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       handleNext2();
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       handleNext3();
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);



// //   const Brands = [
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
// //       // top: "-21px",
// //       top: "-12px",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
// //       // top: "-25px",
// //       top: "-18px",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
// //       // top: "-21px",
// //       top: "-12px",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
// //       // top: "-25px",
// //       top: "-18px",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
// //       // top: "-21px",
// //       top: "-12px",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
// //       mt: "mt-[40px]",
// //     },
// //     {
// //       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
// //       // top: "-25px",
// //       top: "-18px",
// //     }
// //   ]
// //   const [isHovering2, setIsHovering2] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen((prev) => !prev);
// //   };
// //   return (
// //     <main className="overflow-x-hidden w-full  mx-auto">
// //       {/* Hero Section */}
// //       <section
// //       className="relative h-[90vh] w-full maxx-w-[1400px] sm:h-screen"
// //       onMouseEnter={() => setIsHovering2(true)}
// //       onMouseLeave={() => setIsHovering2(false)}
// //     >


// //       {/* Background Video */}
// //       <div className="absolute inset-0 z-[1]">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover"
// //         >
// //           <source src="/HeroVideo/HeroVideo.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       </div>

// //       {/* Navigation */}
// //       <div className="mx-auto relative z-10 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full max-w-[1400px]">
// //         <a href="/" className="flex-shrink-0">
// //           <Image
// //             src={UwMallLogo}
// //             alt="UW Mall Logo"
// //             className="w-16 sm:w-20 md:w-24 lg:w-28"
// //             style={{
// //               mixBlendMode: "multiply",
// //               filter: "brightness(0) invert(1)",
// //             }}
// //           />
// //         </a>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-3 lg:space-x-6 xl:space-x-12 text-white text-[10px] lg:text-xs xl:text-sm uppercase tracking-wider">
// //           <a href="/" className="border-b border-white pb-1 transition-all hover:opacity-80">
// //             EXPLORE OUR MALL
// //           </a>
// //           <a href="/Pages/AboutUs" className="hover:border-b hover:border-white pb-1 transition-all">
// //             ABOUT
// //           </a>
// //           <a href="/Pages/Brands" className="hover:border-b hover:border-white pb-1 transition-all">
// //             BRANDS
// //           </a>
// //           <a href="/Pages/Stories" className="hover:border-b hover:border-white pb-1 transition-all">
// //             STORIES
// //           </a>
// //           <a href="/Pages/Career" className="hover:border-b hover:border-white pb-1 transition-all">
// //             CAREERS
// //           </a>
// //           <a href="/Pages/Contactus" className="hover:border-b hover:border-white pb-1 transition-all">
// //             CONTACT
// //           </a>
// //         </nav>

// //         {/* Mobile Hamburger Icon */}
// //         <button
// //           onClick={toggleMobileMenu}
// //           className="text-white md:hidden"
// //         >
// //           <MoreHorizontal className="w-6 h-6 sm:w-8 sm:h-8" />
// //         </button>
// //       </div>

// //       {/* Mobile Menu (Animated) */}
// //       <div
// //         className={`absolute top-16 left-0 w-full  bg-white text-black p-6 space-y-4 md:hidden transform ${
// //           isMobileMenuOpen
// //             ? "translate-x-0 opacity-100"
// //             : "-translate-x-full opacity-0"
// //         } transition-all duration-300 ease-in-out z-[2]`}
// //       >

// //         <a href="/" className="block text-lg font-medium">
// //           EXPLORE OUR MALL
// //         </a>
// //         <a href="/Pages/AboutUs" className="block text-lg font-medium">
// //           ABOUT
// //         </a>
// //         <a href="/Pages/Brands" className="block text-lg font-medium">
// //           BRANDS
// //         </a>
// //         <a href="#" className="block text-lg font-medium">
// //           STORIES
// //         </a>
// //         <a href="#" className="block text-lg font-medium">
// //           CAREERS
// //         </a>
// //         <a href="#" className="block text-lg font-medium">
// //           CONTACT
// //         </a>
// //       </div>
// //       <CustomCursor isActive={isHovering2} />
// //       {/* Hero Content */}
// //       <div className="relative z-10 flex flex-col justify-center items-center h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] text-white text-center px-4">
// //         <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider mb-4">
// //           DUBAI&apos;S NEW GOLD DESTINATION
// //         </h1>
// //       </div>
// //     </section>



// //       {/* Redefining Luxury Section */}
// // <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1400px] mx-auto">
// //   <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
// //     <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 md:mb-0">
// //       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 uppercase tracking-widest">
// //         REDEFINING
// //         <br />
// //         LUXURY
// //       </h2>
// //       <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
// //         More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover!
// //       </p>
// //     </div>
// //     {/* UWM Text */}
// //     <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold text-[#00c5b4] md:-mt-16 lg:-mt-20 animate-slideInFromRight">
// //       UWM.
// //     </div>
// //   </div>
// // </section>

// // <style jsx>{`
// //   @keyframes slideInFromRight {
// //     0% {
// //       transform: translateX(100%);
// //       opacity: 0;
// //     }
// //     100% {
// //       transform: translateX(0);
// //       opacity: 1;
// //     }
// //   }
// //   .animate-slideInFromRight {
// //     animation: slideInFromRight 1s ease-out forwards;
// //   }
// // `}</style>


// //       {/* Explore Section */}
// //       <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1400px] mx-auto" >
// //         <div className="flex justify-between items-center mb-4 sm:mb-6">
// //           <div className="flex items-center">
// //             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#00c2b0] mr-2 md:mr-3"></div>
// //             <h3 className="text-xs md:text-sm uppercase font-medium">Explore</h3>
// //           </div>
// //           <div className="flex space-x-1 md:space-x-2">
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronLeft onClick={handlePrev3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
// //             </button>
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronRight onClick={handleNext3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
// //             </button>
// //           </div>
// //         </div>
// //         <hr className="border-black mb-4 md:mb-6" />
// //         <div ref={scrollRef3} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar mt-12">
// //           {[
// //             {
// //               title: "Gold",
// //               img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
// //             },
// //             {
// //               title: "Lifestyle",
// //               img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
// //             },
// //             {
// //               title: "Fashion",
// //               img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
// //             },
// //             {
// //               title: "Gold",
// //               img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
// //             },
// //             {
// //               title: "Lifestyle",
// //               img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
// //             },
// //             {
// //               title: "Fashion",
// //               img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
// //             },
// //           ].map((item, ind) => (
// //             <div key={ind} className="group cursor-pointer min-w-[430px]">
// //               <div className="overflow-hidden mb-2 sm:mb-3 md:mb-4 rounded-sm">
// //                 <Image
// //                   src={item.img || "/placeholder.svg"}
// //                   alt={item.title}
// //                   width={600}
// //                   height={400}
// //                   className="w-full h-[500px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
// //                 />
// //               </div>
// //               <h4 className="font-bold uppercase text-base sm:text-lg md:text-xl mb-1 md:mb-2">{item.title}</h4>
// //               <p className="text-gray-600 text-xs sm:text-sm md:text-base">
// //                 Most covatable luxury brands at Fashion Avenue ready for you to discover.
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Brands Section */}
// //       <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1400px] mx-auto">
// //         <div className="flex justify-between items-center mb-4 sm:mb-6">
// //           <div className="flex items-center">
// //             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff6b35] mr-2 md:mr-3"></div>
// //             <h3 className="text-xs md:text-sm uppercase font-medium">Brands</h3>
// //           </div>
// //           <div className="flex space-x-1 md:space-x-2">
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronLeft onClick={handlePrev2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
// //             </button>
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronRight onClick={handleNext2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
// //             </button>
// //           </div>
// //         </div>
// //         <hr className="border-black mb-4 md:mb-6" />
// //         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
// //           CREATE YOUR OWN
// //           <br />
// //           EXPERIENCE AT <span className="text-[#ff6b35]">UW MALL</span>
// //         </h2>
// //         <div ref={scrollRef2} className="flex space-x-6 overflow-x-auto scrollbar-hide no-scrollbar mt-12">
// //   {Brands.map((brand, index) => (
// //     <div key={index} className={`${brand.mt} flex-shrink-0 w-20 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center group`}>
// //       <Image
// //         src={brand.img || "/placeholder.svg"}
// //         alt="Brand"
// //         width={100}
// //         height={50}
// //         className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
// //       />
// //     </div>
// //   ))}
// // </div>


// //       </section>

// //       {/* Latest Offers Section */}
// //       <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-[#1a1a1a] text-white  mx-auto">
// //         <div className="flex flex-col md:flex-row justify-between items-start max-w-[1400px] mx-auto">
// //           <div className="md:w-1/2 mb-8 md:mb-0">
// //             <div className="flex items-center mb-3 sm:mb-4">
// //               <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff3366] mr-2 md:mr-3"></div>
// //               <h3 className="text-xs md:text-sm uppercase font-medium">Latest Offers</h3>
// //             </div>
// //             <h4 className="text-[#ff3366] text-base sm:text-lg md:text-xl mb-2">NEVER MISS A DEAL!</h4>
// //             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-4 md:mb-6">
// //               GET THE LATEST
// //               <br />
// //               OFFERS HERE
// //             </h2>
// //             <button className="border border-[#FF3366] px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full uppercase text-xs md:text-sm hover:bg-[#FF3366] hover:text-white transition-colors">
// //               View All
// //             </button>
// //           </div>
// //           {/* <div className="w-full md:w-1/2"> */}
// //           <div className=" w-full md:w-1/2 relative mt-6 md:mt-0">
// //             <div className="relative aspect-video rounded-lg overflow-hidden flex justify-between gap-10">
// //             <div className="flex space-x-1 md:space-x-2">
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronLeft onClick={handlePrev2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
// //             </button>
// //             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
// //               <ChevronRight onClick={handleNext2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
// //             </button>
// //           </div>
// //           <div className="max-w-[200px] h-full">

// //               <Image
// //                 src="https://s3-alpha-sig.figma.com/img/ce4b/6f2b/26f62464757cda973cd6c00fb36f8186?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H~LOh~0KthPzoUoAst~jnIo44nFeXhCX~Ea4pq5aWTMe0hnX4hYInk3DL5gNN4sFxMGmRqgM6Sv3qbuMP~72rjS1LIUjfu~CBjwjgj4JWjhHX7Jjq95bjHKm7S-P1rF18ZYsoTG~XwxvHtpM5bwuTjkV9H4lUNB85CCc8FdZNVADhFsXrwhRpMgcUhZkp44i33EabvdWX8wf1IZG2DLt8whIx4z1Cx9W6s4JupgpnujzeiW8d0YisCncmSkpBnt2qdg5OAp7i1x68kaOoB8wfhyvN-3Q4YCiOV9V-GyXhekuzBbPGHXSGPFOSckidB5taqgKGVCevl~In-M6R1uBLw__"
// //                 alt="Offer"
// //                 fill
// //                 className=" "
// //                 />
// //                 </div>
// //             </div>
// //             <div className="mt-3 sm:mt-4 md:mt-6">
// //               <h3 className="font-bold text-base sm:text-lg md:text-xl">MALABAR GOLD</h3>
// //               <p className="text-gray-400 text-xs sm:text-sm md:text-base">Shop No. 01, Ground Floor</p>
// //             </div>
// //           </div>
// //           {/* </div> */}
// //         </div>
// //       </section>

// //       {/* Amenities Section */}
// //       <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 max-w-[1400px] mx-auto">
// //         <div className="flex justify-between items-center mb-4 sm:mb-6">
// //           <div className="flex items-center">
// //             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#b8d12a] mr-2 md:mr-3"></div>
// //             <h3 className="text-xs md:text-sm uppercase font-medium">Amenities</h3>
// //           </div>
// //           <div className="flex space-x-1 md:space-x-2">
// //             <button onClick={handlePrev} className="p-1 rounded-full hover:bg-white transition-colors">
// //               <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
// //             </button>
// //             <button onClick={handleNext} className="p-1 rounded-full hover:bg-white transition-colors">
// //               <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#bbbf34]" />
// //             </button>
// //           </div>
// //         </div>
// //         <hr className="border-black mb-4 md:mb-6" />
// //         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
// //           ELEVATE YOUR EXPERIENCE <br className="sm:hidden" /> AT <span className="text-[#bbbf34]">UW MALL</span>
// //         </h2>
// //         <div className="overflow-hidden w-full relative">
// //         <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide no-scrollbar">
// //   {amenitiesList.map((amenity, idx) => (
// //     <div
// //       key={idx}
// //       className="flex flex-col  items-center text-center p-2 transition-transform hover:scale-105 min-w-[110px] sm:min-w-[110px] md:min-w-[150px]"
// //     >
// //       <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-900 flex items-center justify-center mb-2">
// //         <span className="text-lg sm:text-xl md:text-2xl">P</span>
// //       </div>
// //       <span className="text-xs sm:text-sm md:text-base leading-tight">{amenity}</span>
// //     </div>
// //   ))}
// // </div>

// //         </div>
// //       </section>
// // <div className="w-full mx-w-[1400px]">

// //       <Footer />
// // </div>
// //     </main>
// //   )
// // }




// "use client"

// import { ChevronLeft, ChevronRight, MoreHorizontal , ParkingCircle, Gift, Car, Church, CreditCard, Baby, Bike } from "lucide-react"
// import UwMallLogo from "../../assets/UW-Mall-Header-Logo.png"
// import { CarTaxiFront } from "lucide-react";
// import { useState, useEffect, useRef } from "react"
// import '../../App.css'
// import './home.css'
// import Footer from "../../Components/Footer/Footer";

// const CustomCursor = ({ isActive }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     if (typeof window === "undefined" || !isActive) return

//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//     }

//     document.addEventListener("mousemove", moveCursor)
//     return () => {
//       document.removeEventListener("mousemove", moveCursor)
//     }
//   }, [isActive])

//   if (typeof window === "undefined" || !isActive) return null

//   return (
//     <div
//     className="fixed transition-transform duration-100 ease-out z-[999] pointer-events-none hidden lg:block"
//     style={{
//       left: `${position.x}px`,
//       top: `${position.y}px`,
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     <div className="text-center bg-[#dbb85d] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-28 lg:h-28 flex flex-col items-center justify-center">
//       <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black">Watch</div>
//       <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black -mt-[9px]">
//         Reel
//       </div>
//     </div>
//     <div className="text-white mx-auto text-xl font-bold ml-2">UW MALL</div>
//   </div>


//   )
// }

// export default function Home() {
//   const amenitiesList = [
//     { name: "Parking", icon: <ParkingCircle size={60} /> },
//     { name: "Gift Vouchers", icon: <Gift size={60} /> },
//     { name: "Valet Parking", icon: <Car size={60} /> },
//     { name: "Taxi Service", icon:  <CarTaxiFront size={60} /> },
//     { name: "Prayer Room", icon: <Church size={60} /> },
//     { name: "ATM", icon: <CreditCard size={60} /> },
//     { name: "Feeding Room", icon: <Baby size={60} /> },
//     { name: "Scooter Parking", icon: <Bike size={60} /> },
//     { name: "Parking", icon: <ParkingCircle size={60} /> },
//     { name: "Gift Vouchers", icon: <Gift size={60} /> },
//     { name: "Valet Parking", icon: <Car size={60} /> },
//     { name: "Taxi Service", icon:  <CarTaxiFront size={60} /> },
//     { name: "Prayer Room", icon: <Church size={60} /> },
//     { name: "ATM", icon: <CreditCard size={60} /> },
//     { name: "Feeding Room", icon: <Baby size={60} /> },
//     { name: "Scooter Parking", icon: <Bike size={60} /> },
//   ];

//   const scrollRef = useRef(null)
//   const scrollRef2 = useRef(null)
//   const scrollRef3 = useRef(null)

//   const [isHovering, setIsHovering] = useState(false)

//   const handleNext = () => {
//     if (scrollRef.current) {
//       if (scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
//         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
//       } else {
//         scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
//       }
//     }
//   }

//   const handlePrev = () => {
//     if (scrollRef.current) {
//       if (scrollRef.current.scrollLeft === 0) {
//         scrollRef.current.scrollTo({
//           left: scrollRef.current.scrollWidth,
//           behavior: "smooth",
//         })
//       } else {
//         scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
//       }
//     }
//   }

//   const handleNext2 = () => {
//     if (scrollRef2.current) {
//       if (scrollRef2.current.scrollLeft + scrollRef2.current.offsetWidth >= scrollRef2.current.scrollWidth) {
//         scrollRef2.current.scrollTo({ left: 0, behavior: "smooth" })
//       } else {
//         scrollRef2.current.scrollBy({ left: 200, behavior: "smooth" })
//       }
//     }
//   }

//   const handlePrev2 = () => {
//     if (scrollRef2.current) {
//       if (scrollRef2.current.scrollLeft === 0) {
//         scrollRef2.current.scrollTo({
//           left: scrollRef2.current.scrollWidth,
//           behavior: "smooth",
//         })
//       } else {
//         scrollRef2.current.scrollBy({ left: -200, behavior: "smooth" })
//       }
//     }
//   }

//   const handleNext3 = () => {
//     if (scrollRef3.current) {
//       if (scrollRef3.current.scrollLeft + scrollRef3.current.offsetWidth >= scrollRef3.current.scrollWidth) {
//         scrollRef3.current.scrollTo({ left: 0, behavior: "smooth" })
//       } else {
//         scrollRef3.current.scrollBy({ left: 350, behavior: "smooth" })
//       }
//     }
//   }

//   const handlePrev3 = () => {
//     if (scrollRef3.current) {
//       if (scrollRef3.current.scrollLeft === 0) {
//         scrollRef3.current.scrollTo({
//           left: scrollRef3.current.scrollWidth,
//           behavior: "smooth",
//         })
//       } else {
//         scrollRef3.current.scrollBy({ left: -200, behavior: "smooth" })
//       }
//     }
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext()
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext2()
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext3()
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   const Brands = [
//     {
//       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
//       mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
//       top: "-12px",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
//       mt: "mt-[14px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
//       top: "-18px",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
//       mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
//       top: "-12px",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
//       mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
//       top: "-18px",
//       mt: "-mt-3"
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
//       mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
//       top: "-12px",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
//       mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
//     },
//     {
//       img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
//       top: "-18px",
//       mt: "-mt-3"
//     },
//   ]
//   const [isHovering2, setIsHovering2] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev)
//   }
//   const [hideCursor, setHideCursor] = useState(false);
//   const offers = [
//     {
//       img: "https://s3-alpha-sig.figma.com/img/ce4b/6f2b/26f62464757cda973cd6c00fb36f8186?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H~LOh~0KthPzoUoAst~jnIo44nFeXhCX~Ea4pq5aWTMe0hnX4hYInk3DL5gNN4sFxMGmRqgM6Sv3qbuMP~72rjS1LIUjfu~CBjwjgj4JWjhHX7Jjq95bjHKm7S-P1rF18ZYsoTG~XwxvHtpM5bwuTjkV9H4lUNB85CCc8FdZNVADhFsXrwhRpMgcUhZkp44i33EabvdWX8wf1IZG2DLt8whIx4z1Cx9W6s4JupgpnujzeiW8d0YisCncmSkpBnt2qdg5OAp7i1x68kaOoB8wfhyvN-3Q4YCiOV9V-GyXhekuzBbPGHXSGPFOSckidB5taqgKGVCevl~In-M6R1uBLw__",
//       title: "MALABAR GOLD",
//       location: "Shop No. 01, Ground Floor"
//     },
//     {
//       img: "https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?t=st=1743419007~exp=1743422607~hmac=1b7a73bee87eea12631cd21d5bb27283e0e69a03c4f5987eb73ea5df66113884&w=740",
//       title: "NEW DIAMOND DEAL",
//       location: "Shop No. 02, First Floor"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevoffer = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? offers.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextoffer = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === offers.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextoffer()
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <main className="overflow-x-hidden w-full  mx-auto">
//       {/* Hero Section */}
//       <section
//   className="relative h-[90vh] w-full  sm:h-screen "
//   onMouseEnter={() => setIsHovering2(true)}
//   onMouseLeave={() => setIsHovering2(false)}
// >
//   {/* Background Video */}
//   <div className="absolute inset-0 z-[1]">
//     <img
//       className="absolute inset-0 w-full h-full object-cover"
//       src="https://s3-alpha-sig.figma.com/img/bb87/675c/c1f91f8a44ba53bf704b8d1cbfcc7783?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rZIMLF5~slhCKsU9D7pPAEY-hU8urhWgi~OfbrJJWuTh6ax5~vVgOltK8qDO6eWnZS~rll3yAwBjkJkGHbPapWP71215Bvw3wh6I1f9fxV-0sKtQW08dyXYF2R4VULCw74~UNlcTaJwlCp8vKMF6l-YIsrN931Z5~AKCWTIWCjBccQlFN-PeRo5Whgl77i0tZEuFQ4qMOUKGAbYPgDCn7MHq1guL2GpBv4rVnsxTWOp6W7W6RfiE3MyryH0uk~flK1aEbaqyTpHSLdZxIfqVybmAjjbWla1Zph8Jeb6djy-EPh3A8Zs2cYi7terp7vu4JBJvVSxum11K4~cubcxSdQ__"
//       alt=""
//     />
//   </div>

//   {/* Navigation */}
//   <div
//     className="mx-auto relative z-10 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full max-w-[1400px]"
//     onMouseEnter={() => setHideCursor(true)}
//     onMouseLeave={() => setHideCursor(false)}
//   >
//     <a href="/" className="flex-shrink-0">
//       <img
//         src={UwMallLogo || "/placeholder.svg"}
//         alt="UW Mall Logo"
//         className="w-16 sm:w-20 md:w-24 lg:w-28"
//         style={{
//           mixBlendMode: "multiply",
//           filter: "brightness(0) invert(1)",
//         }}
//       />
//     </a>

//     {/* Desktop Navigation */}  
//     <nav className="hidden md:flex space-x-6 lg:space-x-6 xl:space-x-12 text-white text-[8px] lg:text-[11px]  uppercase tracking-wider">
//       <a href="/" className="border-b border-white pb-1 transition-all hover:opacity-80">EXPLORE OUR MALL</a>
//       <a href="/AboutUs" className="hover:border-b hover:border-white pb-1 transition-all">ABOUT</a>
//       <a href="/Brands" className="hover:border-b hover:border-white pb-1 transition-all">BRANDS</a>
//       <a href="/Stories" className="hover:border-b hover:border-white pb-1 transition-all">STORIES</a>
//       <a href="/Career" className="hover:border-b hover:border-white pb-1 transition-all">CAREERS</a>
//       <a href="/Contactus" className="hover:border-b hover:border-white pb-1 transition-all">CONTACT</a>
//     </nav>

//     {/* Mobile Hamburger Icon */}
//     <button onClick={toggleMobileMenu} className="text-white ">
//       <MoreHorizontal className="w-6 h-6 sm:w-8 sm:h-8" />
//     </button>
//   </div>

//   {/* Mobile Menu */}
//   <div
//     className={`absolute top-16 left-0 w-full bg-white text-black p-6 space-y-4 md:hidden transform ${
//       isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//     } transition-all duration-300 ease-in-out z-[999]`}
//   >
//     <a href="/" className="block text-lg font-medium">EXPLORE OUR MALL</a>
//     <a href="/AboutUs" className="block text-lg font-medium">ABOUT</a>
//     <a href="/Brands" className="block text-lg font-medium">BRANDS</a>
//     <a href="/Stories" className="block text-lg font-medium">STORIES</a>
//     <a href="/Career" className="block text-lg font-medium">CAREERS</a>
//     <a href="/Contactus" className="block text-lg font-medium">CONTACT</a>
//   </div>

//   {/* Custom Cursor */}
//   {!hideCursor && <CustomCursor isActive={isHovering2} />}

//   {/* Hero Content */}
//   <div className="relative z-10 flex flex-col justify-center items-center h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] text-white text-center px-4">
//   <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light tracking-[0.2em] mb-4 " style={{fontWeight:500}}>
//   DUBAI'S NEW GOLD DESTINATION
// </h1>
//   </div>
// </section>

//       {/* Redefining Luxury Section */}
//       <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1300px] mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//           <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 md:mb-0">
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 uppercase ">
//               REDEFINING
//               <br />
//               LUXURY
//             </h2>
//             <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg mt-8">
//               More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover!
//             </p>
//           </div>
//           {/* UWM Text */}
//           <div style={{fontWeight:900 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl  text-[#00c5b4] md:-mt-16 lg:-mt-20 animate-slideInFromRight">
//             UWM.
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
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
//       <section className="py-6 sm:py-8 md:py-10 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1300px] mx-auto -mt-6"> 
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <div className="flex items-center ">
//             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00c2b0] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Explore</h3>
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
//         <hr className="border-2 border-black mb-4 md:mb-2" />
//         <div ref={scrollRef3} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar mt-4">
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
// <div key={ind} className="group cursor-pointer min-w-full sm:min-w-[300px] md:min-w-[445px]">
// <div className="overflow-hidden mb-2 sm:mb-3 md:mb-4 ">
//                 <img
//                   src={item.img || "/placeholder.svg"}
//                   alt={item.title}
//                   // width={600}
//                   // height={400}
//                   className="w-full  h-[563px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
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

//       {/* Brands Section */}
//       <section className="py-6 sm:py-8 md:py-10 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-white max-w-[1300px] mx-auto">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <div className="flex items-center">
//             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff6b35] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Brands</h3>
//           </div>
//           <div className="flex space-x-1 md:space-x-2">
//             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
//               <ChevronLeft onClick={handlePrev2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
//             </button>
//             <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
//               <ChevronRight onClick={handleNext2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
//             </button>
//           </div>  
//         </div>
//         <hr className="border-black border-2 mb-4 md:mb-6" />
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
//           CREATE YOUR OWN
//           <br />
//           EXPERIENCE AT <span className="text-[#ff6b35] font-extrabold">UW MALL</span>
//         </h2>
//         <div ref={scrollRef2} className="flex mb-14 sm:mb-14 lg:mb-0 space-x-20 sm:space-x-20 md:space-x-40 overflow-x-auto scrollbar-hide no-scrollbar mt-2">
//           {Brands.map((brand, index) => (
//             <div
//               key={index}
//               className={`${brand.mt} ${brand.mmt} flex-shrink-0 w-20 sm:w-40 md:w-48 lg:w-56 xl:w-56 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center group`}
//             >
//               <img
//                 src={brand.img || "/placeholder.svg"}
//                 alt="Brand"
//                 width={100}
//                 height={50}
//                 className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Offers Section */}
//       <section className="py-8 sm:py-10 md:py-12 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#1a1a1a]  text-white mx-auto -mt-10">
//       <div className="flex flex-col md:flex-row justify-between sm:items-center md:items-start max-w-[1300px] mx-auto">
//         {/* Left Content */}
//         <div className="mb-8 md:mb-0 flex flex-col text-center md:text-left md:items-start items-center">
//           <div className="flex items-center mb-3 sm:mb-6">
//             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff3366] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-lg uppercase font-medium">Latest Offers</h3>
//           </div>
//           <h4 className="text-[#ff3366] text-base sm:text-lg md:text-3xl mb-2 font-medium mt-8 reponsivesize">
//             NEVER MISS A DEAL!
//           </h4>
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[41px] font-bold uppercase tracking-wider mb-4 md:mb-6 reponsivesize">
//             GET THE LATEST<br />OFFERS HERE
//           </h2>
//           <button className="border border-[#FF3366] px-4 py-2 md:px-6 md:py-2 rounded-full uppercase text-xs md:text-sm hover:bg-[#FF3366] hover:text-white transition-colors mt-6 md:mt-8">
//             View All
//           </button>
//         </div>
//         {/* Right Content (Image & Navigation) */}
//         <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 w-full md:w-auto">
//           {/* Navigation Buttons */}
//           <div className="flex space-x-2 md:mb-6">
//             <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" onClick={handlePrevoffer}>
//               <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35]" />
//             </button>
//             <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors" onClick={handleNextoffer}>
//               <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35]" />
//             </button>
//           </div>
//           {/* Offer Image & Details */}
//           <div className="w-full max-w-[690px] relative">
//             <div className="relative rounded-lg overflow-hidden w-full mx-auto sm:mx-auto sm:w-[500px] md:w-[350px] lg:w-[630px] h-[320px] sm:h-[420px] md:h-[500px] lg:h-[699px] responsiveImage">
//               <img src={offers[currentIndex].img} alt="Offer" className="sm:mx-auto h-full w-full object-cove r" />
//             </div>
//             <div className="mt-3 text-center md:text-left">
//               <h3 className="font-bold text-base sm:text-lg md:text-xl">{offers[currentIndex].title}</h3>
//               <p className="text-gray-400 text-xs sm:text-sm md:text-base">{offers[currentIndex].location}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//       {/* Amenities Section */}
//       <section className="py-8 sm:py-10 md:py-12 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 max-w-[1300px] mx-auto">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <div className="flex items-center ">
//             <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#b8d12a] mr-2 md:mr-3"></div>
//             <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Amenities</h3>
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
//         <hr className=" border-2 border-black mb-4 md:mb-6" />
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-8">
//           ELEVATE YOUR EXPERIENCE <br  /> AT <span className="text-[#bbbf34]">UW MALL</span>
//         </h2>
//         <div className="overflow-hidden w-full relative">
//           <div ref={scrollRef} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar">
//             {amenitiesList.map((amenity, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col  items-center text-center p-2 transition-transform hover:scale-105 min-w-[110px] sm:min-w-[110px] md:min-w-[150px]"
//               >
//                 <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-900 flex items-center justify-center mb-2">
//                   <span className="text-lg sm:text-xl md:text-2xl">{amenity.icon}</span>
//                 </div>
//                 <span className="text-xs sm:text-sm md:text-base leading-tight">{amenity.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//         <Footer />
//     </main>
//   )
// }


"use client"

import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ParkingCircle,
  Gift,
  Car,
  Church,
  CreditCard,
  Baby,
  Bike,
} from "lucide-react"
import UwMallLogo from "../../assets/UW-Mall-Header-Logo.png"
import { CarTaxiFront } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import "../../App.css"
import "./home.css"
import Footer from "../../Components/Footer/Footer"
import Swal from "sweetalert2"
import { X } from "lucide-react"
import graybackground from "../../assets/graybackground.jpg"


const CustomCursor = ({ isActive }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined" || !isActive) return

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", moveCursor)
    return () => {
      document.removeEventListener("mousemove", moveCursor)
    }
  }, [isActive])

  if (typeof window === "undefined" || !isActive) return null

  return (
    <div
      className="fixed transition-transform duration-100 ease-out z-[999] pointer-events-none hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      
    >
      <div className="text-center bg-[#dbb85d] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-28 lg:h-28 flex flex-col items-center justify-center">
        <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black">Watch</div>
        <div className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[20px] text-black -mt-[9px]">
          Reel
        </div>
      </div>
      <div className="text-white mx-auto text-xl font-bold ml-2">UW MALL</div>
    </div>
  )
}

export default function Home() {
  const amenitiesList = [
    { name: "Parking", icon: <ParkingCircle size={60} strokeWidth={1} /> },
    { name: "Gift Vouchers", icon: <Gift size={60} strokeWidth={1} /> },
    { name: "Valet Parking", icon: <Car size={60} strokeWidth={1} /> },
    { name: "Taxi Service", icon: <CarTaxiFront size={60} strokeWidth={1} /> },
    { name: "Prayer Room", icon: <Church size={60} strokeWidth={1} /> },
    { name: "ATM", icon: <CreditCard size={60} strokeWidth={1} /> },
    { name: "Feeding Room", icon: <Baby size={60} strokeWidth={1} /> },
    { name: "Scooter Parking", icon: <Bike size={60} strokeWidth={1} /> },
    { name: "Parking", icon: <ParkingCircle size={60} strokeWidth={1} /> },
    { name: "Gift Vouchers", icon: <Gift size={60} strokeWidth={1} /> },
    { name: "Valet Parking", icon: <Car size={60} strokeWidth={1} /> },
    { name: "Taxi Service", icon: <CarTaxiFront size={60} strokeWidth={1} /> },
    { name: "Prayer Room", icon: <Church size={60} strokeWidth={1} /> },
    { name: "ATM", icon: <CreditCard size={60} strokeWidth={1} /> },
    { name: "Feeding Room", icon: <Baby size={60} strokeWidth={1} /> },
    { name: "Scooter Parking", icon: <Bike size={60} strokeWidth={1} /> },
  ];



  const scrollRef = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollRef3 = useRef(null)
  const offersRef = useRef(null)

  const [isHovering, setIsHovering] = useState(false)
  const [isOffersVisible, setIsOffersVisible] = useState(false)

  const handleNext = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
      }
    }
  }

  const handlePrev = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        })
      } else {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
      }
    }
  }

  const handleNext2 = () => {
    if (scrollRef2.current) {
      if (scrollRef2.current.scrollLeft + scrollRef2.current.offsetWidth >= scrollRef2.current.scrollWidth) {
        scrollRef2.current.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollRef2.current.scrollBy({ left: 200, behavior: "smooth" })
      }
    }
  }

  const handlePrev2 = () => {
    if (scrollRef2.current) {
      if (scrollRef2.current.scrollLeft === 0) {
        scrollRef2.current.scrollTo({
          left: scrollRef2.current.scrollWidth,
          behavior: "smooth",
        })
      } else {
        scrollRef2.current.scrollBy({ left: -200, behavior: "smooth" })
      }
    }
  }

  const handleNext3 = () => {
    if (scrollRef3.current) {
      if (scrollRef3.current.scrollLeft + scrollRef3.current.offsetWidth >= scrollRef3.current.scrollWidth) {
        scrollRef3.current.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollRef3.current.scrollBy({ left: 350, behavior: "smooth" })
      }
    }
  }

  const handlePrev3 = () => {
    if (scrollRef3.current) {
      if (scrollRef3.current.scrollLeft === 0) {
        scrollRef3.current.scrollTo({
          left: scrollRef3.current.scrollWidth,
          behavior: "smooth",
        })
      } else {
        scrollRef3.current.scrollBy({ left: -200, behavior: "smooth" })
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext2()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext3()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Set up intersection observer for the offers section
  useEffect(() => {
    if (!offersRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffersVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }, // Trigger when 20% of the element is visible
    )

    observer.observe(offersRef.current)
    return () => {
      if (offersRef.current) {
        observer.unobserve(offersRef.current)
      }
    }
  }, [])

  const Brands = [
    {
      img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
      mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
      top: "-12px",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
      mt: "mt-[14px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
      top: "-18px",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
      mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
      top: "-12px",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
      mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
      top: "-18px",
      mt: "-mt-3",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/e0ef/f5f7/24c784f206a6256c97a7eb90dfcce0f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fkBe5Xp2SEjqFJovbWtpMDNaPg3ajf12~uBKg7owf9FjB2DiRbEs3ZYnjuXXTNgySy0mTUFTM~chwoglJ4HZ-z1jUXfZ0DqKzNS1gEaUI7Rk2EKpwkz3dWniPoVT~MAUsBuTBNtj0QmP6JFf8dOYeA2ek9~7BVHMirWyGb8DTQUoRK1MpYnJUUJD7qlM6lAQg4CxzesGR86RNdgypQtJMzfLRVgWQw~kIG-0SojeJMLdgyWCGeTUky-beI~mQbX5-lJfOCb0l6L3zEAC5Vjzf-iMqpaMLJ7ilxnftpF4tmJyKAxmGNTjTR9t2JVGewBoNGzltBtIVtFGmZQJbtZ1tg__",
      mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/75a5/f3ef/3dc1b76fffd388d46769627a7402645f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eR8AD3gpomMZ-1as6ZLEeAmX5R2s0bqH7l0OUJDy~vuj4FfrhP~Z8ufxZVDJr5EMN7z5i54ukTZgAiQtWXdsayvtuixP1uKuUVIfWbJCMxtnX5RRIRkftzQaS08sDEiyTP0mEDRA9Awbb8C~gF~2rlXXdn9CVXYIZxs-BUM90c8Qe6~uo7BX2jpx~ues~EURLm68TbS7ph8VirKANmRcmzuHJLC0H8qBjRJ5LBUdI7rQq88EWuq6ocbTodZhn7wfbE7VP6OVABrblUTaM2N6s1W8ElWolP5~O8GfYijU2NSLHjlk11lTiQFTwuAUAjqJd15~L60rlu5uUP9J6cS5IA__",
      top: "-12px",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4d72/d170/2eaeecda27a5ea3765265f947a36858e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNMxUEKgoamYFNx0mEI~etC9VoL~THWuZDlo~dnAF5ulsz9lsnzf03G6PjWTEGNfI7s1MkJHdgAomlUfi2ZVcqBsm3jQ8H0mj4Ag9NekgVa24zR12W~r22sLVPF8f9pCWjL4tWbuVBlfJ6InCbg6Mu-DnJJHixQ8SFLHXKqznPPKeN4LIMMNv0COZOrPafPS9wa-oVHtncRYAovDK-SCZpWCLDY0VM6agwuksdfiocYONRgYyE-vx8JL49gd6xJjIxkE03R9XFDA0TgEt-JJ4uP9OSug9kuzgy8PGNhdo1kjXMdFI3xON26SNWupySpJxN4B-WWfP4WTPfSOh29ebA__",
      mt: "mt-[12px] h-40 w-40 sm:mt-[20px] lg:mt-[40px]",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/4809/5628/7eecb7445e064336e6c6a6c577d501af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bxwd456HtREwhmv9EYugzJdkYNH~03xovnfpnBMwZULu7H-Y6hDuu36VbiOOcFlrvsEJ9SqeP69OYUeuDjiEq-aN4yRGC1kyBIZjTWClmDLVCnuNJmrDZqc8eV~-0o~boOQFkVRYQalzRhGJrAi9fhMPYoTWQWKt4Vp4sMpbz5XTCZo-U2l-x2u94sSlwqMlN4aHm3CvAGkrfA2L3Rvgibf8LFD3-M8TJwMCb84jMNoAMM7rA5JRBNAZPizIpzsR25jKHCPVWH6NHW0b6X2LOQzjbjGaYiA~E-rkXMpX1d3fSUA5tX8Wv56rXjiO0~YC3oniqoKyrzeucC0LJxJWjw__",
      top: "-18px",
      mt: "-mt-3",
    },
  ]
  const [isHovering2, setIsHovering2] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }
  const [hideCursor, setHideCursor] = useState(false)
  const offers = [
    {
      img: "https://s3-alpha-sig.figma.com/img/ce4b/6f2b/26f62464757cda973cd6c00fb36f8186?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H~LOh~0KthPzoUoAst~jnIo44nFeXhCX~Ea4pq5aWTMe0hnX4hYInk3DL5gNN4sFxMGmRqgM6Sv3qbuMP~72rjS1LIUjfu~CBjwjgj4JWjhHX7Jjq95bjHKm7S-P1rF18ZYsoTG~XwxvHtpM5bwuTjkV9H4lUNB85CCc8FdZNVADhFsXrwhRpMgcUhZkp44i33EabvdWX8wf1IZG2DLt8whIx4z1Cx9W6s4JupgpnujzeiW8d0YisCncmSkpBnt2qdg5OAp7i1x68kaOoB8wfhyvN-3Q4YCiOV9V-GyXhekuzBbPGHXSGPFOSckidB5taqgKGVCevl~In-M6R1uBLw__",
      title: "MALABAR GOLD",
      location: "Shop No. 01, Ground Floor",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?t=st=1743419007~exp=1743422607~hmac=1b7a73bee87eea12631cd21d5bb27283e0e69a03c4f5987eb73ea5df66113884&w=740",
      title: "NEW DIAMOND DEAL",
      location: "Shop No. 02, First Floor",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevoffer = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1))
  }

  const handleNextoffer = () => {
    setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextoffer()
    }, 3000)
    return () => clearInterval(interval)
  }, [])


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
    <main className="overflow-x-hidden w-full mx-auto" >
      {/* Hero Section */}
      <section
        className="relative h-[90vh] w-full sm:h-screen"
        onMouseEnter={() => setIsHovering2(true)}
        onMouseLeave={() => setIsHovering2(false)}
      >
        {/* Background Video */}
        {/* <div className="absolute inset-0 z-[1]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://streamable.com/kbe5cg"
            autoPlay
            muted
            loop
            playsInline
          />

        </div> */}
        <div className="absolute inset-0 z-[1]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/bb87/675c/c1f91f8a44ba53bf704b8d1cbfcc7783?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZmGcFhBf8c~drSjQr0y3ec5UhpIKrgVx1wnHC6OX~ca-oiMDwoI8om5H0yZ0OujHa3p-q9uu3QGbh-GVES5PV5mzXyEw9FmonIrXFp8wzP2vaEOkXsgWBOotcBdtzPIvj1nt1djEX9pQlhmHI6WC3bAwmm8AZVNlEZYti3Gl6QbLQIN9HojMJwj8B1nCf-faYP-TnCMNn2w4uhJEW6A8fKPExkurbCCZF5UuoTxoZhQoT-ejPrGmIV8a3o2pXSBcU8HdRljbzabffadqpaApplyRyLwofi-jxloD5bGrDYGHZ5r7MfYydIbTUeFVWUFaIjJSu2dLj6Fs0x2tfyfSVg__"
            alt=""
          />
        </div>

        {/* Navigation */}
        <div
          className="mx-auto relative z-10 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full max-w-[1400px]"
          onMouseEnter={() => setHideCursor(true)}
          onMouseLeave={() => setHideCursor(false)}
        >
          <a href="/" className="flex-shrink-0">
            <img
              src={UwMallLogo || "/placeholder.svg"}
              alt="UW Mall Logo"
              className="w-16 sm:w-20 md:w-24 lg:w-28"
              style={{
                mixBlendMode: "multiply",
                filter: "brightness(0) invert(1)",
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-6 xl:space-x-12 text-white text-[8px] lg:text-[11px]  uppercase tracking-wider mt-2">
            <a href="/" className="hover:border-b hover:border-white  pb-1 transition-all hover:opacity-80 h-6">
              EXPLORE OUR MALL
            </a>
            <a href="/AboutUs" className="hover:border-b hover:border-white pb-1 transition-all h-6">
              ABOUT
            </a>
            <a href="/Brands" className="hover:border-b hover:border-white pb-1 transition-all h-6">
              BRANDS
            </a>
            <a href="/Stories" className="hover:border-b hover:border-white pb-1 transition-all h-6">
              STORIES
            </a>
            <a href="/Career" className="hover:border-b hover:border-white pb-1 transition-all h-6">
              CAREERS
            </a>
            <a href="/Contactus" className="hover:border-b hover:border-white pb-1 transition-all h-6">
              CONTACT
            </a>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button onClick={toggleMobileMenu} className="text-white ">
            <MoreHorizontal className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white text-black p-6 space-y-4 md:hidden transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } transition-all duration-300 ease-in-out z-[999]`}
        >
          <a href="/" className="block text-lg font-medium">
            EXPLORE OUR MALL
          </a>
          <a href="/AboutUs" className="block text-lg font-medium">
            ABOUT
          </a>
          <a href="/Brands" className="block text-lg font-medium">
            BRANDS
          </a>
          <a href="/Stories" className="block text-lg font-medium">
            STORIES
          </a>
          <a href="/Career" className="block text-lg font-medium">
            CAREERS
          </a>
          <a href="/Contactus" className="block text-lg font-medium">
            CONTACT
          </a>
        </div>

        {/* Custom Cursor */}
        {!hideCursor && <CustomCursor isActive={isHovering2} />}

        {/* Hero Content */}
        <div onClick={togglePopup} className="relative z-10 flex flex-col justify-center items-center h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] text-white text-center px-4">
          <h1
            className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light tracking-[0.2em] mb-4 "
            style={{ fontWeight: 500 }}
          >
            DUBAI'S NEW GOLD DESTINATION
          </h1>
        </div>
      </section>

      {/* Redefining Luxury Section */}
      <section
        className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-transparent max-w-[1300px] mx-auto "

      >
        {/* <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${graybackground})`, // Set the background image
      backgroundPosition:'center',
      opacity: 0.1, // Apply opacity to the background
      backgroundSize:'100%'
    }}
  ></div> */}
        <div className="flex flex-col md:flex-col justify-between items-start md:items-start">

          <div className="w-[100%] max-w-full md:max-w-[1300px] flex justify-between items-center">

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 uppercase ">
              A new Dawn

              <h2 className="md:mt-2">

                of Luxury
              </h2>
            </h2>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-[#00c5b4] font-black  -mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              UWM.
            </div>



          </div>
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 md:mb-0">

            <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg mt-0">
              {/* More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover! */}
              Discover a world where elegance meets exclusivity. UW Mall is Dubai’s new gold destination, offering a
              seamless blend of premium gold jewelry, lifestyle, and fashion brands—all under one roof. Experience
              luxury like never before.
            </p>
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
      <section className="py-6 sm:py-8 md:py-10 lg:py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-transparent max-w-[1300px] mx-auto -mt-6"  >


        <div className="flex justify-between items-center mb-4 sm:mb-8">
          <div className="flex items-center ">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00c2b0] mr-2 md:mr-3"></div>
            <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Explore</h3>
          </div>
          <div className="flex space-x-1 md:space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft onClick={handlePrev3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight onClick={handleNext3} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00c5b4]" />
            </button>
          </div>
        </div>
        <hr className="border-2 border-black mb-4 md:mb-2" />
        {/* ref={scrollRef3 */}
        <div ref={scrollRef3} className="flex space-x-6 overflow-x-scroll scrollbar-hide no-scrollbar mt-[32px]">
          {[
            {
              title: "Gold",
              img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
              description: "Timeless craftsmanship, radiant designs, and pure elegance. Elevate your jewelry collection with the finest pieces from globally renowned brands."
            },
            {
              title: "Lifestyle",
              img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
              description: "Elevate your everyday with handpicked luxury essentials. From decor that transforms your space to accessories that add finesse to your routine, indulge in the finer things."
            },
            {
              title: "Fashion",
              img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
              description: "Step into the world of high-end fashion, where trendsetting designs, luxury craftsmanship, and iconic labels come together to elevate your unique style and confidence. "
            },
            {
              title: "Gold",
              img: "https://s3-alpha-sig.figma.com/img/7f21/1475/60124caa244c41608b7fb8b7336b6eb4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rPWQ24RwiQqUdQ3fshaqC8h7Kmi~cDg0Gm5FWyUHfW8xUFZkqaJsIfwGLKqYzUYCtiWshMTDYV2v-RNOhROXFc7~qe2PkxIk1SN-BUP1i9Q5B9extE0rPMh56CTyGrWiAX1bW2336c3Mi-3eyr5Z8hW9ob3DOEuCG1ZoJgqbRsv7pSiSCEg0cvJWbKUpO7UXK54lpnmKxDy8hSzsr4GNgYr37MpCl-yjG7yvcUSVUipmjtnEpUwdQDy6CEiRJErKgdek-ok9G8yWP60KpRPZJD130XjSeKRuBfkgSNk5fB-prfpUoNrhIMnkz32C~fBqZphNN593zbKeWv2WB~u7TA__",
              description: "Timeless craftsmanship, radiant designs, and pure elegance. Elevate your jewelry collection with the finest pieces from globally renowned brands."
            },
            {
              title: "Lifestyle",
              img: "https://s3-alpha-sig.figma.com/img/a1f8/6173/87bb30f2d8845ffa53aefa2960967a21?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNT17p2Q7DJwqb4S8EwJ7PhpP1vR4tKQv2h9ipPcyjxSQXX~lN3BM-TFNCjSdz1gTHJlMVRgHbEqGXpZZyWXelnAR1Sfxr0XShVmVPgFatMsMiqhmKuk5MFh~AZiJPk6fBxxb2M88NWf9sTnGa5PEoElqufBS2haMllEq0NuBA790KJveUO2vaGaL1KN9RDnFO6x~f-1TrDgPRvdEfe6Z3dJkhoOtIQGL3n4Fz59fUgJza380gmpCQ0NZ2vF-RhhrKsnj45rnbbSVj2kpQO24~3qIN35A-ClxkKX65~yeKvZmmyuhCohLq8hXbc~NAZ5fopxjmhlple-ZUOuQklsUQ__",
              description: "Elevate your everyday with handpicked luxury essentials. From decor that transforms your space to accessories that add finesse to your routine, indulge in the finer things."
            },
            {
              title: "Fashion",
              img: "https://s3-alpha-sig.figma.com/img/08cb/e57b/f414e5109e63c21d0114314bf799f1e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNQP2grQj7BEikrON390iOZDtaj1v-bw5vfJ3r~yCP1nMjRESE~GcOyrPmwYEmbpVzv--69L2LUYLMYPxqNCe652cJKjllv5WHVPGEHbRenWc5KanKzDu8EYrLSwYviVE1A4HzBPGQsw5hVnWmuztysMzRvNQfSXP3JVdklr5iwQad9~jH53GbpOmo3ccBgGgwBAE~CmNuTwryJsIqCXGFMOekCUXDQql3gWkkwuXtEkRmsDmUvsVHWuNvZw3V~NwM6YCH0Nza0O81VUYPgRdfTJ6KXxQ~F1PSXTt3mhbj0W2rvyJb0vkHKUIfefnrSCGzJhKVR9q2kxb0Z6WgHEMA__",
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

      {/* Brands Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-2 lg:mt-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-2 bg-transparent  max-w-[1300px] mx-auto"  >


        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff6b35] mr-2 md:mr-3"></div>
            <h3 className="text-xs md:text-lg uppercase font-medium ml-4">Brands</h3>
          </div>
          <div className="flex space-x-1 md:space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft onClick={handlePrev2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight onClick={handleNext2} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#FF6B35]" />
            </button>
          </div>
        </div>
        <hr className="border-black border-2 mb-4 md:mb-8" />
        <h2 className="text-md sm:text-md md:text-2xl lg:text-3xl font-bold uppercase mb-4 md:mb-6 lg:mb-20">
          Shop from your favourite

          <br />
          brands!  <span className="text-[#ff6b35] font-extrabold">UW MALL</span>
        </h2>
        <div
          ref={scrollRef2}
          className="flex mb-14 sm:mb-14 lg:mb-0 space-x-20 sm:space-x-20 md:space-x-40 overflow-x-auto scrollbar-hide no-scrollbar mt-2"
        >
          {Brands.map((brand, index) => (
            <div
              key={index}
              className={`${brand.mt} ${brand.mmt} flex-shrink-0 w-20 sm:w-40 md:w-48 lg:w-56 xl:w-56 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center group`}
            >
              <img
                src={brand.img || "/placeholder.svg"}
                alt="Brand"
                width={100}
                height={50}
                className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Latest Offers Section */}
      <section
        ref={offersRef}
        className={`py-8 sm:py-10 md:py-12 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-colors duration-500 ${isOffersVisible ? "bg-[#1a1a1a] text-white" : "bg-transparent text-black"} mx-auto sm:mt-2 lg:mt-22   `}

      >

        <div className="flex flex-col md:flex-row justify-between sm:items-center md:items-start max-w-[1290px] mx-auto">
          {/* Left Content */}
          <div className="mb-8 md:mb-0 flex flex-col text-center md:text-left md:items-start items-center">
            <div className="flex items-center mb-3 sm:mb-6">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff3366] mr-2 md:mr-3"></div>
              <h3 className="text-xs md:text-lg uppercase font-medium">Eid Offers</h3>
            </div>
            <h4 className="text-[#ff3366] text-base sm:text-lg md:text-3xl mb-2 font-medium mt-8 reponsivesize">
              {/* NEVER MISS A DEAL! */}
              {/* Look out for the best deals */}
              COMING SOON
            </h4>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[41px] font-bold uppercase tracking-wider mb-4 md:mb-6 reponsivesize">
              Shop Exclusive, Shop Best!

              {/* <br />
              OFFERS HERE */}
              {/* Never Miss a Deal!  */}
            </h2>
            <button className="border border-[#FF3366] px-4 py-2 md:px-6 md:py-2 rounded-full uppercase text-xs md:text-sm hover:bg-[#FF3366] hover:text-white transition-colors mt-6 md:mt-8" onClick={togglePopup}>
              View All
            </button>
          </div>
          {/* Right Content (Image & Navigation) */}
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 w-full md:w-auto">
            {/* Navigation Buttons */}
            <div className="flex space-x-2 md:mb-16">
              <button
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handlePrevoffer}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35]" />
              </button>
              <button
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleNextoffer}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35]" />
              </button>
            </div>
            {/* Offer Image & Details */}
            <div className="w-full max-w-[690px] relative">
              <div className="relative rounded-lg overflow-hidden w-full mx-auto sm:mx-auto sm:w-[500px] md:w-[350px] lg:w-[630px] h-[320px] sm:h-[420px] md:h-[500px] lg:h-[699px] responsiveImage">
                <img
                  src={offers[currentIndex].img || "/placeholder.svg"}
                  alt="Offer"
                  className="sm:mx-auto h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 text-center md:text-left">
                <h3 className="font-bold text-base sm:text-lg md:text-xl">{offers[currentIndex].title}</h3>
                <p className={`text-xs sm:text-sm md:text-base ${isOffersVisible ? "text-gray-400" : "text-gray-600"}`}>
                  {offers[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent xl:px-2 max-w-[1300px] mx-auto "   >

        <div className="flex justify-between items-center mb-4 sm:mb-6 ">
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
          {/* ELEVATE YOUR EXPERIENCE <br /> AT <span className="text-[#bbbf34]">UW MALL</span> */}
          {/* Indulge in Luxury—Because  <br />Luxury  Should Feel Effortless  */}
          Luxury Elegance at  <br /> <span className="text-[#bbbf34]">UW Mall</span>

          {/* <span className="text-[#bbbf34]">UW MALL</span> */}
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

      <style jsx global>{`
        body.popup-open {
          background-color: rgba(0, 0, 0, 0.8);
          transition: background-color 0.3s ease;
        }
      `}</style>

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
      <Footer />
    </main>
  )
}

