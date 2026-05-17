import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import aboutMeImage from "../assets/images/regenerated_image_1778969395729.png";

export default function BlankSection() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32 overflow-hidden bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-16 md:-mt-20 z-10">
      {/* Decorative Assets - Smaller versions */}
      <FadeIn delay={0.1} x={-40} y={0} duration={0.9} className="absolute top-[10%] left-[5%] w-[40px] sm:w-[80px] md:w-[100px] z-10 opacity-20 sm:opacity-60">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Decorative" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} x={-40} y={0} duration={0.9} className="absolute bottom-[10%] left-[8%] w-[35px] sm:w-[70px] md:w-[90px] z-10 opacity-20 sm:opacity-60">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="Decorative" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} x={40} y={0} duration={0.9} className="absolute top-[10%] right-[5%] w-[40px] sm:w-[80px] md:w-[100px] z-10 opacity-20 sm:opacity-60">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Decorative" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} x={40} y={0} duration={0.9} className="absolute bottom-[10%] right-[8%] w-[45px] sm:w-[85px] md:w-[110px] z-10 opacity-20 sm:opacity-60">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="Decorative" className="w-full h-auto" />
      </FadeIn>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-20">
        <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center lg:text-left text-[clamp(2.5rem,8vw,120px)]">
              About me
            </h2>
          </FadeIn>

          <div className="w-full flex flex-row lg:flex-col items-start lg:items-start gap-5 sm:gap-14 md:gap-16">
            <div className="flex-[1.8] lg:flex-none py-2">
              <AnimatedText 
                text="I’m Ayush Sanodiya, a Graphic Designer Passionate About Branding, Social Media Design, and Visual Storytelling. I Create Clean, Modern, and Engaging Designs Using Photoshop, Illustrator, Canva, and Coreldraw."
                className="text-[#D7E2EA] font-medium text-center lg:text-left leading-relaxed max-w-[600px] text-[clamp(0.75rem,2.8vw,1.35rem)]"
              />
            </div>

            {/* Mobile-only image next to text */}
            <FadeIn delay={0.3} x={20} className="block lg:hidden flex-1 relative aspect-[4/5] min-w-[100px] mt-2">
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[20px] sm:rounded-[30px] overflow-hidden border border-white/5 shadow-xl">
                <img 
                  src={aboutMeImage} 
                  alt="Ayush Portfolio" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.5} y={20} className="hidden lg:block w-full sm:w-auto">
              <ContactButton />
            </FadeIn>
          </div>

          <FadeIn delay={0.5} y={20} className="block lg:hidden w-full sm:w-auto mt-4">
            <ContactButton />
          </FadeIn>
        </div>

        {/* Desktop-only image */}
        <FadeIn delay={0.3} x={40} className="hidden lg:relative lg:block aspect-[4/5] w-full max-w-[380px] lg:ml-auto">
          <div className="absolute inset-0 bg-[#1A1A1A] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src={aboutMeImage} 
              alt="Ayush Portfolio" 
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
            />
          </div>
          {/* Accent decoration for image */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B600A8] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        </FadeIn>
      </div>
    </section>
  );
}
