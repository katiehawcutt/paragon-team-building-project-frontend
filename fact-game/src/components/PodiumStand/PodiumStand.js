import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    containerIncludingImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 0.5rem',
    },
    crownContainer: {
        position: 'relative',
        zIndex: '1',
    },
    avatarContainer: {
        marginBottom: '1rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionNumber: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '3rem',
        fontWeight: '900',
        textShadow: 'var(--text-shadow)',
    },
    standContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

export default function PodiumStand({
    crown = null,
    avatar,
    leftColour,
    rightColour,
    bottomHeight,
    position,
}) {
    const TOP_HEIGHT = 15
    const TOP_WIDTH = 100
    const BOTTOM_WIDTH = 90

    const classes = useStyles()

    return (
        <div className={classes.containerIncludingImage}>
            <div className={classes.avatarContainer}>
                <div className={classes.crownContainer}>{crown}</div>
                {avatar}
            </div>
            <div className={classes.standContainer}>
                <span className={classes.positionNumber}>{position}</span>
                <svg
                    width="100"
                    height={TOP_HEIGHT + bottomHeight}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g className="top">
                        {/* Top left */}
                        <rect
                            className="top-left"
                            height={TOP_HEIGHT}
                            width="50"
                            y="0"
                            x="0"
                            fillOpacity="null"
                            strokeOpacity="null"
                            fill="#deecf1"
                        />
                        {/* Top right */}
                        <rect
                            className="top-right"
                            height={TOP_HEIGHT}
                            width={TOP_WIDTH / 2}
                            y="0"
                            x={TOP_WIDTH / 2}
                            fillOpacity="null"
                            strokeOpacity="null"
                            fill="#c7e2e7"
                        />
                    </g>
                    <g className="bottom">
                        {/* Bottom left */}
                        <rect
                            className="bottom-left"
                            height={bottomHeight}
                            width={BOTTOM_WIDTH / 2}
                            y={TOP_HEIGHT}
                            x="5"
                            fillOpacity="null"
                            strokeOpacity="null"
                            fill={leftColour}
                        />
                        {/* Bottom right */}
                        <rect
                            className="bottom-right"
                            height={bottomHeight}
                            width={BOTTOM_WIDTH / 2}
                            y={TOP_HEIGHT}
                            x="50"
                            fillOpacity="null"
                            strokeOpacity="null"
                            fill={rightColour}
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}
