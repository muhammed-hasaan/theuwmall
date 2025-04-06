import { ArrowRight } from "lucide-react"
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
// import Footer from "../../Components/Footer/footer"
import Footer from "../../Components/Footer/Footer"
export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image:
        "https://s3-alpha-sig.figma.com/img/fd93/e494/051adf6370e0fa4e7900130faa0e9d55?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXNdKGz-NEgouNOE1UCwICKP3VZa9DCnGWZ8gStW8u4bh14L5mT57~EE5y85cE5u52z9E-k6IzZDUL8hlLWhkq4Zs3sYIQ1JCd6Tm1XigvqHZUEH72y2VcqOX6QOXYfsQU5DiT10dyAvu2SZz-k2~Dqvl0522l6YqWeQGMZMGg29PC9zGtE90vFLnHOz5V-W2omfAUkzPraSSZJzzAVIF1jOTe5Z2hk~n3oonafafCBse526MxJojLxyvgFEbwOrV63NoQyYa0w9cS4RKRnFD7JnFo3ODdIV42BbetapCN0txFx-1X7SS6PBY8knqgsu34Ozju1wmgQTAc1S6~6wbw__",
      showArrow: true,
    },
    {
      id: 2,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image:
        "https://s3-alpha-sig.figma.com/img/fd93/e494/051adf6370e0fa4e7900130faa0e9d55?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXNdKGz-NEgouNOE1UCwICKP3VZa9DCnGWZ8gStW8u4bh14L5mT57~EE5y85cE5u52z9E-k6IzZDUL8hlLWhkq4Zs3sYIQ1JCd6Tm1XigvqHZUEH72y2VcqOX6QOXYfsQU5DiT10dyAvu2SZz-k2~Dqvl0522l6YqWeQGMZMGg29PC9zGtE90vFLnHOz5V-W2omfAUkzPraSSZJzzAVIF1jOTe5Z2hk~n3oonafafCBse526MxJojLxyvgFEbwOrV63NoQyYa0w9cS4RKRnFD7JnFo3ODdIV42BbetapCN0txFx-1X7SS6PBY8knqgsu34Ozju1wmgQTAc1S6~6wbw__",
      showArrow: true,
    },
    {
      id: 3,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image:
        "https://s3-alpha-sig.figma.com/img/fd93/e494/051adf6370e0fa4e7900130faa0e9d55?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXNdKGz-NEgouNOE1UCwICKP3VZa9DCnGWZ8gStW8u4bh14L5mT57~EE5y85cE5u52z9E-k6IzZDUL8hlLWhkq4Zs3sYIQ1JCd6Tm1XigvqHZUEH72y2VcqOX6QOXYfsQU5DiT10dyAvu2SZz-k2~Dqvl0522l6YqWeQGMZMGg29PC9zGtE90vFLnHOz5V-W2omfAUkzPraSSZJzzAVIF1jOTe5Z2hk~n3oonafafCBse526MxJojLxyvgFEbwOrV63NoQyYa0w9cS4RKRnFD7JnFo3ODdIV42BbetapCN0txFx-1X7SS6PBY8knqgsu34Ozju1wmgQTAc1S6~6wbw__",
      showArrow: true,
    },
    {
      id: 4,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image:
        "https://s3-alpha-sig.figma.com/img/fd93/e494/051adf6370e0fa4e7900130faa0e9d55?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXNdKGz-NEgouNOE1UCwICKP3VZa9DCnGWZ8gStW8u4bh14L5mT57~EE5y85cE5u52z9E-k6IzZDUL8hlLWhkq4Zs3sYIQ1JCd6Tm1XigvqHZUEH72y2VcqOX6QOXYfsQU5DiT10dyAvu2SZz-k2~Dqvl0522l6YqWeQGMZMGg29PC9zGtE90vFLnHOz5V-W2omfAUkzPraSSZJzzAVIF1jOTe5Z2hk~n3oonafafCBse526MxJojLxyvgFEbwOrV63NoQyYa0w9cS4RKRnFD7JnFo3ODdIV42BbetapCN0txFx-1X7SS6PBY8knqgsu34Ozju1wmgQTAc1S6~6wbw__",
      showArrow: true,
    },
  ]

  return (
    <div>
      <AllPageHeader />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-6 sm:py-8 mt-4 mb-16">
        {/* Filter Navigation - Responsive */}
        <div className="flex flex-wrap sm:flex-nowrap sm:items-center sm:justify-end gap-4 sm:gap-6 md:gap-10 lg:gap-14 mb-6 border-b-2 border-gray-800 pb-6 sm:pb-8">
  <div className="flex items-center space-x-2 cursor-pointer">
    <input
      type="radio"
      name="filter"
      id="viewAll"
      className="cursor-pointer accent-[#00c5b4] border-[#00c5b4] checked:border-[#00c5b4] focus:ring-[#00c5b4]"
    />
    <label htmlFor="viewAll" className="text-sm font-medium uppercase cursor-pointer">
      View All
    </label>
  </div>
  <div className="flex items-center space-x-2 cursor-pointer">
    <input
      type="radio"
      name="filter"
      id="events"
      className="cursor-pointer accent-[#00c5b4] border-[#00c5b4] checked:border-[#00c5b4] focus:ring-[#00c5b4]"
    />
    <label htmlFor="events" className="text-sm font-medium uppercase cursor-pointer">
      Events
    </label>
  </div>
  <div className="flex items-center space-x-2 cursor-pointer">
    <input
      type="radio"
      name="filter"
      id="offers"
      className="cursor-pointer accent-[#00c5b4] border-[#00c5b4] checked:border-[#00c5b4] focus:ring-[#00c5b4]"
    />
    <label htmlFor="offers" className="text-sm font-medium uppercase cursor-pointer">
      Offers & Promotions
    </label>
  </div>
</div>

        {/* Stories List - Responsive */}
        <div className="space-y-0">
          {stories.map((story) => (
            <div key={story.id} className="border-b-2 border-gray-900 last:border-b-0">
              <div className="py-4 flex flex-col md:flex-row mb-4 mt-4 relative gap-x-10">
                {/* Image - Responsive */}
                <div className="w-full md:w-[40%] lg:w-[400px] h-[200px] sm:h-[240px] md:h-[300px] relative mb-4 md:mb-0 md:mr-4">
                  <img src="https://s3-alpha-sig.figma.com/img/fd93/e494/051adf6370e0fa4e7900130faa0e9d55?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KULgH2IBkfkBSM8IC4hQTftLM7gNCVy-1OYJjmnCPgcuxgMuz4Y2mCNad4PNv8QxArFN7roCGUpk-3sVNOJnaS7eJNe~z3~XjA-t5fl6k7jeeo1~0lQJn4yY0yQtLokTW~~aSfYQMpwfYjrxhOW7z7Ogjtv~hgCqX-h8WFbxf4xnJPNtHW374RFKHvmLHYdHP6R35nv8-0ijzZCYC6lLkM7VJPNnFcmkKi5T4C-ws8AauyYSrPxgAZ9JjJilxGdXcSOrVp3PomV-K1Pzai-4Z8kkclKCi59pdrIX1FdpV9RTXmRWjvO2r8MUF8g4N11LcRYsTcBJRQUvJK6PFe~zkQ__" alt={story.title} fill className="object-cover h-full w-full" />
                </div>

                {/* Content - Responsive */}
                <div className="flex-grow flex flex-col justify-between  pr-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight w-full max-w-[600px]">
                    {story.title}
                  </h3>

                  {/* Date */}
                  <p className="text-md text-gray-600 mt-10 md:mt-0">{story.date}</p>
                </div>

                {/* Arrow - Positioned absolutely on mobile, normally on desktop */}
                {story.showArrow && (
                  <div className="absolute top-10 right-0 md:static md:flex md:items-start">
                    <ArrowRight className="h-5 w-5 text-gray-800" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

