import React from 'react'

const Slider = () => {
  return (
    <div className='animate__animated animate__rollIn h-[512px] w-full overflow-hidden'>
      <div className="carousel carousel-vertical w-full h-full">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src="https://i.ibb.co.com/HfMKMZDM/adorable-portrait-pets-surrounded-by-flowers.jpg"
           className="w-full h-full object-cover opacity-70 blur-[2px]" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
            <h2 className="text-4xl font-bold mb-3">Find Your Furry Friend Today!</h2>
            <p className="text-lg max-w-lg text-center">
              We make sure your furry friends stay warm and happy all winter long.
            </p>
          </div>

          {/* 2. Positioned arrows vertically (Top/Bottom) instead of Left/Right */}
          <div className="absolute inset-y-5 right-5 flex flex-col justify-between items-center transform">
            <a href="#slide4" className="btn btn-circle btn-sm">▲</a>
            <a href="#slide2" className="btn btn-circle btn-sm">▼</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src="https://i.ibb.co.com/RVYJPzn/view-cats-dogs-showing-friendship.jpg"
          className="w-full h-full object-cover opacity-70 blur-[2px]"/>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
            <h2 className="text-4xl font-bold mb-3">Adopt, Don't Shop</h2>
            <p className="text-lg max-w-lg text-center">
              Keep your pets looking their best with our grooming experts.
            </p>
          </div>

          <div className="absolute inset-y-5 right-5 flex flex-col justify-between items-center">
            <a href="#slide1" className="btn btn-circle btn-sm">▲</a>
            <a href="#slide3" className="btn btn-circle btn-sm">▼</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img src="https://i.ibb.co.com/jPT84XxD/w3.jpg"
          className="w-full h-full object-cover opacity-70 blur-[2px]"/>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
            <h2 className="text-4xl font-bold mb-3">Love and Care</h2>
            <p className="text-lg max-w-lg text-center">
              Safe, warm, and playful spaces for your pets.
            </p>
          </div>

          <div className="absolute inset-y-5 right-5 flex flex-col justify-between items-center">
            <a href="#slide2" className="btn btn-circle btn-sm">▲</a>
            <a href="#slide4" className="btn btn-circle btn-sm">▼</a>
          </div>
        </div>

        {/* Slide 4 */}
        {/* <div id="slide4" className="carousel-item relative w-full h-full">
          <img src="https://i.ibb.co.com/7xvn2gWv/pets1.jpg" className="w-full h-full object-cover" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
            <h2 className="text-4xl font-bold mb-3">Trusted Pet Sitting</h2>
            <p className="text-lg max-w-lg text-center">
              Leave your pets with professionals who truly care.
            </p>
          </div>

          <div className="absolute inset-y-5 right-5 flex flex-col justify-between items-center">
            <a href="#slide3" className="btn btn-circle btn-sm">▲</a>
            <a href="#slide1" className="btn btn-circle btn-sm">▼</a>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Slider