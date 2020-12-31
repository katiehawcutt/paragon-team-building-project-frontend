import React, { useState } from 'react'
import styles from './Home.module.css'
import Title from '../../fact-components/Title/Title'
import Input from '../../fact-components/Input/Input'
import FactInput from '../../fact-components/FactInput/FactInput'

const pages = {
    CREATE: 'CREATE',
    JOIN: 'JOIN',
}

/**
 * Create/join game
 */
export default function Home() {
    const [page, setPage] = useState('')
    const [fact, setFact] = useState("");
    const [lie, setLie] = useState("");

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
                        <FactInput placeholder={'Enter a fact'} />
                        <FactInput placeholder={'Enter a lie'} />
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
                    <FactInput placeholder={'Enter a fact'} />
                    <FactInput placeholder={'Enter a lie'} />
                </div>
                <button className={styles.createJoinButton}>JOIN</button>
            </main>
        </>
    )
}
