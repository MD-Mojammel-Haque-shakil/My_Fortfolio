import React from 'react';
import "./Skill.css"
import ProgressBar from "@ramonak/react-progress-bar";
import img1 from "../../../assets/image/icon/1.png"
import img2 from "../../../assets/image/icon/2.png"
import img3 from "../../../assets/image/icon/3.png"
import img5 from "../../../assets/image/icon/5.png"
import img6 from "../../../assets/image/icon/6.png"
import img7 from "../../../assets/image/icon/7.png"
import img8 from "../../../assets/image/icon/8.png"
import img10 from "../../../assets/image/icon/10.png"
import img12 from "../../../assets/image/icon/12.png"
import img13 from "../../../assets/image/icon/13.png"
import img15 from "../../../assets/image/icon/15.png"
import img16 from "../../../assets/image/icon/16.png"
import img17 from "../../../assets/image/icon/17.png"
import img18 from "../../../assets/image/icon/18.png"

const Skill = () => {
    return (
        <div className='bg-[#061127] py-14' id='skill'>

            <div className="SkillAll md:mx-20 mx-3">
                
                <div className="title text-left">
                    <h2>My Skile</h2>
                    <p className='text-white'>Mojammel Haque Shakil my Feature</p>
                </div>

                <div className="Skill mt-16 grid md:grid-cols-2 gap-10">

                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img7} alt="" />
                            <h2 className=''>HTML</h2>
                        </div>
                        <ProgressBar
                            completed={95}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img2} alt="" />
                            <h2 className=''>CSS</h2>
                        </div>
                        <ProgressBar
                            completed={90}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img1} alt="" />
                            <h2 className=''>BOOSTRAP</h2>
                        </div>
                        <ProgressBar
                            completed={93}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img13} alt="" />
                            <h2 className=''>TAILWINDE</h2>
                        </div>
                        <ProgressBar
                            completed={97}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px] rounded-[50%]' src={img18} alt="" />
                            <h2 className=''>DAISYUI</h2>
                        </div>
                        <ProgressBar
                            completed={99}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img8} alt="" />
                            <h2 className=''>JAVASCRIPT</h2>
                        </div>
                        <ProgressBar
                            completed={60}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img12} alt="" />
                            <h2 className=''>REACT.JS</h2>
                        </div>
                        <ProgressBar
                            completed={92}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img5} alt="" />
                            <h2 className=''>FIREBASE</h2>
                        </div>
                        <ProgressBar
                            completed={72}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px] rounded-[50%]' src={img15} alt="" />
                            <h2 className=''>MONGODB</h2>
                        </div>
                        <ProgressBar
                            completed={65}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img10} alt="" />
                            <h2 className=''>NODE.JS</h2>
                        </div>
                        <ProgressBar
                            completed={62}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img3} alt="" />
                            <h2 className=''>EXPRESS.JS</h2>
                        </div>
                        <ProgressBar
                            completed={58}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px] rounded-[50%]' src={img17} alt="" />
                            <h2 className=''>REST API</h2>
                        </div>
                        <ProgressBar
                            completed={60}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img16} alt="" />
                            <h2 className=''>NEXT.JS</h2>
                        </div>
                        <ProgressBar
                            completed={65}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>
                    <div className="ProgressItem">
                        <div className="ProgressHeading flex items-center mb-4">
                            <img className='w-[50px] h-[50px]' src={img6} alt="" />
                            <h2 className=''>GITHUB</h2>
                        </div>
                        <ProgressBar
                            completed={85}
                            bgColor="#10B981"
                            height="13px"
                            labelColor="#F26E3F"
                            margin="0px"
                            transitionDuration="3s"
                            animateOnRender
                            maxCompleted={100}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;