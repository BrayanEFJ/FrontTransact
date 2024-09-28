const InfoSection = () => {

    return (
        <>
            <div className=' flex flex-col items-center justify-center  w-full bg-black text-white '>
                <div className=" flex flex-wrap max-w-7xl justify-center items-center w-full  max-xl:p-8">
                    <div className="flex max-md:w-auto w-1/2 ">
                        <div className="flex flex-col ">
                            Trusted
                            <span className="text-5xl font-bold">
                                Financial Services
                            </span>
                        </div>
                    </div>
                    <div className="flex max-md:w-auto w-1/2 items-center justify-center">
                        <span className="max-lg:max-w-96">
                        get to know us, we also want to get to know you, below you can see different features about our software so you can get the most out of your financial life and achieve your goals.
                        </span>

                    </div>
                </div>

            </div>
        </>


    )
}
export default InfoSection;