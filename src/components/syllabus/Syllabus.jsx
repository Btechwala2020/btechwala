import React, { useEffect, useRef } from 'react';
import Card_comp from '../Important Topics/card_comp';
import './syllabus.css';
import 'remixicon/fonts/remixicon.css';
import "../../style.css"





function Syllabus() {
    const carouselRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const studyMaterials = [
        {
            title: "First year syllabus",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl: "https://drive.google.com/file/d/158UZh4asHuFcP9ykZJXB-SZGEos0I3Y0/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "second year syllabus",
            description: "Complete syllabus for Second year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl: "https://drive.google.com/file/d/1D7RaGErewmlp9EWMWRHoJSlR-SZ-d6cC/view?usp=drive_link",
            fileType: "ZIP"
        },
        {
            title: "third year syllabus",
            description: "Complete syllabus for Third year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl: "https://drive.google.com/file/d/1vKuzirOj8V0RpBQW4Prp8CgIFD3cwwzH/view?usp=drive_link",
            fileType: "PDF"
        },
        {
            title: "Fouth year syllabus",
            description: "Complete syllabus for fourth year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl:"https://drive.google.com/file/d/12JYsQzwepgABVWIXtn9Ay8wVI0Qb9WNP/view?usp=drive_link",
            fileType: "ZIP"
        },
   


    ];

    return (
        <>
           
            <div className="study-material-page">
                <div id="head">
                    <h1>Latest Quantum for btech first year</h1>

                </div>
                <div className="wrappersyllabus">
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

export default Syllabus;