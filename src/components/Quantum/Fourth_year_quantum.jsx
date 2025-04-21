import React from 'react';
import Card_comp from '../Important Topics/card_comp';
import './All_year_quantum.css';
import { useEffect, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"


function Fourth_year_imp_topic() {
    const carouselRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const studyMaterials = [
        {
            title: "Machine Learning",
            description: "Advanced algorithms and techniques in AI and ML",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-machine-learning.pdf",
            fileType: "PDF"
        },
        {
            title: "Big Data Analytics",
            description: "Processing and analyzing large-scale data sets",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-big-data.pdf",
            fileType: "PDF"
        },
        {
            title: "Cloud Computing",
            description: "Advanced concepts in cloud architectures and services",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-cloud-computing.pdf",
            fileType: "PDF"
        },
        {
            title: "Internet of Things",
            description: "Interconnected devices and their applications",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-iot.pdf",
            fileType: "PDF"
        },
        {
            title: "Blockchain Technology",
            description: "Decentralized systems and cryptocurrencies",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-blockchain.pdf",
            fileType: "PDF"
        },
        {
            title: "Natural Language Processing",
            description: "Processing and understanding human language",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-nlp.pdf",
            fileType: "PDF"
        },
        {
            title: "Cybersecurity",
            description: "Advanced security protocols and threat mitigation",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-cybersecurity.pdf",
            fileType: "PDF"
        },
        {
            title: "Software Project Management",
            description: "Managing large-scale software projects",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-project-management.pdf",
            fileType: "PDF"
        },
        {
            title: "Parallel and Distributed Systems",
            description: "Design of concurrent and distributed applications",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-parallel-systems.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Vision",
            description: "Image processing and visual data analysis",
            imageUrl: "Quantum",
            downloadUrl: "/downloads/fourth-year-computer-vision.pdf",
            fileType: "PDF"
        }
    ];


    return (
        <>  
            
            <div className="study-material-page">
                <div id="head">
                    <h1>Latest Qauntum for B.Tech Fourth Year</h1>
                </div>
                <div className="wrapperqntm">
                    <div className="carousel">
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
                </div>
            </div>
            
        </>
    );
}

export default Fourth_year_imp_topic;