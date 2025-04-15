import React from 'react';
import Card_comp from './Card_comp';
import './Imp_topic.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"
import Nav from "../../Navbar/Nav"
import Footer from "../../Footer/Footer"

function Fourth_year_imp_topic() {
    const studyMaterials = [
        {
            title: "Machine Learning",
            description: "Advanced algorithms and techniques in AI and ML",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-machine-learning.pdf",
            fileType: "PDF"
        },
        {
            title: "Big Data Analytics",
            description: "Processing and analyzing large-scale data sets",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-big-data.pdf",
            fileType: "PDF"
        },
        {
            title: "Cloud Computing",
            description: "Advanced concepts in cloud architectures and services",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-cloud-computing.pdf",
            fileType: "PDF"
        },
        {
            title: "Internet of Things",
            description: "Interconnected devices and their applications",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-iot.pdf",
            fileType: "PDF"
        },
        {
            title: "Blockchain Technology",
            description: "Decentralized systems and cryptocurrencies",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-blockchain.pdf",
            fileType: "PDF"
        },
        {
            title: "Natural Language Processing",
            description: "Processing and understanding human language",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-nlp.pdf",
            fileType: "PDF"
        },
        {
            title: "Cybersecurity",
            description: "Advanced security protocols and threat mitigation",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-cybersecurity.pdf",
            fileType: "PDF"
        },
        {
            title: "Software Project Management",
            description: "Managing large-scale software projects",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-project-management.pdf",
            fileType: "PDF"
        },
        {
            title: "Parallel and Distributed Systems",
            description: "Design of concurrent and distributed applications",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-parallel-systems.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Vision",
            description: "Image processing and visual data analysis",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/fourth-year-computer-vision.pdf",
            fileType: "PDF"
        }
    ];

    return (
        <>  
            <Nav/>
            <div className="study-material-page">
                <div id="head">
                    <h1>Important Topics for B.Tech Fourth Year</h1>
                </div>
                <div className="wrapper">
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
            <Footer/>
        </>
    );
}

export default Fourth_year_imp_topic;