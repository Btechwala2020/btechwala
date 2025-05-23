import React, { useEffect, useRef } from 'react';
import Card_comp from './card_comp';
import './All_year_imp_topic.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"
import Nav from "../../Navbar/Nav"
import Footer from "../../Footer/Footer"



function First_year_imp_topic() {
    const carouselRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const studyMaterials = [
        {
            title: "Engineering Chemistry",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Engineering physics",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/pyq/First-year",
            fileType: "ZIP"
        },
        {
            title: "Engineering Mathematics I",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Engineering Mathematics II",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "Programming for problem solving",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "soft-skills",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "environment and ecology",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "fundamental of mechanical engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "fundamental of electrical engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "fundamental of electronics engg",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },


    ];

    return (
        <>
           
            <div className="study-material-page">
                <div id="head">
                    <h1>important topics for btech first year</h1>

                </div>
                <div className="wrapperimp">
                    <i className="fa-solid fa-angle-left" onClick={() => carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth}></i>
                    <div className="carousel" >
                        {studyMaterials.map((material, index) => (
                            <Card_comp
                                key={index}
                                title={material.title}
                                description={material.description}
                                imageUrl={material.imageUrl}
                                downloadUrl={material.downloadUrl}
                                fileType={material.fileType}
                            />
                        ))}
                    </div>
                    <i className="fa-solid fa-angle-right" onClick={() => carouselRef.current.scrollLeft += carouselRef.current.offsetWidth}></i>
                </div>
            </div>
           




        </>
    );
}

export default First_year_imp_topic;