import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Connectwithme = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/assets/icons/linkedin.png",
      url: "https://www.linkedin.com/in/erhokhon-george-521451248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Instagram",
      icon: "/assets/icons/instagram.png",
      url: "http://Instagram.com/mg.multim3dia",
    },
    {
      name: "X (Twitter)",
      icon: "/assets/icons/x.png",
      url: "https://X.com/erhokhonG",
    },
    {
      name: "Behance",
      icon: "/assets/icons/behance.png",
      url: "https://www.behance.net/georgekyrian",
    },
    {
      name: "Whatsapp",
      icon: "/assets/icons/whatsapp.png",
      url: "https://http://Wa.me/+2349069578083",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div>
        {/* Heading */}
        <h2 className="text-3xl tracking-tighter font-semibold text-gray-800 dark:text-white mb-4 my-4">
          <span className="tracking-tighter font-normal">Connect</span> <br />
          <span className="font-semibold tracking-tighter">With Me</span>
        </h2>

        {/* Social Links */}
        <div className="space-y-6 pt-4 text-xl">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className=""
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 font-medium tracking-tighter flex items-center gap-4 hover:underline cursor-pointer"
              >
                <img src={item.icon} className="h-8" alt={item.name} />
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Box */}
          <div className="h-[180px] flex flex-col justify-end">
        <div className=" bg-[#F6F6F3] dark:bg-[#222222] px-4 py-6 rounded-2xl ">
          <div className="flex md:block lg:flex items-center gap-4">
          <div className="">
            <img src="/images/envelope.png" alt="Contact" className="md:h-8 lg:h-12 md:h-12 " />
          </div>
          <div className="">
          <p className=" font-medium tracking-tighter leading-4 text-[14px]">
            Let's talk about your <br /> Project
          </p>
          <p className="text-gray-800 dark:text-gray-200 tracking-tight text-[14px]">
            Drop me a mail -{" "}
            <span className="font-medium tracking-tighter cursor-pointer ">
              <a
                href="mailto:georgekyrian@gmail.com"
                className="dark:text-[#C2DE3A] hover:underline tracking-tighter text-[14px]"
              >
                georgekyrian@gmail.com
              </a>
            </span>
          </p>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Connectwithme;
