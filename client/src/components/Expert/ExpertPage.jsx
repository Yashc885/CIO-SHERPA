import React from 'react'
import Expert from "./Expert"
const ExpertPage = () => {
  return (
    <div className="mx-auto bg-white pl-2 pr-2  ">
    <div className="py-4">
    <div className="text-3xl text-center py-8 uppercase"> Our Expert advice </div>
    <div className="py-2  ">
        <Expert />
    </div>
    <div className="py-2 ">
        <div className="md:flex sm:py-2 ">
            <div className="md:w-[50%] shadow-xl ">
            <div className="pr-2">
                <Expert />
                </div>
            </div>
            <div className=" md:w-[50%] shadow-xl">
            <div className="pl-2">
                <Expert />
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ExpertPage