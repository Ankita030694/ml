'use client';

import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: 4,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <section className="py-14 px-6 md:px-11 lg:px-17 bg-[#FFE3C5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[520px] flex-shrink-0">
            <Image
              src="/reviewleft.jpg"
              alt="Restaurant dish"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col w-full max-w-2xl gap-8 items-center">
            <div className="flex p-5 justify-center items-center rounded-[20px] border-[3px] border-[#8C3A3A] bg-white w-full">
              <p className="text-black font-poppins text-lg md:text-xl lg:text-[25px] font-medium leading-[1.16]">
                {reviews[currentReview].text}
              </p>
            </div>

            <div className="flex items-center gap-5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-5 h-5 rounded-full transition-colors ${
                    index === currentReview ? 'bg-[#8C3A3A]' : 'bg-[#F09E9E]'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
