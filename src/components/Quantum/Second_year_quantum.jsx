import React from 'react';
import Card_comp from '../Important Topics/card_comp';
import './All_year_quantum.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"


function Second_year_imp_topic() {
    const carouselRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const studyMaterials = [
        {
            title: "Data Structures and Algorithms",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1OtrK964cguqoAjnKYEZ5nXDYk-ZLPz-e/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Object-Oriented Programming",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1y9kJHiaA9peQYJYRrcLeWnAGl7alg03x/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Digital Electronics",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1rfgbo5bW6kroaNDPN6HaRkRGaGH8GHAS/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Computer Organization and Architecture",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1MwS3KfU_QpHOCu_W1Z5nnLX1bOIxkibV/view?usp=drive_link",
            fileType: "PDF"
        },
        
        {
            title: "Operating System",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1CGuPBbhzRyyrtOgi5dOuv-tStEulA_3T/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Universal Human Values",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1Cc_P0L00Kf7wVKoqlCn-75LRrOYPkVsP/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "technical Communication",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1bM_WXS5zTRS4T9YL26TJz43ECJW7-PgP/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "engineering Mathematics 4",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1efEO4RCAmq8p6Px4wZJPv4uq0b5OraXO/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Discrete structure and theory of logics",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1F3HG9tqC7pyOv7oBgdhEgEgGIaC_9jBE/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Theory of automata and formal languages ",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1jrju5FI1hh9G35hwnVp7rMpCI1x770DH/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Cyber Security",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1xyJFXmlAm0JjF7n410KhC0vRRKjv_kV9/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Python Programming",
            description: "last moment topics for crack your exam",
            imageUrl: "Quantum",
            downloadUrl: "https://drive.google.com/file/d/1F8TtbLBXNfxCDvK0CNfht9w9J7o-YU3G/view?usp=drive_link",
            fileType: "PDF"
        }
    ];

    return (
        <>  
            <div className="study-material-page">
            <div id="head">
                    <h1>Latest Quantum for btech Second year</h1>

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

export default Second_year_imp_topic;