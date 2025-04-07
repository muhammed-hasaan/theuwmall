// import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
// import Footer from "../../app/Components/Footer/footer"

// import AllPageHeader from "../../components/AllPageHeader/AllPageHeader"
// import Footer from "../../Components/Footer/footer"
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
import Footer from "../../Components/Footer/Footer"
export default function CareerPage() {
    return (
        <div>
            <AllPageHeader />
      <div className="w-full max-w-[1340px] mx-auto px-4 py-8  mt-10 ">
        {/* Header with Career title and search */}
        <div className="flex items-center justify-between border-b-2 border-gray-900 pb-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm font-medium tracking-wider">CAREER</span>
          </div>
          <div className="relative w-48 md:w-64 flex justify-start items-center">
    <svg 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#ee436d]" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z" />
    </svg>
    <input
        type="text"
        placeholder="SEARCH"
        className="border border-[#ee436d] rounded-full text-xs px-10 py-1 w-full focus:outline-none h-8"
    />
</div>

        </div>
  
        {/* Job Listings */}
        <div className="space-y-12 w-full max-w-[1300px] mb-22">
          {/* Marketing Executive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4">MARKETING COORDINATOR</h2>
            </div>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                Are you a creative thinker with a passion for marketing and brand growth? Join our dynamic team as a
                Marketing Coordinator and play a key role in shaping impactful campaigns, engaging audiences, and driving
                business success.
              </p>
  
              <div>
                <p className="font-medium text-sm mb-2">Key Responsibilities:</p>
                <ul className="text-sm space-y-1">
                  <li>- Develop and execute marketing strategies across digital and traditional platforms</li>
                  <li>- Manage social media, content creation, and online advertising</li>
                  <li>- Collaborate with the design and sales teams to enhance brand presence</li>
                  <li>- Conduct market research to identify trends and opportunities</li>
                  <li>- Track and analyze campaign performance to optimize results</li>
                </ul>
              </div>
  
              <div>
                <p className="font-medium text-sm mb-2">Requirements:</p>
                <ul className="text-sm space-y-1">
                  <li>- 1-3 years of experience in marketing, advertising, or related fields</li>
                  <li>- Strong understanding of social media and digital marketing tools</li>
                  <li>- Excellent communication and creative thinking skills</li>
                  <li>- Ability to manage multiple projects and meet deadlines</li>
                  <li>- Experience in branding and content marketing is a plus</li>
                </ul>
              </div>
  
              <div className="pt-2">
                <a href="mailto:admin@theuwmall">
                <button className="border border-gray-300 rounded-full text-xs px-6 py-1 hover:bg-gray-100 transition-colors">
                  APPLY NOW
                </button>
                </a>
              </div>
            </div>
          </div>
  
          {/* Sales Executive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-gray-900 pt-10">
            <div>
              <h2 className="text-xl font-bold mb-4">SALES EXECUTIVE</h2>
            </div>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                Are you a creative thinker with a passion for marketing and brand growth? Join our dynamic team as a
                Marketing Executive and play a key role in shaping impactful campaigns, engaging audiences, and driving
                business success.
              </p>
  
              <div>
                <p className="font-medium text-sm mb-2">Key Responsibilities:</p>
                <ul className="text-sm space-y-1">
                  <li>- Develop and execute marketing strategies across digital and traditional platforms</li>
                  <li>- Manage social media, content creation, and online advertising</li>
                  <li>- Collaborate with the design and sales teams to enhance brand presence</li>
                  <li>- Conduct market research to identify trends and opportunities</li>
                  <li>- Track and analyze campaign performance to optimize results</li>
                </ul>
              </div>
  
              <div>
                <p className="font-medium text-sm mb-2">Requirements:</p>
                <ul className="text-sm space-y-1">
                  <li>- 1-3 years of experience in marketing, advertising, or related fields</li>
                  <li>- Strong understanding of social media and digital marketing tools</li>
                  <li>- Excellent communication and creative thinking skills</li>
                  <li>- Ability to manage multiple projects and meet deadlines</li>
                  <li>- Experience in branding and content marketing is a plus</li>
                </ul>
              </div>
  
              <div className="pt-2">
                <button className="border border-gray-300 rounded-full text-xs px-6 py-1 hover:bg-gray-100 transition-colors">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    )
  }
  
  