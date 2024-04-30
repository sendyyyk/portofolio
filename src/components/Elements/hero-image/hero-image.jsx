import React, { useEffect, useRef } from 'react';
import HeroIcon from "./hero-icon/hero-icon";
import HeroVideo from './hero-vid/hero-vid';
import Button from "../Button";
import ScrollText from '../Scroll-Text/ScrollText';

const HeroImage = () => {
    const heroImage = useRef(null);

    useEffect(() => {
        const currentPath = window.location.pathname;

        function heroImageHeight() {
            const heroIconHeight = document.querySelector(".hero-icon").clientHeight
            const headerHeight = document.querySelector("#header-wrap header").clientHeight

            if (currentPath === "/") {
                if (window.innerWidth <= 992) {
                    if (window.innerWidth <= 576) {
                        if (window.innerHeight <= heroIconHeight + headerHeight * 4) {
                            heroImage.current.style.height = `calc(100vh + 400px)`;
                        } else {
                            heroImage.current.style.height = `100vh`;
                        }
                    } else if (window.innerWidth <= 768) {
                        if (window.innerHeight <= heroIconHeight + headerHeight * 3.5) {
                            if (window.innerWidth <= 576) {
                                heroImage.current.style.height = `calc(100vh + 250px)`;
                            } else {
                                if (window.innerHeight <= heroIconHeight) {
                                    heroImage.current.style.height = `calc(100vh + 750px)`;
                                } else {
                                    heroImage.current.style.height = `calc(100vh + 400px)`;
                                }
                            }
                        } else {
                            heroImage.current.style.height = `100vh`;
                        }
                    } else {
                        if (window.innerHeight <= heroIconHeight + headerHeight * 2) {
                            heroImage.current.style.height = `calc(100vh + 400px)`;
                        } else {
                            heroImage.current.style.height = `100vh`;
                        }
                    }
                } else if (window.innerWidth > 992) {
                    if (window.innerHeight <= heroIconHeight + headerHeight * 3) {
                        if (window.innerHeight <= headerHeight * 4.5) {
                            heroImage.current.style.height = `calc(100vh + 600px)`;
                        } else {
                            heroImage.current.style.height = `calc(100vh + 350px)`;
                        }
                    } else {
                        heroImage.current.style.height = `100vh`;
                    }
                }
            }
        }
        window.addEventListener("resize", heroImageHeight);
        window.addEventListener("load", heroImageHeight);

    }, []);

    return (
        <div ref={heroImage} id="hero-image" className="flex">
            <div className="container-custom item-zindex flex justify-between items-center my-auto mx-auto px-5">
                <section className="hero-title w-3/5">
                    <h1 className="mx-auto">
                        <span className="text-8xl">
                            Selamat Datang
                        </span>
                    </h1>
                    <div className="scroll-text-wrap my-3 overflow-hidden w-10/12">
                        <ScrollText style="text-3xl">
                            Terima Kasih Sudah Mengunjungi Halaman Website Saya.
                        </ScrollText>
                    </div>
                    <Button variant="w-40 h-16 rounded-lg shadow-1xl hover:shadow-2xl duration-500">
                        <span className="text-primary text-xl opacity-75 hover:opacity-100">
                            About Me
                        </span>
                    </Button>
                </section>
                <section className="hero-icon w-2/5 h-2/5 relative">
                    <HeroVideo></HeroVideo>
                    <HeroIcon></HeroIcon>
                </section>
            </div>
        </div>
    )
}

export default HeroImage;