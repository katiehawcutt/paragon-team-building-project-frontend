import React, { useState, useEffect } from 'react'
import './HomePage.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    btnText: {
        adding: '20px',
        height: '100px',
        width: '300px',
        marginRight: '10px',
        borderRadius: '28px',
        backgroundColor: '#6D44D9',
        '&:hover': {
            background: '#5B38B6',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        textAlign: 'left',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
        paddingLeft: '20px',
    },
    dropDownText: {
        marginRight: theme.spacing(2),
        adding: '20px',
        height: '100px',
        width: '280px',
        marginTop: '20px',
        marginRight: '10px',
        borderRadius: '28px',
        backgroundColor: '#6D44D9 !important',
        '&:hover': {
            background: '#5B38B6 !important',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        justifyContent: 'center',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
        paddingBottom: '20px',
        marginLeft: '15px',
    },

    newG: {
        padding: '20px',
        height: '100px',
        width: '300px',
        marginRight: '90px',
        borderRadius: '28px',
        backgroundColor: '#454b82',
        '&:hover': {
            background: '#3F4477',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        textAlign: 'right',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
    },
    existingG: {
        padding: '20px',
        height: '100px',
        width: '300px',
        marginRight: '10px',
        borderRadius: '28px',
        backgroundColor: '#6D44D9',
        '&:hover': {
            background: '#5B38B6',
        },
        border: 'none',
        outline: 'none',
        fontFamily: 'Questrial',
        fontSize: '30px',
        color: 'white',
        textShadow: '5px 3px 5px rgba(0, 0, 0, 0.25)',
        textAlign: 'left',
        boxShadow: '13px 18px 20px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
        lineHeight: '35px',
    },
}))

function HomePage() {
    const classes = useStyles()
    const [existingGame, setExistingGame] = useState([])

    useEffect(() => {
        async function getGameData(handleClick) {
            let res = await fetch('http://localhost:3000') //need to know url from backend.
            let data = await res.json()
            setExistingGame(data) //<<Need info from backend
        }
        getGameData()
    }, [handleClick])

    //For dropdown menu using material ui
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    function handleClick() {
        console.log('handleclick fired')
        console.log(existingGame)
        existingGame.map((item) => {
            console.log(item)
            return <button key={item.id}>{item.name}</button>
            //Button not be rendered on the page.
            //item.id and item.name info needed from backend
        })
    }

    return (
        <div className="hompage-container">
            <h1 className="title-container">Fact Game</h1>
            <div className="button-container">
                <Button
                    className={classes.newG}
                    variant="contained"
                    color="primary"
                    startIcon={<Avatar src={'../Images/GameIcon2.png'} />}
                >
                    Create New Game
                </Button>

                <div className={classes.root}>
                    <div>
                        <Button
                            className={classes.btnText}
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            startIcon={
                                <Avatar src={'../Images/gameIcon.png'} />
                            }
                            onClick={handleToggle}
                        >
                            Join Existing Game
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom'
                                                ? 'center top'
                                                : 'center bottom',
                                    }}
                                >
                                    <Paper className={classes.dropDownText}>
                                        <ClickAwayListener
                                            onClickAway={handleClose}
                                        >
                                            <MenuList
                                                autoFocusItem={open}
                                                id="menu-list-grow"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    Game 1
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    Game 2
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    Game 3
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
