// Newslet.jsx
import React, { useEffect, useState } from "react";
import Logo from '../../assets/LearnEarnTeach.png'
import { getNews } from "../../api/api";
import './newslet.css';

const Newslet = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getNewsLet = async () => {
            try {
                const token = localStorage.getItem('user_info');
                const response = await getNews(token);
                setEvents(response.data.events);
                console.log(response);
            } catch (error) {
                console.error('Error fetching news:', error);
                // Handle error (e.g., display a message to the user)
            }
        }
        getNewsLet();
    }, [])

    return (
        <div className="newslet">
            <div className="heading">EVENTS</div>
            <div className="newsBoxes">
                {events.map((event, index) => (
                    <div key={index} className="newsBox">
                        <div className="newsHeading">{event.headline}</div>
                        <div className="newsDesc">{event.description} <a className="link" href={event.link}>Read more</a></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Newslet;