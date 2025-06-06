import React from "react";
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_page/home/Hero";


describe('Hero Component',() =>{
    test('Render Hero image',()=>{
        render( <Hero/> );
        const heroImage = screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });

    test('Render Signup button',()=>{
        render( <Hero/> );
        const signupButton = screen.getByRole("button",{name: /Sign up now/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("p-2 btn btn-primary fs-5 mb-5");
    });
});