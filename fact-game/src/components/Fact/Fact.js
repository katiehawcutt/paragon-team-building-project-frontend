import React from 'react'
import css from './Fact.module.css'
import classnames from 'classnames'

export default function Fact({ factText, selected, handleClick }) {
    return (
        <button
            className={classnames(css.Fact, { [css.FactSelected]: selected })}
            onClick={handleClick}
        >
            {factText}
        </button>
    )
}
