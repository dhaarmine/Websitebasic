import React from 'react';

function App() {
  return (
    <div className="w-screen min-h-screen text-white overflow-y-auto relative bg-black font-inter">
      {/* Subtle Red Abstract Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 700px 350px at 15% 20%, rgba(220, 38, 38, 0.4) 0%, rgba(220, 38, 38, 0.2) 35%, transparent 60%),
            radial-gradient(ellipse 500px 250px at 85% 80%, rgba(185, 28, 28, 0.3) 0%, rgba(220, 38, 38, 0.15) 40%, transparent 70%),
            radial-gradient(ellipse 600px 300px at 70% 10%, rgba(239, 68, 68, 0.25) 0%, rgba(220, 38, 38, 0.1) 50%, transparent 80%),
            radial-gradient(ellipse 800px 400px at 30% 90%, rgba(220, 38, 38, 0.5) 0%, rgba(185, 28, 28, 0.2) 35%, transparent 65%),
            #000000
          `,
        }}
      >
        {/* Additional flowing shapes */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 400px 200px at 50% 50%, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.1) 50%, transparent 85%),
              radial-gradient(ellipse 300px 450px at 90% 30%, rgba(185, 28, 28, 0.3) 0%, rgba(220, 38, 38, 0.1) 40%, transparent 75%)
            `
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
              <div className="w-24 h-px bg-red-500 mx-auto mt-2"></div>
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
              <div className="w-24 h-px bg-red-500 mx-auto mt-2"></div>
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
              <p>info@dhaarminestudios.com</p>
              <p>+91 79919 91917</p>
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
