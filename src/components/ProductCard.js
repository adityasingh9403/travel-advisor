import React, { useState } from "react";
import "./ProductCard.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const Product = () => {
    const [hI, sHI] = useState(null);
    const [disableHover, sDH] = useState(false);

    const profiles = [
        {
            name: "Devel Dev",
            location: "Indore",
            paragraph: "WMG At Home, Family Makeup Services",
            image: "/images/img5.jpeg",
            background: "/images/img1.jpeg",
        },
        {
            name: "Devel Dev",
            location: "Dewas",
            paragraph: "Plan your dream wedding in your budget",
            image: "/images/img6.jpeg",
            background: "/images/img2.jpeg",
        },
        {
            name: "Devel Dev",
            location: "Mhow",
            paragraph: "Best Price Guaranteed",
            image: "/images/img7.jpeg",
            background: "/images/img3.jpeg",
        },
        {
            name: "Devel Dev",
            location: "Dhar",
            paragraph: "Tours and Trips for Destination Wedding",
            image: "/images/img8.jpeg",
            background: "/images/img4.jpeg",
        },
    ];

    return (
        <div className="product-container">
            <div className="header">
                <h1>Featured Travel Pros</h1>
                <p>Popular exclusive listings in our directory</p>
            </div>
            <div className="profiles">
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className={`profile-card ${disableHover ? "no-hover" : ""}`}
                        onMouseEnter={() => sHI(index)}
                        onMouseLeave={() => sHI(null)}
                    >
                        <div
                            className="background"
                            style={{ backgroundImage: `url(${profile.background})` }}
                        ></div>
                        <div className="profile-overlay">
                            <img className="profile-image" src={profile.image} alt={profile.name} />
                            <div className="profile-info">
                                <h4>{profile.name}</h4>
                                <p><CiLocationOn /> {profile.location}</p>
                                <p>{profile.paragraph}</p>
                                <div
                                    className="btn2"
                                    onMouseEnter={() => sDH(true)}
                                    onMouseLeave={() => sDH(false)}
                                >
                                    <button className="btn1">Dedicated</button>
                                    <button className="btn1">Steven Gould</button>
                                    <button className="btn1">Attentive</button>
                                </div>
                            </div>
                            <div className="hover-buttons">
                                <button className="btn">Book Now</button>
                                <button className="btn">Contact</button>
                                <button className="btn">Learn More</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <h5><IoIosStar /> 4.5</h5>
                            <h5>Visit Profile <FaLongArrowAltRight /></h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;