import { getStyle } from '../../lib/getStyle/getStyle'
import styles from './Button.module.scss'
import { Ellipsis } from 'lucide-react'

export const Button =({
    children, 
    className,
    color, //primary | secondary | outline | transparent | disabled
    circle,
    cta,
    loading,
    disabled,
    ...otherProps
}) => {

    const colorStyles = {
        primary: styles.primary,
        secondary: styles.secondary,
        outline: styles.outline,
        transparent: styles.transparent,
        disabled: styles.disabled,
    }

    const mode = {
        [styles.circle]: circle,
        [styles.cta]: cta,
        [styles.loading]: loading,
        [styles.disabled]: disabled,
    }

    const additional = [
        colorStyles[color],
        className,
    ].filter(Boolean)
    
    

    return(
        <button 
        className = {getStyle(styles.button, mode, additional)}
        disabled={disabled}
        {...otherProps}
        >
            {loading ? (
                <Ellipsis className={styles.loader} />
            ) : (
                children
            )}
            
        <span className={styles.underLine}></span>
        </button>
    )
}