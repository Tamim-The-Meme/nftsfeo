import React from "react"
import heroImage from "../images/hero-image.png"

export default function Hero(){
    return (
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Buy and sell digital art, <span className="hero-text-gradient">NFTs collection</span></h1> 
                <p className="hero-subtitle">Find exclusive digital artwork. collect digital artwork made by amazing people. make money by doing something you passionate.</p>
                <div className="hero-buttons">
                    <button className="hero-btn-explore">Explore</button>
                    <button className="hero-btn-create">Create</button>
                </div>
            </div>
            <img className="hero-image" src={heroImage} alt="some really cool photo" />
        </section>
    )
}