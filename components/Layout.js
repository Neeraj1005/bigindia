import { Children } from 'react'
import styles from '../styles/custom.module.css'

import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
}


export default Layout