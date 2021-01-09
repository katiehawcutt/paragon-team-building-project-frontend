import React from 'react'
import styles from './Leaderboard.module.css'

export default function LeaderBoard({ leaderboard }) {
    return (
        <div>
            <table className={styles.leaderTable}>
                <thead>
                    <tr className={styles.tableHeadingsRow}>
                        <th className={styles.tableHeading} colSpan="3">
                            Leaderboard
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((person, i) => {
                        return (
                            <tr key={i}>
                                <td className={styles.leaderboardOrder}>
                                    <span
                                        className={
                                            person.position <= 3
                                                ? styles.circleTopThree
                                                : styles.circle
                                        }
                                    >
                                        {person.position}
                                    </span>
                                </td>
                                <td className={styles.tableData}>
                                    {person.displayName}
                                </td>
                                <td className={styles.tableData}>
                                    {person.score}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
