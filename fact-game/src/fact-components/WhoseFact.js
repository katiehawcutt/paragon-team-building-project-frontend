import React from 'react'
import './WhoseFact.css'
import Websocket from 'react-websocket'

function WhoseFact({
    roundNumber,
    facts,
    participants,
    handleClick,
    leaderboard,
    secondsLeft,
    turnId,
}) {
    return (
        <section>
            <h1>
                Round #{roundNumber} (Seconds left: {secondsLeft})
            </h1>
            <h2>One of the statements is a lie. Guess whose it is.</h2>
            {facts.map((fact, i) => {
                return <p key={i}>{fact}</p>
            })}
            {participants.map((participant, i) => {
                return (
                    <button
                        key={i}
                        onClick={
                            handleClick ??
                            (() =>
                                console.log(
                                    "don't forget to hook me up for " + turnId
                                ))
                        }
                    >
                        {participant.text}
                    </button>
                )
            })}
            <div>
                <h3>Leaderboard</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(({ displayName, score }, i) => {
                        return (
                            <tr key={i}>
                                <td>{displayName}</td>
                                <td>{score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )

    // return (
    //     <div className="whose-fact-container">
    //         <h1>Whose Fact?</h1>
    //         <div>
    //             <p type="text" className="whoseFact">
    //                 {' '}
    //                 Fact from the back-end goes here!{' '}
    //             </p>
    //         </div>
    //     </div>
    // )
}

export default WhoseFact
