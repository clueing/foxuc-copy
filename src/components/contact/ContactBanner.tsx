import Image from "next/image";

/* 联系页面横幅组件 */
export default function ContactBanner() {
  return (
    <div className="relative w-full h-[480px] overflow-hidden min-w-[1250px]">
      <div className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-full bg-[url('/images/contact/banner-contact.png')] bg-cover bg-top">
        <div className="pt-[140px] pl-[460px]">
          <h1 className="text-[58px] font-bold leading-tight text-[#222]">
            仔细聆听 为您服务
          </h1>
          <p className="text-[32px] font-light text-[#e32128]">
            诚挚诚信，合作共赢
          </p>
        </div>
      </div>
    </div>
  );
}
