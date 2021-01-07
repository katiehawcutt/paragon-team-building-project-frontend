import React from 'react'
// import styles from './UserPic.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    medium: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    large: {
        width: theme.spacing(19),
        height: theme.spacing(19),
    },
}))

export default function UserPic() {
    const classes = useStyles()

    return (
        <Avatar
            className={classes.medium}
            alt="user icon"
            src="/images/userIcon.png"
        ></Avatar>
    )
}
