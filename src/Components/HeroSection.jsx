
import image1 from "../assets/virtualRealityImg2.webp";
import image2 from "../assets/virualRealityImg1.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR building tools 
            <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span>
           
        </h1>
        <p className="mt-10 text-lg text-neutral-500 max-w-4xl self-center"> Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!</p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"> Start for free</a>
           <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
          <img className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" src={image2} alt="img" />
          <img className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" src={image1} alt="img" />
          
        </div>
    </div>
  );
}

export default HeroSection; 