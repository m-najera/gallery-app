import { FC } from "react"
import { Link } from "react-router-dom"

const Welcome: FC = () => {
    return (
        <>
            <h1>Welcome to My App</h1>
            <Link to="/search/"> Go to the site! </Link>
        </>
    )
}

export default Welcome