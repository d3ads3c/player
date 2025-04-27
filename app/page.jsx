import Image from "next/image";


export const IconlyVoice = ({ size = 64, color = "#fff" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.58027 11.4021H17.9193C18.1963 11.4021 18.4193 11.1781 18.4193 10.9021V8.6481C18.4193 5.2471 15.6523 2.4791 12.2493 2.4791C8.84827 2.4791 6.08027 5.2471 6.08027 8.6481V10.9021C6.08027 11.1781 6.30427 11.4021 6.58027 11.4021Z" fill={color}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.384 13.4069H5.11597C4.70197 13.4069 4.36597 13.7429 4.36597 14.1569C4.36597 14.5709 4.70197 14.9069 5.11597 14.9069H6.13097C6.47297 17.7089 8.69797 19.9339 11.5 20.2759V21.9789C11.5 22.3929 11.836 22.7289 12.25 22.7289C12.664 22.7289 13 22.3929 13 21.9789V20.2759C15.803 19.9339 18.027 17.7089 18.369 14.9069H19.384C19.798 14.9069 20.134 14.5709 20.134 14.1569C20.134 13.7429 19.798 13.4069 19.384 13.4069Z" fill={color}></path>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <div className="bg-[#212121] rounded-[30px] size-52 flex items-center justify-center mx-auto">
          <IconlyVoice />

        </div>
        <div className="my-5">
          <h1 className="text-lg">تاب آوری و مهار آن</h1>
          <p className="text-sm">کلاس مهارت های نرم</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
