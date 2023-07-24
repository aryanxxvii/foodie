import Button from "./elements/Button"
import heroImg from "../assets/images/hero-banner.png"
export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-description w-full flex content-center flex-wrap md:w-1/2 p-3">
        <div className="mb-6">
          <h2 className="text-6xl font-bold text-orange-400 font-dosis">
            F
            <span className="text-yellow-400 tracking-[-0.15em] pr-3.5">
              oo
            </span>
            d Ordering Made Easy
          </h2>
          <p className="font-semibold text-lg text-gray-500 py-2">
            Get Started Today!
          </p>
        </div>

        <div className="btn-container">
          <Button className="mr-2">Order Now</Button>
          <a
            href="/menu"
            className="text-gray-700 font-bold text-decoration-line text-lg px-3"
          >
            See Menu
          </a>
        </div>
      </div>
      <div className="bg-hero-blob bg-cover bg-center bg-scale-100 banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={heroImg} alt="banner" className="max-h-95" />
      </div>
    </div>
  )
}
