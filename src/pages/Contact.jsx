import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import AnimatedTitle from "../components/AnimatedTitle";
import { Background } from "../components/Background";
import Footer from "../components/Footer";
import { Mail, MapPin, MessageSquare, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "team@quincygaming.com",
    link: "mailto:team@quincygaming.com",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Discord",
    content: "Join our Discord server",
    link: "https://discord.gg/quincy",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    content: "Jakarta, Indonesia",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Response Time",
    content: "Within 24 hours",
  },
];

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-slate-950">
      <Background />
      <Navbar />
      
      <div ref={containerRef} className="relative z-10 pt-32 pb-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-20">
          <p className="font-general text-sm uppercase text-blue-50/60 mb-4 fade-in">
            Get in Touch
          </p>
          <AnimatedTitle
            title="C<b>o</b>ntact <b>U</b>s"
            containerClass="mb-8 !text-blue-50"
          />
          <p className="max-w-2xl mx-auto text-blue-50/80 font-circular-web fade-in">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
        </section>

        {/* Contact Info Grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="fade-in group bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-violet-300/50 transition-all duration-300"
              >
                <div className="text-violet-300 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="special-font text-xl text-blue-50 mb-4">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-50/60 font-circular-web hover:text-violet-300 transition-colors duration-300"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-blue-50/60 font-circular-web">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 mb-32">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-blue-50 font-general text-sm uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-50 focus:border-violet-300/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-blue-50 font-general text-sm uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-50 focus:border-violet-300/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-blue-50 font-general text-sm uppercase">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-50 focus:border-violet-300/50 focus:outline-none transition-colors duration-300 min-h-32"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-violet-300 text-white font-general text-sm uppercase py-4 rounded-lg hover:bg-violet-400 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
};

export default Contact;