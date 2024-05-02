import ReactDOMServer from 'react-dom/server';
import React, { useState, useEffect } from 'react';
import Button from "../Button";

const DarkModeButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const icon = [
        <svg className="mx-auto fill-secondary-x" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" id="sun" width="16px" height="16px"><g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M11,0v3h2v-3zM4.22266,2.80859l-1.41406,1.41406l2.12109,2.12109l1.41406,-1.41406zM19.77734,2.80859l-2.12109,2.12109l1.41406,1.41406l2.12109,-2.12109zM12,5c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM0,11v2h3v-2zM21,11v2h3v-2zM4.92969,17.65625l-2.12109,2.12109l1.41406,1.41406l2.12109,-2.12109zM19.07031,17.65625l-1.41406,1.41406l2.12109,2.12109l1.41406,-1.41406zM11,21v3h2v-3z"></path></g></g></svg>
        ,
        <svg className="mx-auto fill-secondary-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" id="moon" width="16" height="16"><path d="M308.121 277.63c-50.033 33.934-119.339 20.872-154.107-28.543-34.762-49.423-23.628-119.068 25.22-154.687a8.58 8.58 0 0 0 2.953-10.021 8.58 8.58 0 0 0-8.909-5.453 145.925 145.925 0 0 0-68.42 25.709C39.07 150.904 23.53 242.536 69.801 308.322c46.272 65.785 137.763 82.125 203.55 35.848 20.211-14.213 36.561-33.471 47.32-55.705a8.57 8.57 0 0 0-2.127-10.227 8.575 8.575 0 0 0-10.423-.608zM283.232 59.096a6.593 6.593 0 0 1-6.602 6.596h-16.42v16.425a6.602 6.602 0 0 1-6.602 6.599 6.595 6.595 0 0 1-6.602-6.599V65.691h-16.424a6.596 6.596 0 0 1-6.595-6.596c0-1.827.733-3.476 1.931-4.67s2.846-1.934 4.664-1.934h16.424V36.07a6.6 6.6 0 0 1 6.602-6.599 6.598 6.598 0 0 1 6.602 6.599v16.422h16.42a6.6 6.6 0 0 1 6.602 6.604z" className="colorffbe55 svgShape"></path><path d="M259.541 163.072c0 1.82-.74 3.473-1.938 4.67a6.568 6.568 0 0 1-4.664 1.925h-16.418v16.428c0 3.643-2.959 6.595-6.607 6.595a6.558 6.558 0 0 1-4.666-1.931 6.587 6.587 0 0 1-1.93-4.664v-16.428h-16.425a6.59 6.59 0 0 1-6.595-6.595 6.57 6.57 0 0 1 1.93-4.668 6.567 6.567 0 0 1 4.665-1.934h16.425v-16.422a6.599 6.599 0 0 1 11.266-4.667 6.577 6.577 0 0 1 1.938 4.667v16.422h16.418a6.605 6.605 0 0 1 6.601 6.602zm97.277-29.622c0 1.822-.74 3.474-1.938 4.667a6.582 6.582 0 0 1-4.664 1.932H333.79v16.425a6.599 6.599 0 0 1-6.6 6.596 6.549 6.549 0 0 1-4.666-1.932 6.566 6.566 0 0 1-1.936-4.664v-16.425h-16.42a6.598 6.598 0 0 1-4.67-11.266 6.591 6.591 0 0 1 4.67-1.934h16.42V110.43a6.6 6.6 0 1 1 13.202.001v16.419h16.426a6.601 6.601 0 0 1 6.602 6.6z" className="colorffbe55 svgShape"></path></svg>
    ]

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        
        document.querySelectorAll(".dark-mode-btn").forEach(btn => {
            btn.innerHTML = '';
            const svgIcon = document.createElement("div");
            svgIcon.innerHTML = newTheme === 'dark' ? ReactDOMServer.renderToString(icon[0]) : ReactDOMServer.renderToString(icon[1]);
            btn.appendChild(svgIcon.firstChild);
        });
    };

    useEffect(() => {
        if (theme === "dark") {
            document.querySelectorAll('.bg-white').forEach(element => {
                element.classList.remove('bg-white');
                element.classList.add('secondary-color-bg');
            });
            document.querySelectorAll('.bg-white-txt').forEach(element => {
                element.classList.remove('bg-white-txt');
                element.classList.add('secondary-color-txt');
            });
            document.querySelectorAll('.secondary-color-txt-x').forEach(element => {
                element.classList.add('bg-white-txt-x');
                element.classList.remove('secondary-color-txt-x');
            });
            document.querySelectorAll('.secondary-color-bg-x').forEach(element => {
                element.classList.add('bg-white-x');
                element.classList.remove('secondary-color-bg-x');
            });
            document.querySelectorAll('.fill-secondary-x').forEach(element => {
                element.classList.add('fill-white-x');
                element.classList.remove('fill-secondary-x');
            });
        } else {
            document.querySelectorAll('.secondary-color-bg').forEach(element => {
                element.classList.add('bg-white');
                element.classList.remove('secondary-color-bg');
            });
            document.querySelectorAll('.secondary-color-txt').forEach(element => {
                element.classList.add('bg-white-txt');
                element.classList.remove('secondary-color-txt');
            });
            document.querySelectorAll('.bg-white-txt-x').forEach(element => {
                element.classList.add('secondary-color-txt-x');
                element.classList.remove('bg-white-txt-x');
            });
            document.querySelectorAll('.bg-white-x').forEach(element => {
                element.classList.add('secondary-color-bg-x');
                element.classList.remove('bg-white-x');
            });
            document.querySelectorAll('.fill-white-x').forEach(element => {
                element.classList.add('fill-secondary-x');
                element.classList.remove('fill-white-x');
            });
        }
    }, [theme])

    return (
        <Button variant="dark-mode-btn w-8 h-8 px-0 my-auto rounded-full duration-500 hover:shadow-2xl" onClick={toggleTheme}>
            {theme == "dark" ? (
                icon[0]
            ) : (
                icon[1]
            )}
        </Button>
    )
}

export default DarkModeButton;
