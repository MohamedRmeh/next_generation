"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState("/images/dashboard.png");
  const [selectedLink, setSelectedLink] = useState("https://admin-for-mostaql.vercel.app");
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleLinkClick = (image, linkProject, index) => {
    setSelectedImage(image);
    setSelectedLink(linkProject)
    setSelectedDiv(index);
  };

  const data = [
    {
      image: "/images/dashboard.png",
      linkProject: 'https://admin-for-mostaql.vercel.app',
      text: "Logistics",
      desc: "Our high-end tech solutions revamp the Logistics industry and assist it to offer awesome experience.",
    },
    {
      image: "/images/store.png",
      linkProject: 'https://syria-store.vercel.app',
      text: "Excellence in Designs",
      desc: "We are distinguished by providing unique designs that bear our own mark and distinguish us from others.",
    },
    {
      image: "/images/yourdesimg.png",
      linkProject: 'https://github.com/MohamedRmeh/yourdes',
      text: "Business Digitalization",
      desc: " Our high-end tech are able to transfer your traditional operation to Digitalization with high performance without any interruption.",
    },
    {
      image: "/images/cozy.png",
      linkProject: 'https://www.cozyfurniturezaz.com',
      text: "E-Commerce",
      desc: "We design & develop user-engaging eCommerce web app that improve ROI, increase brand exposure, and skyrocket your online business",
    },
  ];

  return (
    <section className="mb-8 md:p-32 p-6">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="tracking-[3px] text-xl sm:text-xl gradient-text opacity-80 uppercase">
          Build Your Dreams
        </h1>
        <p className="sm:text-3xl text-2xl gradient-text text-center md:w-[900px]">
          Web app development, design and consulting company for those who want
          to be successful
        </p>
      </div>
      <div className="md:grid md:grid-cols-12 md:gap-6 sm:mt-10 mt-24">
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
          data-aos="fade-right"
        >
          <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-5">
            <h3 className="mb-2 text-xl font-semibold gradient-text">
              From Idea to Market
            </h3>
            <p className="text-xl gradient-text">
              We make sure that we build the web app with passion and ensure it
              suits your dream.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleLinkClick(item.image, item.linkProject, index)}
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                  selectedDiv === index ? "bg-zinc-900" : "bg-zinc-950"
                } border-zinc-800 cursor-pointer shadow-zinc-950 shadow-2xl`}
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1 gradient-text">
                    {item.text}
                  </div>
                  <div className="gradient-text">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-0 md:mb-0 md:order-1 mt-10">
          <div className="relative flex flex-col text-center lg:text-right">
            <div className="relative inline-flex flex-col bg-zinc-950 p-3 lg:p-5">
              <motion.div
                key={selectedImage} // This will trigger the animation on image change
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="md:max-w-none mx-auto rounded object-cover"
              >
              <Link href={selectedLink}>
                <Image
                  src={selectedImage}
                  width={1000}
                  height={500}
                  alt="image"
                  className=" shadow-2xl"
                  loading="eager"
                  priority
                  />
                  </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
