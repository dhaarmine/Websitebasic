import React from 'react';

function App() {
  return (
    <div className="w-screen min-h-screen text-white overflow-y-auto relative bg-black font-inter">
      {/* Flowing Red Abstract Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(139, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 40%, rgba(139, 0, 0, 0.4) 100%),
            #000000
          `,
        }}
      >
        {/* Small circular gradients */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-40 right-32 w-24 h-24 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.5) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-60 left-16 w-40 h-40 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-32 right-20 w-28 h-28 rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(153, 27, 27, 0.4) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Logo Section - Top 35% */}
        <div className="h-[35vh] flex items-center justify-center pt-8">
          <img
            src="/Dhaarmine Studios Logo copy.svg"
            alt="Dhaarmine Studios"
            className="max-h-[200px] max-w-[300px] object-contain"
          />
        </div>

        {/* Content Section - Bottom 65% */}
        <div className="flex-1 flex flex-col items-center text-center px-8 pb-8 space-y-8">
          
          {/* About Section */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">
              About Dhaarmine studios
              <div className="w-32 h-0.5 bg-red-500 mx-auto mt-3"></div>
            </h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>Dhaarmine Studios is a VFX studio that helps bring stories to life through visual effects.</p>
              <p>We work on everything from environments to small, detailed moments that shape a scene.</p>
              <p>Our goal is to make visuals that feel real, grounded, and true to the story.</p>
              <p>No flash for the sake of it just honest, thoughtful work that fits the film.</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">
              Services Offered
              <div className="w-32 h-0.5 bg-red-500 mx-auto mt-3"></div>
            </h2>
            <div className="space-y-2 text-lg">
              <p>CGI</p>
              <p>Visual Effects</p>
              <p>Pre-visualization</p>
              <p>Production Supervision</p>
              <p>DI</p>
              <div className="text-red-500 text-xl py-2">▼</div>
              <p>AD-Commercials</p>
              <p>Branding</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <div className="space-y-1 text-lg">
              <p className="relative inline-block">
                info@dhaarminestudios.com
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
              </p>
              <p className="relative inline-block">
                +91 79919 91917
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></div>
              </p>
            </div>
          </div>

          {/* Office Address Section */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Office Address</h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p>Plot No. 44, Namaha</p>
              <p>2nd Floor, Sai Ratna Layout Phase II</p>
              <p>Road No. 10, Raidurgam</p>
              <p>Near Sri Gangotri Public School</p>
              <p>Hyderabad – 500089</p>
              <p>Rangareddy District, Telangana</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="pt-8">
            <p className="text-2xl italic font-normal">" Lights, Pixels, Action! "</p>
          </div>

          {/* Footer */}
          <div className="pt-4 text-sm text-gray-400">
            <p>Dhaarmine studios Pvt Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;