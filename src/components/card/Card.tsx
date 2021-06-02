import styles from './Card.module.css'

interface CardProps {
    name: string;
    description: string;
}

const Card = ({ name, description }: CardProps) => {

    return (
        <div className="card">
            <div className="card-header">
                {name}
            </div>
            <div className="card-body">
                <div className={`${styles.description} text-primary`}>{description}</div>
            </div>
        </div>
    )
}

export default Card
