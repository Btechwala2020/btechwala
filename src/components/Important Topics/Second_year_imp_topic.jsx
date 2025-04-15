import React from 'react';
import Card_comp from './Card_comp';
import './Imp_topic.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"
import Nav from "../../Navbar/Nav"
import Footer from "../../Footer/Footer"

function Second_year_imp_topic() {
    const studyMaterials = [
        {
            title: "Data Structures and Algorithms",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-dsa.pdf",
            fileType: "PDF"
        },
        {
            title: "Object-Oriented Programming",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-oop.pdf",
            fileType: "PDF"
        },
        {
            title: "Digital Electronics",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-digital-electronics.pdf",
            fileType: "PDF"
        },
        {
            title: "Computer Organization and Architecture",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-coa.pdf",
            fileType: "PDF"
        },
        {
            title: "Database Management Systems",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-dbms.pdf",
            fileType: "PDF"
        },
        
        {
            title: "Computer Networks",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-networks.pdf",
            fileType: "PDF"
        },
        {
            title: "Operating System",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-discrete-math.pdf",
            fileType: "PDF"
        },
        {
            title: "Universal Human Values",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-dsa.pdf",
            fileType: "PDF"
        },
        {
            title: "technical Communication",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-oop.pdf",
            fileType: "PDF"
        },
        {
            title: "engineering Mathematics 4",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-digital-electronics.pdf",
            fileType: "PDF"
        },
        
        
        {
            title: "Discrete structure and theory of logics",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-os.pdf",
            fileType: "PDF"
        },
        {
            title: "Theory of automata and formal languages ",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-networks.pdf",
            fileType: "PDF"
        },
        
        {
            title: "Cyber Security",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-networks.pdf",
            fileType: "PDF"
        },
        {
            title: "Python Programming",
            description: "last moment topics for crack your exam",
            imageUrl: "Important Topics",
            downloadUrl: "/downloads/second-year-discrete-math.pdf",
            fileType: "PDF"
        }

    ];

    return (
        <>  <Nav/>
            <div className="study-material-page">
            <div id="head">
                    <h1>important topics for btech first year</h1>

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

export default Second_year_imp_topic;