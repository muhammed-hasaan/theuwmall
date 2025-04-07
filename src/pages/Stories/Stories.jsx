import { ArrowRight } from "lucide-react"
import AllPageHeader from "../../Components/AllPageHeader/AllPageHeader"
// import Footer from "../../Components/Footer/footer"
import Footer from "../../Components/Footer/Footer"
import StoryImg from "../../assets/stories.jpeg"
export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image: StoryImg,
      showArrow: true,
    },
    {
      id: 2,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image: StoryImg,
      showArrow: true,
    },
    {
      id: 3,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image: StoryImg,
      showArrow: true,
    },
    {
      id: 4,
      title: "CELEBRATE THE SPIRIT OF GIVING THIS EID AT UW MALL",
      date: "Date: April 07, 23",
      image: StoryImg,
      showArrow: true,
    },
  ]

  return (
    <div>
      <AllPageHeader />
      <div className="w-full max-w-[1400px] mx-auto  flex justify-center items-center h-[400px] mb-14">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
          COMING SOON
        </h3>
      </div>
      <Footer />
    </div>
  )
}

