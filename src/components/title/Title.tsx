interface TitleProps {
    children: React.ReactChild;
}

const Title = ({ children }: TitleProps) => {
    return (
        <h1>{children}</h1>
    )
}

export default Title
