import React, { useState } from 'react'
import styles from './Home.module.css'
import Title from '../../fact-components/Title/Title'
import Input from '../../fact-components/Input/Input'

const pages = {
    CREATE: 'CREATE',
    JOIN: 'JOIN',
}

/**
 * Create/join game
 */
export default function Home() {
    const [page, setPage] = useState('')

    if (!page) {
        return (
            <>
                <header>X</header>
                <main className={styles.pageContainer}>
                    <Title text="The Fact Game" />
                    <div className={styles.buttonContainer}>
                        <button onClick={() => setPage(pages.CREATE)}>
                            Create New Game
                        </button>
                        <button onClick={() => setPage(pages.JOIN)}>
                            Join Existing Game
                        </button>
                    </div>
                </main>
            </>
        )
    }

    // CREATE
    if (page === pages.CREATE) {
        return (
            <>
                <header>X</header>
                <main className={styles.pageContainer}>
                    <Title text="The Fact Game" />
                    <Input placeholder="Enter number of rounds..." />
                    <div className={styles.inputContainer}>
                        <textarea placeholder="Enter a fact"></textarea>
                        <textarea placeholder="Enter a lie"></textarea>
                    </div>
                    <button className={styles.createJoinButton}>CREATE</button>
                </main>
            </>
        )
    }

    // JOIN
    return (
        <>
            <header>X</header>
            <main className={styles.pageContainer}>
                <Title text="The Fact Game" />
                <Input placeholder="Enter the Game ID..." />
                <div className={styles.inputContainer}>
                    <textarea placeholder="Enter a fact"></textarea>
                    <textarea placeholder="Enter a lie"></textarea>
                </div>
                <button className={styles.createJoinButton}>JOIN</button>
            </main>
        </>
    )

    // <main> tag, stick everything else in this
    // flex, cent
    // Title component
    // Create and JoinGame buttons (Natalie has)
    // Conditionally render one of the below:
    //      CreateGame component
    //          2 inputs
    //          button
    //      JoinGame component
    // Input either gameId or number of rounds
    // Render conditionally
}
