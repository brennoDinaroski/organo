import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    // That is JSX not HTML
    return (
        <Fragment>
            <header className="banner">
                <img src="/imagens/banner.png" alt="banner principal da pagina do organo"/>
            </header>            
        </Fragment>

    )
}

