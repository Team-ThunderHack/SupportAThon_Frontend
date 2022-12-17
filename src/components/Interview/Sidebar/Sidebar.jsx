import React, { useState } from 'react'
import questions from '../Questions';
import "./Sidebar.scss";

function Sidebar(props) {
    const {
        active,
        setActive,
        category,
        setCategory
    } = props;

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="sidenav">
            <div className="sidenav__wrapper">
                <select name="category" id="category" onChange={handleChange}>
                    <option value="General">General</option>
                    <option value="Software Engineering">Software Engineering</option>
                </select>
                <div className='sidenav__wrapper--links'>
                    {
                        questions.map((question) => {
                            if (category === question.category) {
                                if (active !== question.question) {
                                    return (
                                        <div key={question.question} className="sidenav__wrapper--link" onClick={() => setActive(question.question)}>
                                            <span>{question.question}</span>
                                        </div>
                                    )
                                }

                                return (
                                    <div key={question.question} className="sidenav__wrapper--link active">
                                        <span>{question.question}</span>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar