import aboutImage from "../assets/images/about-image.png"

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-bold text-orange-400 mb-10 ">
            About Us
          </h2>
          <p className="text-lg">
            At Foodie, we're on a mission to revolutionize your dining
            experience! Say goodbye to mundane meals and embrace a world of
            extraordinary flavors, right at your fingertips. With a seamless and
            user-friendly platform, a tantalizing array of cuisines from
            top-notch restaurants, and a commitment to unmatched quality, we're
            here to satisfy your cravings like never before. Join the
            gastronomic revolution and let your taste buds embark on a journey
            of pure bliss. Foodie - where every bite is an adventure!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
