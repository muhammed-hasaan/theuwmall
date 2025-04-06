import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader";
import Footer from "../../Components/Footer/Footer";
import { Mail, Phone } from "lucide-react";

export default function Contactus() {
  return (
    <div>
      <AllPageHeader />

      <div className="w-full max-w-[1340px] mx-auto bg-transparent font-sans px-4 md:px-8 mb-28">
        {/* Header */}
        <div className="flex items-center gap-2 py-3 mt-16">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-sm font-medium uppercase tracking-wide">LEASING</span>
        </div>  

        {/* Divider */}
        <div className="w-full h-px bg-[#000000]"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Left Column - Heading */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
              EXPLORE LEASING <br />
              OPPORTUNITIES WITH US
            </h1>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Contact Number*"
                className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500">
                <option value="" disabled selected>
                  Select Business*
                </option>
                <option value="retail">Retail</option>
                <option value="office">Office</option>
                <option value="commercial">Commercial</option>
              </select>
              <input
                type="text"
                placeholder="Address*"
                className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full px-4 py-3 rounded-2xl border border-black bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
            ></textarea>

            <div className="flex justify-start">
              <button
                type="submit"
                className="px-6 py-2 bg-white border-2 border-orange-500 text-orange-500 rounded-full text-sm uppercase transition hover:bg-orange-500 hover:text-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#000000] my-4 mt-20"></div>

        {/* Map and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Map */}
          <div className="relative rounded-lg overflow-hidden w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097897!2d144.95373631531672!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1633071291021!5m2!1sen!2s"
              className="w-full h-64 sm:h-80 rounded-lg border"
              loading="lazy"
            ></iframe>
             <div className="mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#bbbf34]"></div>
                <span className="text-xs font-medium uppercase tracking-wide">
                  OFFICE ADDRESS
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Khalid Bin Al-Waleed Rd, 312 118 Street,
                <br />
                Po Box No. 87556, Unique World Building, Al Hamriyah,
                <br />
                Dubai - United Arab Emirates
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10 flex flex-col justify-start md:justify-end w-full h-[310px]">
      <div className="w-full flex justify-start space-x-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bbbf34]"></div>
            <span className="text-xs font-medium uppercase tracking-wide">
              GENERAL ENQUIRY
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-gray-600" />
              admin@theuwmall
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} className="text-gray-600" />
              +971 50 822 5431
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bbbf34]"></div>
            <span className="text-xs font-medium uppercase tracking-wide">
              GENERAL ENQUIRY
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-gray-600" />
              admin@theuwmall
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} className="text-gray-600" />
              +971 50 822 5431
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start space-x-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bbbf34]"></div>
            <span className="text-xs font-medium uppercase tracking-wide">
              GENERAL ENQUIRY
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-gray-600" />
              admin@theuwmall
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} className="text-gray-600" />
              +971 50 822 5431
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bbbf34]"></div>
            <span className="text-xs font-medium uppercase tracking-wide">
              GENERAL ENQUIRY
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-gray-600" />
              admin@theuwmall
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} className="text-gray-600" />
              +971 50 822 5431
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
