import React from 'react';
import './SearchRecommendation.css'
import tv from '../../../images/tv.png'
const SearchRecommendation = () => {
    return (
        <>
            <div className=" row w-100 ">
                <div className="col-md-8 search-recommendation-background">
                    <div className="mt-5">
                    <h2 className="search-recommendation-title d-flex justify-content-center container">Search and<br/> Recommendation</h2>
                   <p className="mt-5 search-recommendation-description text-center">The student can search for mentors and show intent to connect.<br/> The search is made seamless assisted by Elasticsearch. The<br/> recommendation system powered by a hybrid of collaborative <br/>and content based filtering uses the profile questions to match<br/> similar students and mentors.
                   </p>
                    </div>
                  
                </div>
                <div className="col-md-4 p-0">
                    <img src={tv} className="w-100 h-100 "/>
                </div>
            </div>
        </>
    );
};

export default SearchRecommendation;