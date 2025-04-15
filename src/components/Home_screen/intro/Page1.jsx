import React from 'react'
import './Page1.css'

function Page1() {
    return (
        <>
            <div id='page1'>
                <div id="searchbox">
                    <input
                        id="sb"
                        type="text"
                        placeholder="search for courses, books and documents"
                    />
                    <div id="icon">
                        <a href="/">
                            <i className="ri-search-2-line"></i>
                        </a>
                    </div>
                </div>
                <div id="mobile-head">
                    <h4>Study Smarter, Achieve <span>More!</span></h4>
                    <h3>Access the best study notes from students who've been there.</h3>
                </div>
                <h1 id='bw'>btechwala</h1>

            </div>
            
        </>

    )
}

export default Page1