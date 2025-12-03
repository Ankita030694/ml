import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#512904] w-full px-4 sm:px-8 md:px-[40px] lg:px-[80px] py-8 md:py-[40px]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 max-w-[1382px] mx-auto">
        <div className="flex flex-col items-start gap-[8px] w-full lg:w-[410px]">
          <Image
            src="/ml-logo.png"
            alt="Masala Library Logo"
            width={134}
            height={134}
            className="w-24 h-24 md:w-[134px] md:h-[134px]"
          />
          <p className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[14px] font-normal leading-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-start gap-[24px] mt-8 md:mt-[62px]">
            <svg width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4672 11.3193C15.8289 11.3193 14.2577 11.9701 13.0993 13.1286C11.9408 14.287 11.29 15.8582 11.29 17.4965C11.29 19.1348 11.9408 20.7059 13.0993 21.8644C14.2577 23.0228 15.8289 23.6736 17.4672 23.6736C19.1055 23.6736 20.6766 23.0228 21.8351 21.8644C22.9935 20.7059 23.6443 19.1348 23.6443 17.4965C23.6443 15.8582 22.9935 14.287 21.8351 13.1286C20.6766 11.9701 19.1055 11.3193 17.4672 11.3193Z" fill="#FFE3C5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.53044 0.548917C14.1372 -0.182972 20.8046 -0.182972 27.4113 0.548917C31.0207 0.951856 33.9306 3.79334 34.3544 7.416C35.1374 14.1152 35.1374 20.8828 34.3544 27.582C33.9306 31.2046 31.0207 34.0461 27.4132 34.451C20.8058 35.183 14.1378 35.183 7.53044 34.451C3.92109 34.0461 1.01118 31.2046 0.587329 27.5839C-0.195776 20.8841 -0.195776 14.1158 0.587329 7.416C1.01118 3.79334 3.92109 0.951856 7.53044 0.548917ZM26.9742 6.09504C26.4701 6.09504 25.9867 6.29529 25.6302 6.65173C25.2738 7.00817 25.0735 7.49161 25.0735 7.9957C25.0735 8.49979 25.2738 8.98323 25.6302 9.33967C25.9867 9.69611 26.4701 9.89636 26.9742 9.89636C27.4783 9.89636 27.9617 9.69611 28.3181 9.33967C28.6746 8.98323 28.8748 8.49979 28.8748 7.9957C28.8748 7.49161 28.6746 7.00817 28.3181 6.65173C27.9617 6.29529 27.4783 6.09504 26.9742 6.09504ZM8.44275 17.499C8.44275 15.1046 9.39393 12.8082 11.087 11.1151C12.7801 9.42204 15.0765 8.47086 17.4709 8.47086C19.8653 8.47086 22.1616 9.42204 23.8547 11.1151C25.5478 12.8082 26.499 15.1046 26.499 17.499C26.499 19.8934 25.5478 22.1897 23.8547 23.8828C22.1616 25.576 19.8653 26.5271 17.4709 26.5271C15.0765 26.5271 12.7801 25.576 11.087 23.8828C9.39393 22.1897 8.44275 19.8934 8.44275 17.499Z" fill="#FFE3C5"/>
            </svg>
            <svg width="54" height="28" viewBox="0 0 68 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M50.7989 10.024V13.9837C51.6281 12.7206 52.771 11.6944 54.1159 11.0057C55.4607 10.3169 56.9613 9.98907 58.4709 10.0543C66.5329 10.0543 68.276 15.0943 68.276 21.651V35H60.8089V23.1653C60.8089 20.342 60.2395 16.7113 55.8435 16.7113C51.5805 16.7113 50.8525 19.7843 50.8525 22.9553V35H43.4092V10.024H50.7989ZM38.4088 3.74733C38.4079 4.48701 38.1887 5.20995 37.7786 5.82552C37.3685 6.4411 36.7857 6.92191 36.1035 7.20767C35.4215 7.49112 34.6707 7.56527 33.9464 7.42067C33.2222 7.27607 32.5573 6.91927 32.0365 6.39567C31.5147 5.87174 31.1594 5.20522 31.0154 4.47992C30.8714 3.75463 30.945 3.00295 31.2271 2.3194C31.5091 1.63585 31.987 1.05095 32.6006 0.638258C33.2142 0.225566 33.9361 0.00350561 34.6755 0C35.167 -3.45542e-06 35.6536 0.0970237 36.1074 0.285516C36.5613 0.474009 36.9735 0.750257 37.3203 1.09841C37.6672 1.44657 37.9419 1.85978 38.1287 2.31435C38.3155 2.76891 38.4107 3.25589 38.4088 3.74733Z" fill="#FFE3C5"/>
              <path d="M38.4083 10.0527H30.9417V34.9984H38.4083V10.0527Z" fill="#FFE3C5"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 lg:gap-[200px] w-full lg:w-auto">
          <div className="flex flex-col items-start gap-[32px] w-full sm:w-[164px]">
            <h3 className="text-[#AC5E14] font-[family-name:var(--font-poppins)] text-[20px] md:text-[22px] font-medium leading-[22px]">
              Quick Links
            </h3>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <Link href="/" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Home
              </Link>
              <Link href="/about" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                About
              </Link>
              <a href="#reservation" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Reservation
              </a>
              <Link href="/contact" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[32px] w-full sm:w-[115px]">
            <h3 className="text-[#AC5E14] font-[family-name:var(--font-poppins)] text-[20px] md:text-[22px] font-medium leading-[22px]">
              Legal
            </h3>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <a href="#privacy" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Privacy
              </a>
              <a href="#terms" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Terms
              </a>
              <a href="#cookies" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Cookies
              </a>
              <a href="#licenses" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-medium leading-[18px] no-underline">
                Licenses
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
