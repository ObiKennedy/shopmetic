import React, {useState} from "react";
import './index.scss'
import PropTypes from "prop-types";

export default function Items({Price, Description, status}){
    

    const [likeClick, setLikeClick] = useState('unlike')
    const handleLikeClick = () =>{
        setLikeClick(likeClick === "unlike"? "like" : "unlike")
    }

    return(
        <div className="item">
            <div>
                <img src="*" alt="item"/>
                <div onClick={handleLikeClick}>
                    <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8081 35.7L3.37684 19.4C2.67764 18.75 2.12827 18 1.62884 17.2C-1.06808 12.75 -0.368881 7.05 3.37684 3.35C5.52439 1.2 8.42109 0 11.4676 0C16.2621 0 19.2587 2.8 20.5073 4.4C21.7559 2.8 24.7524 0 29.547 0C32.5935 0 35.4902 1.2 37.6377 3.35C41.3335 7.05 42.0827 12.75 39.3857 17.2C38.8863 18 38.3369 18.75 37.6377 19.4L21.2065 35.7C20.807 36.1 20.2076 36.1 19.8081 35.7ZM11.4676 2C8.92052 2 6.5732 3 4.77525 4.75C1.72873 7.8 1.12941 12.5 3.3269 16.15C3.72645 16.8 4.22588 17.45 4.77525 18L20.5073 33.6L36.2393 18C36.7887 17.45 37.2881 16.85 37.6877 16.15C39.8852 12.45 39.3358 7.75 36.2393 4.75C34.4414 3 32.0441 2 29.547 2C25.9511 2 22.9545 3.95 21.3563 6.65C20.9568 7.3 20.0079 7.3 19.6083 6.65C18.0601 3.95 15.0635 2 11.4676 2Z" fill="#A9A9A9"/>
                    </svg>
                </div>
                <div onClick={handleLikeClick} className={likeClick}>
                    <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 36C20.1034 36 19.7679 35.8594 19.4933 35.5781L5.21652 21.4688C5.06399 21.3438 4.85426 21.1406 4.58733 20.8594C4.32041 20.5781 3.89714 20.0664 3.31752 19.3242C2.73791 18.582 2.21931 17.8203 1.76172 17.0391C1.30413 16.2578 0.896112 15.3125 0.537667 14.2031C0.179222 13.0938 0 12.0156 0 10.9688C0 7.53125 0.968564 4.84375 2.90569 2.90625C4.84282 0.96875 7.51972 0 10.9364 0C11.8821 0 12.8468 0.167969 13.8306 0.503906C14.8145 0.839844 15.7296 1.29297 16.5762 1.86328C17.4227 2.43359 18.151 2.96875 18.7612 3.46875C19.3713 3.96875 19.9509 4.5 20.5 5.0625C21.0491 4.5 21.6287 3.96875 22.2388 3.46875C22.849 2.96875 23.5773 2.43359 24.4238 1.86328C25.2704 1.29297 26.1855 0.839844 27.1694 0.503906C28.1532 0.167969 29.1179 0 30.0636 0C33.4803 0 36.1572 0.96875 38.0943 2.90625C40.0314 4.84375 41 7.53125 41 10.9688C41 14.4219 39.2535 17.9375 35.7606 21.5156L21.5067 35.5781C21.2321 35.8594 20.8966 36 20.5 36Z" fill="#DF0000"/>
                    </svg>
                </div>
            </div>
            <div>
                <p>{Description}</p>
                <div>
                    <p>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#A9A9A9"/>
                        </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#A9A9A9"/>
                        </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#A9A9A9"/>
                        </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#A9A9A9"/>
                        </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#A9A9A9"/>
                        </svg>
                    </p>
                    {status === "In" || status === "Out of" ? <p className={status ==='In'?'inStock':'outOfStock'}>{status} stock</p> : null}
                </div>
                <p>{Price}</p>
            </div>
        </div>
    )
}

Items.propTypes = {
    Price: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["In", "Out of"]).isRequired
  };