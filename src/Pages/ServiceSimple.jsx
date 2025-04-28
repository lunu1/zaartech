
export default function DesignProcess() {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start min-h-screen bg-[#F5F3EF] j">
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-screenflex justify-center">
          <img 
            src="/service.jpg" 
            alt="Sample" 
            className="shadow-lg sm:h-screen"
          />
        </div>
        
        {/* Right Side - Text Content */}
        <div className=" md:w-1/2 w-full pr-10 sm:pr-56 rounded-lg sm:min-h-screen flex flex-col sm:justify-center pl-10">
  <h2 className="text-4xl sm:text-7xl font-serif font-semibold mb-12 pt-10 sm:pt-0">Services</h2>
  <div className="space-y-4 uppercase text-black/80">
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">
        Custom Interior Design
      </p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium ">
        Bespoke Furniture
      </p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Complete Renovation</p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Electrical and Mechanical Installations</p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Flooring and Wall Treatment</p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Textile and Upholstery</p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Kitchen and Bathroom Fitouts</p>
    </div>
    <div className="border-b pb-6 border-black">
      <p className="sm:text-lg font-medium">Outdoor Living Spaces</p>
    </div>
  </div>
</div>

      </div>
    );
  }
  