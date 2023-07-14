import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineWhatsApp,
  } from "react-icons/ai";
  import { IoHandLeftOutline } from "react-icons/io5";
  import { BiCloudDownload, BiMailSend } from "react-icons/bi";
  import style from "./banner.module.css";
  import { Link } from "react-scroll";
  const Banner = () => {
    return (
      <div className="container">
        <div className="pt-20 h-screen block md:flex  justify-evenly items-center">
          {/* social section */}
          <div className="flex md:block items-center justify-between">
            <a
              href="https://github.com/MD-Mojammel-Haque-shakil/"
              target="_blank"
              rel="noopener noreferrer"
              title="Mojammel's Github"
            >
              <AiFillGithub size={25} />
            </a>
  
            <a
              href="https://www.linkedin.com/in/md-mojammel-haque-shakil-989308277"
              target="_blank"
              rel="noopener noreferrer"
              title="Mojammel's Linkedin"
            >
              <AiFillLinkedin size={25} className="my-6" />
            </a>
          </div>
          {/* Description */}
          <div className="w-[500px] space-y-3 text-[#333]">
            <h3 className={` text-4xl text-[#333] font-semibold flex`}>
              Mojammel Haque Shakil{" "}
              <span className="-rotate-12 pl-5">
              </span>
            </h3>
  
            <p className={`${style.hr} relative pl-20 font-semibold text-lg`}>
              Front-end Web Developer{" "}
            </p>
            <p className="w-full font-medium">
              As a professional and passionate programmer, I always keep learning
              and exploring new technologies. For my quick and self learning
              attitude, I try to develop myself consistently, specially my
              Development skills.
            </p>
            <div className="flex items-center space-x-5 mt-4">
              <a download="Mojammel_resume" href="https://drive.google.com/file/d/147GLy1fUnFDO6UYXHoCeuFivy8OSqEVS/view?usp=sharing">
                <button className="btn-primary p-2">
                  Download CV <BiCloudDownload size={20} className="ml-8" />
                </button>
              </a>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="focus:text-red-500 font-semibold hover:underline cursor-pointer active:text-red-600"
              >
                {/* <button className="btn-primary">
                  Lets Talk <BiMailSend size={25} className="ml-4" />
                </button> */}
              </Link>
            </div>
            <div className="pt-10">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="focus:text-red-500 font-semibold hover:underline cursor-pointer "
              >
              </Link>
            </div>
          </div>
          {/* animated image */}
  
          <img
            className={`${style.animated_image} w-96 border-8 border-slate-600 grayscale cursor-pointer rounded-full`}
            title="Mojammel Haque Shakil"
            src="https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/353839483_1374548650071611_1724300337875935093_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGeP9BqH3QPbAg7a0QhEYuQxeDN1NebhXvF4M3U15uFe7IGlOiETT8rMHpzfM0yi2X0oUvxqoAUIjVMolPBs_FW&_nc_ohc=vEFgvnpn1NkAX9iM6lI&_nc_ht=scontent.fdac152-1.fna&oh=00_AfAo75kygWxZuTlEcveJG9U9NdPMBHQish0PfgOQF2I8UQ&oe=64B6FCF5"
            alt=""
          />
        </div>
      </div>
    );
  };
  
  export default Banner;