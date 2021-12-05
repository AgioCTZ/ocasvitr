import picture from "./Cool.jpg"
function AppContent() {
    return (
        <content>
            <div className=" grid justify-items-center grid-cols-3 justify-center ">
                <div></div>
                <h1 className=" text-center text-5xl mt-20">Top Quality Digital Products To Explore</h1>
                <div></div>
                <div></div>
                <p className=" text-center  mt-8">Get your blood tests delivered at let home collect sample from the victory of managements that supplies best design szstem guidelines ever</p>
                <div></div>
                <div></div>
                <button className="mt-4 rounded-full px-5 py-4 bg-red-400">Explore</button>
                <div></div>
                <div></div>
                <img className="content-center mt-20  " src={picture} alt="" />
                <div></div>
                <div></div>
                <p className="mt-28 text-2xl text-red-400">WHAT'S THE FUNCTION</p>
                <div></div>
                <div></div>
                <h2 className="mt-4 text-3xl text-opacity-100">Meet the feature of product</h2>
                <div></div>
            </div>


            <div className=" grid  grid-cols-4 justify-items-start p-36 ">
                <img className="w-16 h-16 rounded-xl" src={picture} alt="" />
                <img className="w-16 h-16 rounded-xl" src={picture} alt="" />
                <img className="w-16 h-16 rounded-xl" src={picture} alt="" />
                <img className="w-16 h-16 rounded-xl" src={picture} alt="" />
                <p className="text-left  mt-4">Nevím co se dát</p>
                <p className="text-left  mt-4">Nevím co se dát</p>
                <p className="text-left  mt-4">Nevím co se dát</p>
                <p className="text-left  mt-4">Nevím co se dát</p>
                <p className="text-left  ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Praesent id justo in neque elementum ultrices.</p>
                <p className="text-left  ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Praesent id justo in neque elementum ultrices.</p>
                <p className="text-left  ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Praesent id justo in neque elementum ultrices.</p>
                <p className="text-left  ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Praesent id justo in neque elementum ultrices.</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid justify-items-center">
                <img className=" w-2/6  rounded-2xl mt-10" src={picture} alt="" />
                </div>
                <div className="">

                    <p className="text-red-400 text-2xl ">OUR SERVICES</p>
                    <p className="text-3xl mt-2">Business Goals Achieved with Design</p>


                    <div className="grid grid-cols-4 justify-items-start mt-10">
                        
                        <img className="w-16 mt-4 rounded-xl ml-28" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-4 justify-items-start mt-10">
                        <img className="w-16 mt-4 rounded-xl ml-28" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        
                    </div>


                </div>
            </div>
            <div className=" grid justify-items-center mt-10">
                <p className="text-red-400 text-2xl">QUALITY FEATURES</p>
                <p className="text-3xl mt-2">Amazing useful features</p>
                
            </div>
            <div className="grid grid-cols-4 pl-20 pr-20 pt-10">
                <div className="grid grid-cols-2">
                    <img className="w-16 mt-4 rounded-xl ml-20" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                </div>
                <div className="grid grid-cols-2">
                    <img className="w-16 mt-4 rounded-xl ml-20" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                </div>
                <div className="grid grid-cols-2">
                    <img className="w-16 mt-4 rounded-xl ml-20" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                </div>
                <div className="grid grid-cols-2">
                    <img className="w-16 mt-4 rounded-xl ml-20" src={picture} alt="" />
                        <div className=" mt-4 ">
                            <p>Smart Features</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                </div>
            </div>
        </content>
    );


}
export default AppContent;