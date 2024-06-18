// Partner.jsx

import React from 'react';

const Partner = () => {
    const images = [
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png"
    ];

    return (
        <section className="client bg-gray-200 py-8">
            <div className="container mx-auto">
                <div className="row">
                    <div className="section-title mb-12 relative text-center">
                        <h2 className="text-2xl md:text-xl sm:lg  font-semibold uppercase pb-2 text-black tracking-wide m-0" data-aos="fade-out" data-aos-duration="1500">
                            Our Partners :
                        </h2>
                        <div className="after-element absolute left-0 right-0 mx-auto bg-blue-400 h-1 w-20 mt-2"></div>
                    </div>
                    <div className="carousel-client">
                        <marquee behavior="scroll" direction="left" scrollamount="5">
                            {images.map((src, index) => (
                                <div className="slide inline-block mx-4" key={index}>
                                    <img src={src} alt={`Client logo ${index + 1}`} />
                                </div>
                            ))}
                        </marquee>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;
