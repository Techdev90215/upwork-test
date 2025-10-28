import { useEffect, useState } from 'react';

function App() {
  const [showStickyButton, setShowStickyButton] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showNoThanksTooltip, setShowNoThanksTooltip] = useState(false);
  const [showNoThanksStickyTooltip, setShowNoThanksStickyTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ctaButtons = document.getElementById('main-cta-buttons');
      if (ctaButtons) {
        const rect = ctaButtons.getBoundingClientRect();
        // Show sticky button only when main CTA buttons are NOT visible in viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowStickyButton(false);
        } else {
          setShowStickyButton(true);
        }
      }
    };

    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-[1192px] mx-auto px-4 py-6">
          {/* Desktop Layout - Logo and Timeline in Row */}
          <div className="hidden sm:flex items-center justify-between gap-1">
            {/* Logo */}
            <a 
              href="https://mytinythinker.com/" 
              className="flex-shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-80" 
              style={{ width: "300px" }}
            >
              <img
                src="/logos/logo.png"
                alt="TinyThinkers Learning Tools"
                className="w-full h-16"
              />
            </a>

            {/* Timeline Image */}
            <div className="flex-1 flex justify-end">
              <img
                src="/logos/timeline.png"
                alt="Checkout progress: Step 2 of 3"
                className="h-auto w-auto max-w-full"
              />
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="sm:hidden">
            {/* Logo */}
            <a 
              href="https://mytinythinker.com/" 
              className="flex justify-center mb-4 cursor-pointer transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src="/logos/logo.png"
                alt="TinyThinkers Learning Tools"
                className="h-12 w-auto"
              />
            </a>

            {/* Timeline Image */}
            <div>
              <img
                src="/logos/timeline.png"
                alt="Checkout progress: Step 2 of 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Border line */}
        <hr className="border-t border-gray-800 border-1 m-0" />
      </header>

      {/* Main Content */}
      <main className="max-w-[1100px] mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Important Legal Notice */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <button
              onClick={() => window.location.href = 'https://funnels-build.thisisatestsiteonly.com/33d18e10-7ece-4c53-9b72-b2b9418830b8/upsell'}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="inline-flex items-center gap-2 bg-red-700 text-gray-100 px-8 py-2 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-red-800 hover:shadow-lg"
            >
              <img src="/images/warning.svg" alt="Warning" className="w-5 h-5" />
              <span className="font-bold text-sm sm:text-base">
                IMPORTANT LEGAL NOTICE
              </span>
            </button>
            
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 shadow-lg">
                IMPORTANT LEGAL NOTICE
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        {/* Section 1 */}
        <div className="mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-[50px]">
          <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white gap-4 md:gap-5 lg:gap-0">
            <img
              src="/images/image_1.png"
              alt="Porch Pirate"
              className="w-full lg:w-1/2 h-auto lg:ml-[15px] order-last md:order-first lg:order-none"
            />
            <div className="w-full lg:w-1/2 order-first md:order-last lg:order-none text-center lg:text-left">
              <h4
                className="lg:max-w-[500px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[32px] sm:leading-[36px] md:leading-[38px] lg:leading-[40px] font-bold mb-3 md:mb-5 lg:mb-6 pt-3 sm:pt-5 pb-2"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                A Third of <span className="text-red-600">Americans</span> Are
                Targeted by Porch Pirates!
              </h4>
              <p className="text-gray-700 text-[16px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed">
                Your Favorite TinyThinkers Learning Tools Deserve Premium
                Protection! Enjoy guaranteed coverage for lost or stolen
                packages anywhere in the USA—no stress, no hassle. Whether it's
                our adventure—get your screen-free, skill-boosting workbooks
                delivered safely, or we'll make it right!
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-[50px]">
          <div className="flex flex-col lg:flex-row items-stretch bg-white gap-4 md:gap-5 lg:gap-0">
            <img
              src="/images/image_2.png"
              alt="Porch Pirate"
              className="w-full lg:w-1/2 h-auto p-4 order-last md:order-first lg:order-last"
            />
              <div className="w-full lg:w-1/2 pt-4 order-first md:order-last lg:order-first text-center lg:text-left">
                <h4
                  className="relative inline-block lg:max-w-[500px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[32px] sm:leading-[36px] md:leading-[38px] lg:leading-[40px] font-bold mb-3 md:mb-5 lg:mb-6 pt-3 sm:pt-5 pb-2 before:content-[''] before:absolute before:w-[198px] before:h-[2px] before:bg-[#ce2121] before:bottom-0 before:left-0 before:hidden lg:before:block text-left"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Don't fall prey to theft.{" "}
                  <span className="text-red-600">Secure your order today!</span>
                </h4>
              <p className="text-gray-700 text-[16px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed text-left">
                Your satisfaction matters most to us, and we want you to feel
                confident with every purchase.
              </p>
              <p className="text-gray-700 text-[16px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed mt-2 md:mt-4 text-left">
                Add Replacement Protection to your order today, and{" "}
                <span className="font-bold">
                  rest easy knowing we've got your back
                </span>
                , even after your package is on its way!
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-[50px]">
          <div className="flex flex-col lg:flex-row items-stretch bg-white gap-4 md:gap-5 lg:gap-0">
            <img
              src="/images/image_3.png"
              alt="Package Stolen"
              className="w-full lg:w-1/2 h-auto p-4 order-last md:order-first lg:order-first"
            />
            <div className="w-full lg:w-1/2 pt-4 order-first md:order-last lg:order-last text-center lg:text-left text-center">
              <h4
                className="relative inline-block lg:max-w-[500px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[32px] sm:leading-[36px] md:leading-[38px] lg:leading-[40px] font-bold mb-3 md:mb-5 lg:mb-6 pt-3 sm:pt-5 pb-2 before:content-[''] before:absolute before:w-[198px] before:h-[2px] before:bg-[#ce2121] before:bottom-0 before:left-0 before:hidden lg:before:block"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                <span className="text-red-600">
                  This is not our first time...
                </span>
              </h4>
              <p className="text-gray-700 text-[16px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed text-left">
                At TinyThinkers, we take pride in going above and beyond to
                support your child's journey toward smarter, screen-free
                learning.
              </p>
              <p className="text-gray-700 text-[16px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed mt-2 md:mt-4 text-left">
                That's why we offer complete peace of mind with every
                TinyThinkers order. Add Order Protection to your purchase, and{" "}
                <span className="font-bold">
                  if anything goes wrong—from porch pirates to shipping
                  mishaps—we'll rush you a fresh pack immediately.
                </span>{" "}
                Your power to captivate and command attention should never be
                compromised!
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-gray-700 text-[16px] sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            With{" "}
            <span className="text-red-600 font-bold">
              TINYTHINKER'S Order Protection
            </span>
            , You're fully covered. We guarantee your TinyThinkers essentials
            will arrive safely and securely sealed—or we'll rush you a
            replacement, no questions asked!
          </p>
        </div>

        {/* Final Image */}
        <div className="bg-gray-100 rounded-2xl px-8 py-4 max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <img
                src="/images/image_4.png"
                alt="Porch Pirate Stealing Package"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Time is Running Out */}
          <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">
            <span className="text-red-600">TIME IS RUNNING OUT...</span>
          </h2>

          <div className="flex justify-center items-center gap-2 mb-6 sm:mb-8">
            <img src="/images/shield.png" alt="Shield" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-red-700 font-medium text-[11px] sm:text-sm">
              30-DAY MONEY BACK GUARANTEE
            </p>
          </div>

          {/* CTA Buttons */}
          <div id="main-cta-buttons" className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
            <button className="w-full bg-[#71046c] hover:bg-purple-800 text-white font-bold py-3 sm:py-4 px-3 sm:px-8 rounded-lg text-[11px] sm:text-lg transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap cursor-pointer">
              <img
                src="/images/lightning.svg"
                alt="Lightning"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
              YES, PROTECT MY ORDER
            </button>

            <div className="relative">
              <button 
                onMouseEnter={() => setShowNoThanksTooltip(true)}
                onMouseLeave={() => setShowNoThanksTooltip(false)}
                className="w-full bg-white hover:bg-gray-50 text-black font-bold py-3 sm:py-4 px-2 sm:px-8 rounded-lg text-[10px] sm:text-base border-1 border-black transition-colors duration-200 font-weight-700 whitespace-nowrap cursor-pointer"
              >
                NO THANKS, I DO NOT WANT ORDER PROTECTION
              </button>
              
              {/* Tooltip */}
              {showNoThanksTooltip && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 shadow-lg">
                  Nothanks
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 pb-8 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-2 sm:space-y-6 gap-4">
            {/* Logo */}
            <img
              src="/logos/logo.png"
              alt="TinyThinkers"
              className="h-16 w-[320px]"
            />

            {/* Payment Methods */}
            <img
              src="/images/footer_payments.svg"
              alt="Payment Methods"
              className="h-8 w-auto"
            />

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center items-center text-md pt-4 gap-8">
              <p className="text-black leading-[30px] m-0 mr-3 font-bold text-[13px] sm:text-sm">2024. TinyThinkers</p>
              <ul className="flex list-none m-0 p-0 text-black">
                <li className="mr-3 relative leading-[30px] hover:underline">
                  <a href="https://mytinythinker.com/" className="text-black font-bold text-[10px] sm:text-sm">
                    Refund policy
                  </a>
                </li>
                <li className="mr-3 relative leading-[30px] hover:underline">
                  <a href="https://mytinythinker.com/" className="text-black font-bold text-[10px] sm:text-sm">
                    Privacy policy
                  </a>
                </li>
                <li className="mr-3 relative leading-[30px] hover:underline">
                  <a href="https://mytinythinker.com/" className="text-black font-bold text-[10px] sm:text-sm">
                    Terms of service
                  </a>
                </li>
                <li className="mr-3 relative leading-[30px] hover:underline">
                  <a href="https://mytinythinker.com/" className="text-black font-bold text-[10px] sm:text-sm">
                    Shipping policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Buttons */}
      {showStickyButton && (
        <div className="lg:hidden flex flex-col items-center justify-center text-center z-[999]">
          {/* YES Button - positioned above NO THANKS button */}
          <button 
            className="fixed bottom-[61px] w-[92%] h-[58px] text-white font-semibold text-[12px] sm:text-[16px] rounded-[8.73px] flex items-center justify-center gap-2 z-[999] cursor-pointer"
            style={{
              background: 'radial-gradient(188% 188% at 52.58% -68.5%, #000000 30.52%, #1a1a1a 53.85%)',
              boxShadow: '0px 13px 15px #2c631c59',
              padding: '12px 10px'
            }}
          >
            <img
              src="/images/lightning.svg"
              alt="Lightning"
              className="w-4 h-4"
            />
            YES, PROTECT MY ORDER FROM THEFT
          </button>
          
          {/* NO THANKS Button */}
          <div className="fixed bottom-0 w-[92%] z-[999]">
            <div className="relative">
              <button 
                onMouseEnter={() => setShowNoThanksStickyTooltip(true)}
                onMouseLeave={() => setShowNoThanksStickyTooltip(false)}
                onTouchStart={() => setShowNoThanksStickyTooltip(true)}
                onTouchEnd={() => setShowNoThanksStickyTooltip(false)}
                className="w-full h-[58px] text-black font-semibold text-[12px] sm:text-[16px] rounded-[12px] flex items-center justify-center bg-white border-1 border-black cursor-pointer"
                style={{
                  padding: '20px 0px'
                }}
              >
                NO THANKS, I DO NOT WANT ORDER PROTECTION
              </button>
              
              {/* Tooltip */}
              {showNoThanksStickyTooltip && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                  Nothanks
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
