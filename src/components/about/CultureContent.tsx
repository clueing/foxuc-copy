"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* 第一屏动画元素 - 办公室场景 */
const firstFloorElements = [
  { className: "ui-desk", src: "/images/about/culture/desk.png", style: { bottom: 0, left: 97, zIndex: 1 }, delay: "0.5s" },
  { className: "ui-pen-box", src: "/images/about/culture/pen-box.png", style: { bottom: 102, left: 110 }, delay: "0.75s" },
  { className: "ui-diagram", src: "/images/about/culture/diagram.png", style: { bottom: 102, left: 150 }, delay: "1s" },
  { className: "ui-pen", src: "/images/about/culture/pen.png", style: { bottom: 102, left: 450 }, delay: "1.25s" },
  { className: "ui-book", src: "/images/about/culture/book.png", style: { left: 465, bottom: 102 }, delay: "1.5s" },
  { className: "ui-laptop", src: "/images/about/culture/laptop.png", style: { bottom: 102, left: 312 }, delay: "1.75s" },
  { className: "ui-man", src: "/images/about/culture/man.png", style: { left: 210, bottom: 0, zIndex: 6 }, delay: "1.8s", animation: "left" },
  { className: "ui-cup", src: "/images/about/culture/cup.png", style: { bottom: 102, left: 531 }, delay: "2s" },
  { className: "ui-fox", src: "/images/about/culture/fox.png", style: { left: 368, bottom: 208 }, delay: "2.15s" },
  { className: "ui-computer", src: "/images/about/culture/computer.png", style: { bottom: 0, left: 494 }, delay: "2.4s" },
  { className: "ui-drawer", src: "/images/about/culture/drawer.png", style: { left: 37, bottom: 0 }, delay: "2.6s" },
];

/* 第二屏动画元素 - 教室场景 */
const secondFloorElements = [
  { className: "ui-board-line", src: "/images/about/culture/board-line.png", style: { left: 147, top: 0, transformOrigin: "top center" }, delay: "0s", animation: "down" },
  { className: "ui-board", src: "/images/about/culture/board.png", style: { left: 121, top: 81 }, delay: "0.35s", animation: "opacity" },
  { className: "ui-chair", src: "/images/about/culture/chair.png", style: { left: 310, bottom: 0 }, delay: "0.6s" },
  { className: "ui-cupboard", src: "/images/about/culture/cupboard.png", style: { bottom: 0, right: 68 }, delay: "0.9s" },
  { className: "ui-fox-2", src: "/images/about/culture/fox.png", style: { bottom: 80, right: 82 }, delay: "1.2s" },
  { className: "ui-girl", src: "/images/about/culture/girl.png", style: { left: 38, bottom: 0 }, delay: "1.3s", animation: "left" },
  { className: "ui-flower", src: "/images/about/culture/flower.png", style: { right: 18, bottom: 0 }, delay: "1.5s" },
  { className: "ui-boy", src: "/images/about/culture/boy.png", style: { left: 253, top: 50 }, delay: "1.7s" },
  { className: "ui-helloworld", src: "/images/about/culture/helloworld.png", style: { left: 150, top: 120 }, delay: "2s", animation: "width" },
];

/* 核心价值观数据 */
const coreValues = [
  {
    icon: "/images/about/culture-3.png",
    title: "专注、专业--我们的态度",
    items: [
      "专注：欲博则不精，欲全则不细，网狐全心致力于网络棋牌游戏的开发、销售和运营，精专一行，在专一行业内求博广。",
      "专业：汲取众多成功案例及开发运营理念之精华，精铸棋牌技术，引领行业革新。以专致精，以质取胜。",
    ],
  },
  {
    icon: "/images/about/culture-4.png",
    title: "创新、务实--我们的优势",
    items: [
      "创新：立足于棋牌游戏市场的潮流变化，网狐人持续创新，精益求精，以全面满足玩家及运营商需求、提高人们文化生活水平为目标。",
      "务实：将目光聚焦在产品之上，以客户需求为出发点，踏踏实实深化技术，勤勤恳恳做人做事，用精尖技术奠定企业发展的基石。",
    ],
  },
  {
    icon: "/images/about/culture-5.png",
    title: "诚挚、诚信--我们的原则",
    items: [
      "诚挚：以开放的心态广泛听取各种声音，用诚恳的态度服务每一位合作伙伴，让客户收获满意的回报，让玩家尽享棋牌的乐趣。",
      "诚信：对客户永怀真心、诚实守信，视诚信为立身之本，通过塑造良好的企业信誉来打造企业品牌和树立行业地位。",
    ],
  },
  {
    icon: "/images/about/culture-6.png",
    title: "合作、共赢--我们的追求",
    items: [
      "合作：企业内部，齐心协力、团结合作，共攀棋牌高峰；企业外部，携手发展、共创佳绩，不断深化战略合作关系。",
      "共赢：在竞争日益激烈的互联网游戏市场中，与广大游戏运营商共享资源、共克难关，提振信心，把握商机，开创互利共赢的新局面。",
    ],
  },
];

/* 动画元素组件 */
function AnimatedElement({
  src,
  style,
  delay,
  animation = "up",
  isVisible,
}: {
  src: string;
  style: React.CSSProperties;
  delay: string;
  animation?: string;
  isVisible: boolean;
}) {
  const getAnimation = () => {
    if (!isVisible) return "none";
    switch (animation) {
      case "left":
        return `left 0.75s ease-in-out ${delay} forwards`;
      case "down":
        return `down 0.35s linear ${delay} forwards`;
      case "opacity":
        return `opacity 0.4s linear ${delay} forwards`;
      case "width":
        return `width 0.35s ease-in-out ${delay} forwards`;
      default:
        return `up 0.75s ease-in-out ${delay} forwards`;
    }
  };

  return (
    <Image
      src={src}
      alt=""
      width={200}
      height={200}
      className="absolute"
      style={{
        ...style,
        opacity: isVisible ? undefined : 0,
        animation: getAnimation(),
      }}
    />
  );
}

/* 企业文化内容组件 */
export default function CultureContent() {
  const firstFloorRef = useRef<HTMLDivElement>(null);
  const secondFloorRef = useRef<HTMLDivElement>(null);
  const thirdFloorRef = useRef<HTMLDivElement>(null);
  const firstTitleRef = useRef<HTMLDivElement>(null);
  const secondTitleRef = useRef<HTMLDivElement>(null);
  const coreValuesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add("move");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [
      firstFloorRef.current,
      secondFloorRef.current,
      thirdFloorRef.current,
      firstTitleRef.current,
      secondTitleRef.current,
      coreValuesRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-[1200px] mx-auto">
      {/* 第一屏 - 经营理念 */}
      <section
        ref={firstFloorRef}
        className="relative border-b-2 border-[#dac6ae] min-h-[500px]"
      >
        {/* 标题 */}
        <div
          ref={firstTitleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300"
          style={{
            padding: "20px 25px",
            backgroundImage: "url('/images/about/culture/title-top.png') no-repeat top, url('/images/about/culture/title-bottom.png') no-repeat bottom",
          }}
        >
          <p className="text-[34px] font-light text-[#bb9b76] text-center">
            网狐的经营理念
          </p>
          <p className="text-[26px] text-[#666] text-center mt-2">
            以精为业、以质取胜
          </p>
        </div>

        {/* 动画元素 */}
        <div className="relative w-[600px] h-[500px]">
          {firstFloorElements.map((el, i) => (
            <AnimatedElement
              key={i}
              src={el.src}
              style={el.style}
              delay={el.delay}
              animation={el.animation}
              isVisible={false}
            />
          ))}
        </div>
      </section>

      {/* 第二屏 - 发展愿景 */}
      <section
        ref={secondFloorRef}
        className="relative border-b-2 border-[#dac6ae] min-h-[500px]"
      >
        {/* 动画元素 */}
        <div className="relative w-[600px] h-[500px] overflow-hidden">
          {secondFloorElements.map((el, i) => (
            <AnimatedElement
              key={i}
              src={el.src}
              style={el.style}
              delay={el.delay}
              animation={el.animation}
              isVisible={false}
            />
          ))}
        </div>

        {/* 标题 */}
        <div
          ref={secondTitleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300"
          style={{
            padding: "20px 25px",
            backgroundImage: "url('/images/about/culture/title-top.png') no-repeat top, url('/images/about/culture/title-bottom.png') no-repeat bottom",
          }}
        >
          <p className="text-[34px] font-light text-[#bb9b76] text-center">
            我们的发展愿景
          </p>
          <p className="text-[26px] text-[#666] text-center mt-2">
            力争成为业界最优秀
          </p>
          <p className="text-[26px] text-[#666] text-center">
            最知名的棋牌游戏开
          </p>
          <p className="text-[26px] text-[#666] text-center">
            发与运营商
          </p>
        </div>
      </section>

      {/* 第三屏 - 核心价值观 */}
      <section ref={thirdFloorRef} className="pt-[20px]">
        {/* 标题 */}
        <div
          ref={secondTitleRef}
          className="relative w-full h-[310px] flex items-center justify-center"
          style={{
            padding: "20px 25px",
            backgroundImage: "url('/images/about/culture/title-top-2.png') no-repeat top, url('/images/about/culture/title-bottom-2.png') no-repeat bottom",
          }}
        >
          <div>
            <p className="text-[34px] font-light text-[#bb9b76] text-center">
              核心价值观
            </p>
            <p className="text-[26px] text-[#666] text-center mt-2">
              专注、专业丨创新、务实
            </p>
            <p className="text-[26px] text-[#666] text-center">
              诚挚、诚信丨合作、共赢
            </p>
          </div>
        </div>

        {/* 价值观卡片 */}
        <ul
          ref={coreValuesRef}
          className="flex mb-[125px] opacity-0 transition-opacity duration-750"
        >
          {coreValues.map((value, index) => (
            <li
              key={index}
              className="float-left w-[300px] min-h-[380px] box-border px-[25px] border-r border-dotted border-[#d4d4d4] last:border-r-0"
            >
              <Image
                src={value.icon}
                alt=""
                width={80}
                height={80}
                className="block mx-auto"
              />
              <h3 className="text-[22px] text-[#333] font-light mt-[26px] mb-[20px]">
                {value.title}
              </h3>
              {value.items.map((item, i) => (
                <p key={i} className="text-[15px] text-[#666] mb-[30px] last:mb-0">
                  {item}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </section>

      {/* 动画关键帧 */}
      <style jsx>{`
        @keyframes up {
          0% {
            transform: translateY(102px);
            opacity: 0;
          }
          80% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes left {
          0% {
            transform: translateX(-300px);
            opacity: 0;
          }
          80% {
            transform: translateX(30px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes down {
          0% {
            opacity: 1;
            transform: translateY(-102px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes opacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes width {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .move {
          opacity: 1 !important;
        }
        .move .ui-title {
          transform: translate(-50%, -50%) scale(1) !important;
        }
        .move .ui-core-values {
          opacity: 1 !important;
        }
      `}</style>
    </main>
  );
}
