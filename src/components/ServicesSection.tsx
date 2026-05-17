import FadeIn from "./FadeIn";

const services = [
  {
    id: "01",
    name: "Logo Design",
    description: "Crafting unique and memorable logos and brand systems that define your business and resonate with your audience.",
  },
  {
    id: "02",
    name: "Social Media Posts",
    description: "Creating stunning visual assets for social platforms, ensuring consistency and high-impact messaging across all channels.",
  },
  {
    id: "03",
    name: "Poster & Banners",
    description: "Masterful design for posters and banners to enhance brand visibility and aesthetic appeal in print and digital spaces.",
  },
  {
    id: "04",
    name: "Brochure",
    description: "Developing compelling brochures and marketing materials that drive engagement and provide detailed brand information.",
  },
];

export default function ServicesSection() {
  return (
    <section id="skill" className="bg-white rounded-t-[40px] sm:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32 -mt-10 sm:-mt-16 md:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        <div className="w-full max-w-5xl">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-20 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0`}>
                <span className="font-black text-[#0C0C0C] text-[clamp(2.5rem,10vw,110px)] leading-none opacity-20 md:opacity-100">
                  {service.id}
                </span>
                <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1.2rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.15rem)] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
