import React from 'react'
import './FinalPage.css'

function FinalPage() {
    return (
        <div className="podium-container">
            <div className="score-container">
                <div className="thirdPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="3rd-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="../Images/3rd.png"
                            alt="podium-stand"
                            className="podium-stand3"
                        />
                        <h2 className="positionNum3">3</h2>
                    </div>
                </div>
                <div className="fistPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="1st-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="./Images/1st.png"
                            alt="podium-stand"
                            className="podium-stand1"
                        />
                        <h2 className="positionNum1">1</h2>
                    </div>
                </div>
                <div className="secondPlace-container">
                    <img
                        src="./Images/Tick.png"
                        alt="3nd-place"
                        className="profilePic"
                    />
                    <div className="banner">
                        <img
                            src="./Images/2nd.png"
                            alt="podium-stand"
                            className="podium-stand2"
                        />
                        <h2 className="positionNum2">2</h2>
                    </div>
                </div>
            </div>
            <h2 className="winnerName">Name Here Wins!</h2>
            <button className="exitBtn">Exit</button>
        </div>
    )
}

export default FinalPage
