'use client';
import { Zen_Dots } from 'next/font/google';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {TextPlugin} from 'gsap/TextPlugin';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';


const geistZen = Zen_Dots({
  weight: '400', // Zen Dots доступен только с этим весом
  subsets: ['latin'],
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, useGSAP);

export default function SmoothScrollPage() {
  const smoother = useRef();


  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2.5,
      effects: true,
      normalizeScroll: true,
    });

    //replaces yourElement's text with "This is the new text" 
    gsap.to(".stagnation", {
      duration: 1,
      text:"stagnation",
      ease: "power2.inOut",
      delay: 2,
      repeat: 100,
    });
  
    // Исчезновение hero
    gsap.fromTo(
      ".hero-section",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "center",
          end: "600",
          scrub: true,
        },
      }
    );
  
    // Галерея — элементы слева
    gsap.utils.toArray(".gallery__left .gallery__item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  
    // Галерея — элементы справа
    gsap.utils.toArray(".gallery__right .gallery__item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);
  
  

  return (
    <div id="smooth-wrapper ">
      <div className='will-change-transform' id="smooth-content">
        {/* Hero Section */}
        <header className="hero-section relative">
          <div
            data-speed=".6"
            className="hero absolute flex left-70 sm:left-2/3 transform -translate-x-1/2 w-[90vw] max-w-[700px] z-10"
          >
            <Image
              src="/img/hero.png"
              alt="Hero image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className=" container mx-auto px-[2vw]">
            <div data-speed=".75" className="main-header relative text-9xl max-w-6xs h-180 ">
              <h1 className={`main-title absolute left-20  bottom-[30vh] text-gray-50  uppercase leading-[0.9] ${geistZen.className}`}>
                super position
              </h1>
            </div>
            <div data-speed=".75" className="stagnation relative p-2 left-20 text-3xl w-1200  text-gray-50 uppercase bottom-[20vh] font-semibold bg-amber-800">
              <h1>
                stagnation
              </h1>
            </div>
          </div>
        </header>

        {/* Portfolio Gallery */}
        
        <div className="portfolio">
        
          <div className=" container mx-auto px-[7vw] ">
            <main className="gallery flex py-[calc(1vw_+_1vh_*_20)]">
            
              {/* Left Column */}
              <div
                data-speed=".9"
                className="gallery__left flex-1 flex flex-col items-center mt-[calc(1vw_+_1vh_*_7.5_*_1.75)]"
              >
                <div className="gallery__item max-w-[540vh] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[540vh] rounded-lg will-change-transform overflow-hidden">
                  <Image
                    src="/img/work/1.jpg"
                    alt="Work 1"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="gallery__item max-w-[calc(1vw_+_1vh_*_50)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[300vh] rounded-lg will-change-transform overflow-hidden">
                  <video 
                    src="/img/work/v2.mp4" // Убедитесь, что видео лежит в public/videos/
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-block gallery__item text-gray-200 relative max-w-[calc(1vw_+_1vh_*_50)] mb-[calc(1vw_+_1vh_*_7.5)]">
                  <h2 className="text-block__h  text-4xl leading-[2.4rem] mb-6">
                    Creative floating scroll with amazing parallax effect
                  </h2>
                  <p className="text-block__p leading-[1.75]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    amount scrolling.
                  </p>
                </div>

                <div className="gallery__item w-120 mb-[calc(1vw_+_1vh_*_7.5)] h-100 rounded-lg will-change-transform overflow-hidden">
                  <Image
                    src="/img/work/6.jpg"
                    alt="Work 6"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-[10%_15%]"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div data-speed="1.4" className="gallery__right flex-1 flex flex-col items-center">
                <div className="text-block gallery__item text-gray-200 relative max-w-[calc(1vw_+_1vh_*_50)] mb-[calc(1vw_+_1vh_*_7.5)]">
                  <h2 className="text-block__h  text-4xl leading-[2.4rem] mb-6">
                    Creative floating scroll with amazing parallax effect
                  </h2>
                  <p className="text-block__p leading-[1.75]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    amount scrolling.
                  </p>
                </div>

                <div className="gallery__item max-w-[calc(1vw_+_1vh_*_47)]  max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
                  <video 
                    src="/img/work/v1.mp4" // Убедитесь, что видео лежит в public/videos/
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="gallery__item max-w-[calc(1vw_+_1vh_*_50)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
                  <Image
                    src="/img/work/5.jpg"
                    alt="Work 5"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="gallery__item max-w-[calc(1vw_+_1vh_*_50)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
                  <Image
                    src="/img/work/3.jpg"
                    alt="Work 3"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-block gallery__item text-gray-200 relative max-w-[calc(1vw_+_1vh_*_50)] mt-[calc(1vw_+_1vh_*_10)]">
                  <h2 className="text-block__h  text-4xl leading-[2.4rem] mb-6">
                    Creative floating scroll with amazing parallax effect
                  </h2>
                  <p className="text-block__p leading-[1.75]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    amount scrolling.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

// let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

// 	itemsL.forEach(item => {
// 		gsap.fromTo(item, { opacity: 0, x: -50 }, {//------------------------------------------------------------------------------
// 			opacity: 1, x: 0,
// 			scrollTrigger: {
// 				trigger: item,
// 				start: '-850',
// 				end: '-100',
// 				scrub: true
// 			}
// 		})
// 	})

//   let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

// 	itemsR.forEach(item => {
// 		gsap.fromTo(item, { opacity: 0, x: 50 }, {
// 			opacity: 1, x: 0,
// 			scrollTrigger: {
// 				trigger: item,
// 				start: '-750',
// 				end: 'top',
// 				scrub: true
// 			}
// 		})
// 	})
// "use client"
// import Image from 'next/image';
// import { useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

// export default function SmoothScrollPage() {
//   const smoother = useRef();

//   useGSAP(() => {
//     // Инициализация скролла
//     smoother.current = ScrollSmoother.create({
//       smooth: 1.5,
//       effects: true,
//       normalizeScroll: true
//     });

//     // Пример анимации при скролле
//     gsap.to(".box", {
//       x: 100,
//       scrollTrigger: {
//         trigger: ".box",
//         start: "top center",
//         end: "bottom center",
//         scrub: true
//       }
//     });

//       // ScrollSmoother.create({
//       //   wrapper: 'wrapper',
//       //   content: 'content',
//       //   smooth: 1.5,
//       //   effects: true
//       // })

//       // gsap.fromTo('.hero-section', { opacity: 1 }, {
//       //   opacity: 0,
//       //   scrollTrigger: {
//       //     trigger: '.hero-section',
//       //     start: 'center',
//       //     end: '820',
//       //     scrub: true
//       //   }
//       // })

//       // let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

//       // itemsL.forEach(item => {
//       //   gsap.fromTo(item, { opacity: 0, x: -50 }, {
//       //     opacity: 1, x: 0,
//       //     scrollTrigger: {
//       //       trigger: item,
//       //       start: '-850',
//       //       end: '-100',
//       //       scrub: true
//       //     }
//       //   })
//       // })

//       // let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

//       // itemsR.forEach(item => {
//       //   gsap.fromTo(item, { opacity: 0, x: 50 }, {
//       //     opacity: 1, x: 0,
//       //     scrollTrigger: {
//       //       trigger: item,
//       //       start: '-750',
//       //       end: 'top',
//       //       scrub: true
//       //     }
//       //   })
//       // })

//   });

//   return (
//     <div className="wrapper">
//     <div className="content">
//       {/* Hero Section */}
//       <header className="hero-section relative">
//         <div
//           data-speed=".6"
//           className="hero absolute left-[37vw] top-[22vh] w-[calc(1vw_+_1vh_*_36)] -z-10 will-change-transform"
//         >
//           <Image
//             src="/img/hero.png"
//             alt="Hero image"
//             width={800}
//             height={600}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>
//         <div className="container px-[7vw]">
//           <div data-speed=".75" className="main-header h-screen will-change-transform">
//             <h1 className="main-title absolute bottom-[12vh] w-min text-[calc(1vw_+_1vh_*_8)] leading-[0.9]">
//               creative scroll
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* Portfolio Gallery */}
//       <div className="portfolio">
//         <div className="container px-[7vw]">
//           <main className="gallery flex py-[calc(1vw_+_1vh_*_8)]">
//             {/* Left Column */}
//             <div data-speed=".9" className="gallery__left flex-1 flex flex-col items-center mt-[calc(1vw_+_1vh_*_7.5_*_1.75)]">
//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/1.jpg"
//                   alt="Work 1"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/2.jpg"
//                   alt="Work 2"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="text-block gallery__item text-[#cdc6c3] relative max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)]">
//                 <h2 className="text-block__h text-[#f4efec] text-2xl leading-[2.4rem] mb-6">
//                   Creative floating scroll with amazing parallax effect
//                 </h2>
//                 <p className="text-block__p leading-[1.75]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
//                 </p>
//               </div>

//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/6.jpg"
//                   alt="Work 6"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div data-speed="1.1" className="gallery__right flex-1 flex flex-col items-center">
//               <div className="text-block gallery__item text-[#cdc6c3] relative max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)]">
//                 <h2 className="text-block__h text-[#f4efec] text-2xl leading-[2.4rem] mb-6">
//                   Creative floating scroll with amazing parallax effect
//                 </h2>
//                 <p className="text-block__p leading-[1.75]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
//                 </p>
//               </div>

//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/4.jpg"
//                   alt="Work 4"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/5.jpg"
//                   alt="Work 5"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                 <Image
//                   src="/img/work/3.jpg"
//                   alt="Work 3"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
// "use client";
// import { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

// const ParallaxGallery = () => {
//   const wrapperRef = useRef();
//   const contentRef = useRef();

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     if (ScrollTrigger.isTouch !== 1) {
//       // Инициализация ScrollSmoother
//       ScrollSmoother.create({
//         wrapper: wrapperRef.current,
//         content: contentRef.current,
//         smooth: 1.5,
//         effects: true
//       });

//       // Анимация для hero-section
//       gsap.fromTo('.hero-section', { opacity: 1 }, {
//         opacity: 0,
//         scrollTrigger: {
//           trigger: '.hero-section',
//           start: 'center',
//           end: '820',
//           scrub: true
//         }
//       });

//       // Анимации для левой колонки
//       const itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
//       itemsL.forEach(item => {
//         gsap.fromTo(item, { opacity: 0, x: -50 }, {
//           opacity: 1,
//           x: 0,
//           scrollTrigger: {
//             trigger: item,
//             start: '-850',
//             end: '-100',
//             scrub: true
//           }
//         });
//       });

//       // Анимации для правой колонки
//       const itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
//       itemsR.forEach(item => {
//         gsap.fromTo(item, { opacity: 0, x: 50 }, {
//           opacity: 1,
//           x: 0,
//           scrollTrigger: {
//             trigger: item,
//             start: '-750',
//             end: 'top',
//             scrub: true
//           }
//         });
//       });
//     }

//     // Очистка при размонтировании
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       ScrollSmoother.get()?.kill();
//     };
//   }, []);

//   return (
//     <div className="wrapper" ref={wrapperRef}>
//       <div className="content" ref={contentRef}>
//         {/* Hero Section */}
//         <header className="hero-section relative">
//           <div
//             data-speed=".6"
//             className="hero absolute left-[37vw] top-[22vh] w-[calc(1vw_+_1vh_*_36)] -z-10 will-change-transform"
//           >
//             <Image
//               src="/img/hero.png"
//               alt="Hero image"
//               width={800}
//               height={600}
//               className="w-full h-full object-cover"
//               priority
//             />
//           </div>
//           <div className="container px-[7vw]">
//             <div data-speed=".75" className="main-header h-screen will-change-transform">
//               <h1 className="main-title absolute bottom-[12vh] w-min text-[calc(1vw_+_1vh_*_8)] leading-[0.9]">
//                 creative scroll
//               </h1>
//             </div>
//           </div>
//         </header>

//         {/* Portfolio Gallery */}
//         <div className="portfolio">
//           <div className="container px-[7vw]">
//             <main className="gallery flex py-[calc(1vw_+_1vh_*_8)]">
//               {/* Left Column */}
//               <div data-speed=".9" className="gallery__left flex-1 flex flex-col items-center mt-[calc(1vw_+_1vh_*_7.5_*_1.75)]">
//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/1.jpg"
//                     alt="Work 1"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/2.jpg"
//                     alt="Work 2"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="text-block gallery__item text-[#cdc6c3] relative max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)]">
//                   <h2 className="text-block__h text-[#f4efec] text-2xl leading-[2.4rem] mb-6">
//                     Creative floating scroll with amazing parallax effect
//                   </h2>
//                   <p className="text-block__p leading-[1.75]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
//                   </p>
//                 </div>

//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/6.jpg"
//                     alt="Work 6"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div data-speed="1.1" className="gallery__right flex-1 flex flex-col items-center">
//                 <div className="text-block gallery__item text-[#cdc6c3] relative max-w-[calc(1vw_+_1vh_*_21)] mb-[calc(1vw_+_1vh_*_7.5)]">
//                   <h2 className="text-block__h text-[#f4efec] text-2xl leading-[2.4rem] mb-6">
//                     Creative floating scroll with amazing parallax effect
//                   </h2>
//                   <p className="text-block__p leading-[1.75]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
//                   </p>
//                 </div>

//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/4.jpg"
//                     alt="Work 4"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/5.jpg"
//                     alt="Work 5"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item max-w-[calc(1vw_+_1vh_*_21)] mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] rounded-lg will-change-transform overflow-hidden">
//                   <Image
//                     src="/img/work/3.jpg"
//                     alt="Work 3"
//                     width={600}
//                     height={900}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxGallery;
