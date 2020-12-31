import React, { useState } from 'react'
import styles from './Home.module.css'

const pages = {
    CREATE: 'CREATE',
    JOIN: 'JOIN',
}

/**
 * Create/join game
 */
export default function Home() {
    const [page, setPage] = useState('')

    // Header

    if (!page) {
        return (
            <>
                <header>X</header>
                <main className={styles.pageContainer}>
                    <h1>The Fact Game</h1>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => setPage(pages.CREATE)}>
                            Create New Game
                        </button>
                        <button onClick={() => setPage(pages.JOIN)}>
                            Join Existing
                        </button>
                    </div>
                </main>
            </>
        )
    }

    if (page === pages.CREATE) {
    }

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
