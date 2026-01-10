import Link from "next/link";

const Footer = () => {
  return (
      <div className="pb-10 bg-[url('/img/home/footerphone.svg')] md:bg-[url('/img/home/footer.svg')] pt-30 body-font" >
        {/* <div className="py-3 w-11/12 mx-auto "> */}
          <div className="mt-0 flex sm:flex-row flex-col justify-around items-center md:items-start rounded-xl">
            <div className="px-5 py-6 md:py-1 w-1/2 lg:w-1/4">
              <div>
                <ul>
                  <div className=" mx-auto flex flex-wrap">
                    <Link href="https://www.pictoreal.in/" target="_blank">
                      <img
                        className="w-full items-center mx-auto sm:w-6/12 md:w-4/12 lg:w-3/6 cursor-pointer mb-5"
                        src="/img/home/picto-logo.png"
                        alt="picto-logo"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </ul>
              </div>
              <div>
                <div className="flex flex-row justify-center mx-auto gap-2 lg:gap-6 p-0 md:p-5 sm:ml-0 md:ml-0 lg:ml-0 w-full ml-0 ">
                  <Link
                    href="https://www.facebook.com/pictoreal/"
                    target="_blank"
                  >
                    <img
                      className="w-40 xl:w-10 cursor-pointer"
                      src="/img/home/facebook.svg"
                      alt="facebook-logo"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/pictoreal/"
                    target="_blank"
                  >
                    <img
                      className="w-40 xl:w-10 cursor-pointer"
                      src="/img/home/instagram.svg"
                      alt="instagram-logo"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/pictoreal_pict"
                    target="_blank"
                  >
                    <img
                      className="w-40 xl:w-10 cursor-pointer"
                      src="/img/home/Twitter.svg"
                      alt="twitter-logo"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://in.linkedin.com/company/pictoreal"
                    target="_blank"
                  >
                    <img
                      className="w-40 xl:w-10 cursor-pointer"
                      src="/img/home/Linkedin.svg"
                      alt="linkedin-logo"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto px-5 md:p-5 items-center justify-center align-middle">
              <div className="flex">
                <p className="text-white text-3xl align-middle pb-4 sub-heading-font mx-auto">
                  Venue
                </p>
              </div>
              <div className="w-full">
                <iframe
                  className="w-full lg:w-full top-5 md:w-70 ring-4 ring-[#ffffff]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576189448641!2d73.84606999678954!3d18.457542099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1706351618141!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="sm:ml-0 mx-auto p-5 sm:p-3 items-center justify-center align-middle">
              <ul className="flex flex-col text-xl">
                <p className="text-white sub-heading-font text-3xl p-3 mx-auto">
                  Contact Us
                </p>
                <li className="text-[#ffffff] text-2xl pb-2 duration-500 ease-in-out hover:text-slate-600 cursor-pointer mx-auto">
                  <Link href="https://wa.me/9687805915">
                    Xxxxx : +91 99999 99999
                  </Link>
                </li>
                <li className="text-[#ffffff] text-2xl pb-2 duration-500 ease-in-out hover:text-slate-600 cursor-pointer mx-auto">
                  <Link href="https://wa.me/7620851007">
                    Yyyyy : +91 777777 77777
                  </Link>
                </li>
                <li className="text-[#ffffff] text-2xl pb-2 duration-500 ease-in-out hover:text-slate-600 cursor-pointer mx-auto">
                  <Link href="https://wa.me/9022190737">
                    Zzzzzz : +91 88888 88888
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        {/* </div> */}
        <div className="flex flex-col justify-center items-center text-center p-5 mt-20">
          <h1 className=" text-[#ffffff] font-semibold">
            © 2025-2026 All rights reserved | Created with
            <span className="text-red-500"> ❤ </span>
            by &nbsp;
            <Link
              href="/developers"
              className="text-sky-700 font-semibold duration-500 ease-in-out cursor-pointer underline underline-offset-2"
            >
              PICTOREAL Tech Team
            </Link>
          </h1>
        </div>
      </div>
  );
};

export default Footer;
