import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CommunityComponent: React.FC = () => {
  const sliderPhotos = [
    { url: "/images/community1.jpg", alt: "Community 1" },
    { url: "/images/community2.jpg", alt: "Community 2" },
    { url: "/images/community3.jpg", alt: "Community 3" },
  ];

  const gridPhotos = [
    { url: "/images/member1.jpg", alt: "Member 1" },
    { url: "/images/member2.jpg", alt: "Member 2" },
    { url: "/images/member3.jpg", alt: "Member 3" },
    { url: "/images/member4.jpg", alt: "Member 4" },
    { url: "/images/member5.jpg", alt: "Member 5" },
    { url: "/images/member6.jpg", alt: "Member 6" },
    { url: "/images/member7.jpg", alt: "Member 7" },
    { url: "/images/member8.jpg", alt: "Member 8" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-700 pt-9">
          Our Community
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          className="rounded-2xl shadow-xl"
        >
          {sliderPhotos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Grid of community members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gridPhotos.map((photo, idx) => (
            <div key={idx} className="group relative">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-48 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-semibold">
                Community Member
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityComponent;
