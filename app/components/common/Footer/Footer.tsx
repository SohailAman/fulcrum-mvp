import Link from "next/link";

export const Footer = () => {
  return (
    <div className="custom-container max-lg:px-6 md:py-20 py-10">
      <div className="flex max-sm:flex-col md:items-center md:justify-between md:pt-8 border-t border-t-black">
        <div className="text-[14px] text-black leading-[150%] font-[400] max-md:py-6">
          2024 Falcrum. All right reserved.
        </div>

        <ul className="p-0 m-0 list-none flex flex-wrap lg:gap-6 gap-4">
          <li>
            <Link
              href="#"
              className="text-[14px] text-black leading-[150%] font-[400] underline underline-offset-2"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[14px] text-black leading-[150%] font-[400] underline underline-offset-2"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[14px] text-black leading-[150%] font-[400] underline underline-offset-2"
            >
              Cookies Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
