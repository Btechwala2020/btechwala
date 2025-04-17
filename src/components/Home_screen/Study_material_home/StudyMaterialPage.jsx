import React, { useEffect, useRef } from 'react';
import SmCard from './SmCard';
import './StudyMaterialPage.css';
import 'remixicon/fonts/remixicon.css';



function StudyMaterialPage() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let isDragging = false, startX, startScrollLeft;

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
        }
    }, []);

    const studyMaterials = [
        {
            title: "Latest Syllabus",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Syllabus",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Previous Year Questions",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Previous Year Questions",
            downloadUrl: "/pyq/First-year",
            fileType: "ZIP"
        },
        {
            title: "Important Questions",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Important Questions",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Handwritten Notes",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Handwritten Notes",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },
        {
            title: "Youtube Channel",
            description: "Complete syllabus for first year B.Tech students",
            imageUrl: "Youtube Channel",
            downloadUrl: "/downloads/first-year-syllabus.pdf",
            fileType: "PDF"
        },
        {
            title: "Placement",
            description: "Last 5 years question papers for all subjects",
            imageUrl: "Placement",
            downloadUrl: "/downloads/pyq-bundle.zip",
            fileType: "ZIP"
        },

    ];

    return (
        <>
            <div className="study-material-pageee">
                <h3>Services</h3>
                <h5>Experience the difference with the premium services we provide</h5>
                <div className="wrapperee">
                    <i className="fa-solid fa-angle-left" onClick={() => carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth}></i>
                    <div className="carouselee" ref={carouselRef}>
                        {studyMaterials.map((material, index) => (
                            <SmCard
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

export default StudyMaterialPage;