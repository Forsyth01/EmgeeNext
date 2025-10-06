import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  const feedbacks = [
    {
      head: "Wowww, the interface is so good😍",
      quote:
        "Working with George has been a fantastic experience. The mobile app interface he designed for us at Mintrix completely exceeded our expectations. The layout is clean, user-friendly, and visually stunning",
      rating: 5,
      name: "Investor Dave",
      title: "CEO, Mintrix Trade Limited",
      image: "/images/dave.png",
    },
    {
      head: "Perfect, I love the designs 💯",
      quote:
        "George delivered top-notch social media flyers that perfectly captured the essence of our brand at Geniz Global. The visuals were clean, engaging, and on point with our message.",
      rating: 5,
      name: "Jennifer Gilbert",
      title: "CEO, Geniz Global LTD",
      image: "/images/Jennifer Gilbert.png",
    },
    {
      head: "Sharp, I love it 😄",
      quote:
        "Clean, sharp, and exactly what we needed. His ability to deliver quality designs quickly without compromising on creativity is impressive",
      rating: 5,
      name: "Ihuoma Prosper",
      title: "CEO, iProspa Xchange",
      image: "/images/Ihuoma Prosper.png",
    },
  ];

  return (
    <div>
      <div className="flex gap-10 flex-wrap">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-[#20201E] p-6 rounded-2xl shadow-2xl max-w-sm mx-auto"
          >
            <p className="font-semibold mb-4 text-[#F6F6F3]">{feedback.head}</p>
            <p className="font-regular mb-4 tracking-tighter text-[#F6F6F3]">
              "{feedback.quote}"
            </p>

            {/* Rating Stars */}
            <div className="flex my-4">
              {Array(feedback.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={20} color="#ABC725" fill="#ABC725" />
                ))}
            </div>

            {/* User info */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 relative mr-2">
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{feedback.name}</p>
                  <p className="text-sm font-regular">{feedback.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
