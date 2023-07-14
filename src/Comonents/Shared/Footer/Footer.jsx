import React from 'react';
import "./Footer.css"
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <div className='bg-[#061127] '>

            <div className="waver">
                <Wave fill='#109774'
                    paused={false}
                    options={{
                        height: 30,
                        amplitude: 60,
                        speed: 0.25,
                        points: 4
                    }}
                />
            </div>


            <footer className="Footer grid md:grid-cols-3 md:px-20 px-3 py-10 bg-[#109774] text-black">
                <div>
                    <span className="text-lg font-semibold text-black">Services</span>
                    <h3><a className="link link-hover">Figma To HTML</a></h3>
                    <h3><a className="link link-hover">Responsive Design</a></h3>
                    <h3><a className="link link-hover">Web Design</a></h3>
                    <h3><a className="link link-hover">Web DEvelopment</a></h3>
                </div>

                <div className='SocialIcon mt-8 md:mt-0'>
                    <h2 className="pb-3 text-lg font-semibold text-black">Information</h2>
                    <a href="https://www.linkedin.com/in/shipon-deb-74ba2a27b" target='blank'><i class=" fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/sunto.dab.9" target='blank'><i class="fa ml-4 fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://github.com/SunthoDev" target='blank'><i class="ml-4 fa fa-github" aria-hidden="true"></i></a>
                    <h3 className='mt-3'><a className=" link link-hover">Dhaka, Bangladesh</a></h3>
                </div>

                <div className='mt-8 md:mt-0'>
                    <span className="text-lg font-semibold text-black">Newsletter</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button type="submit" class="btn btn-success absolute top-0 right-0 rounded-l-none
                            inline-flex items-center 
                            justify-start px-7  py-2  overflow-hidden font-medium transition-all 
                            bg-gradient-to-r from-emerald-500 to-blue-500  hover:bg-white group">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"> </span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"><span className='font-bold text-base'> Send Email</span><i class="fa text-lg ml-2 fa-envelope" aria-hidden="true"></i></span>

                            </button>

                        </div>
                    </div>
                </div>
            </footer>



        </div >
    );
};

export default Footer;