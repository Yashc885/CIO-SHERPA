import React from 'react';
import Image from 'next/image';

const Events = () => {
    const eventsData = [
        {
            imgSrc: 'https://picsum.photos/800/600?image=1041',
            title: 'Cupping Therapy Sessions',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
        },
        {
            imgSrc: 'https://picsum.photos/800/600?image=1080',
            title: 'Energy Healing Sessions',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
        },
    ];

    return (
        <div className="py-4">
            <div className="  mx-auto px-4 sm:px-6 lg:px-8">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-white border-2 border-gray-300 rounded-lg shadow-xl overflow-hidden flex">
                        <div className="w-1/2">
                            <img
                                src={event.imgSrc}
                                alt={event.title}
                                className="w-full h-auto object-cover"
                                // width={800}
                                // height={600}
                            />
                        </div>
                        <div className="w-1/2 p-6">
                            <div className="text-2xl font-bold mb-2">{event.title}</div>
                            <div className="text-gray-600 mb-2">{event.subtitle}</div>
                            <div className="bg-gray-400 h-1 w-10 text-center "></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
