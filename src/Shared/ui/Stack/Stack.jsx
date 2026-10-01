import { forwardRef } from 'react'
import { getStyle } from '../../lib/getStyle/getStyle'
import styles from './Stack.module.scss'

export const Stack = forwardRef(({
    children, 
    className,
    direction, //column
    align, //center, end, start, stretch
    justify, //between, center, start, around
    gap, //8, 16, 24, 32, 40, 64
    tag = 'div', //section, article, aside, main, nav, header
    wrap,
    max,
    ...otherProps
}, ref) => {

    const directionClasses = {
        row: styles.directionRow,
        column: styles.directionColumn, 
    }

    const alignClasses = {
        start: styles.alignStart,
        center: styles.alignCenter,
        end: styles.alignEnd,
        stretch: styles.alignStretch,
    }

    const justifyClasses = {
        start: styles.justifyStart,
        center: styles.justifyCenter,
        end: styles.justifyEnd,
        between: styles.justifyBetween,
        around: styles.justifyAround,
    }
    
    const mapGap = {
        8: 'gap8',
        16: 'gap16',
        24: 'gap24',
        32: 'gap32',
        40: 'gap40',
        64: 'gap64',
    }

    const mapStackTag = {
        div: 'div',
        section: 'section',
        article: 'article',
        aside: "aside",
        main: "main",
        nav: "nav",
        header: "header"
    }

    const mode = {
        [styles.max]: max,
        [styles.wrap]: wrap,

    }

    const additional = [
        justifyClasses[justify],
        alignClasses [align],
        directionClasses [direction],
        gap && styles [mapGap[gap]],
        className,
    ]

    const Tag = mapStackTag [tag] || 'div'

    return(
        <Tag 
        className = {getStyle(styles.flex, mode, additional)}
        {...otherProps}
        >
            {children}
        </Tag>
    )
})