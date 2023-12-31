import {styles} from '../todo.styles.js';

const Header = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    return (
        <div style={styles.header}>
            <h1 style={styles.title}>TODO LIST</h1>
            <div style={styles.today}>
                <div style={styles.todayText}>
                    <p>TODAY</p>
                </div>
                <div style={styles.day}>
                    <p style={styles.dayText}>{day + ' ' + monthNames[month] + ' ' + year}</p>
                </div>
            </div>
        </div>
    )
}

export default Header