import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("LinkedIn is the best!!", "Top News - 7776 Readers")}
            {newsArticle("Coronovirus Updates", "Top News - 870 Readers")}
            {newsArticle("Elon Musk asks for justification", "Top News - 5498 Readers")}
            {newsArticle("WFH: Work from Home or Work from Hell?", "Top News - 5421 Readers")}
            {newsArticle("Facebook changes it's name to Meta", "Top News - 1642 Readers")}
            {newsArticle("Google Pixel 6: Newest King in the market", "Top News - 6071 Readers")}
        </div>
    );
}

export default Widgets
