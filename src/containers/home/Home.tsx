import { useState } from "react"
import Card from "../../components/card/Card"
import Counter from "../../components/counter/Counter"
import Form from "../../components/form/Form"
import Title from "../../components/title/Title"

const Home = () => {

    const [items] = useState([
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
    ])

    return (
        <div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Title>My title</Title>
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Card
                        name="Claudio R."
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque leo non egestas feugiat. Vivamus fermentum faucibus elit eu volutpat. Donec in mollis augue, nec semper dui."
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Counter />
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Form />
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-4">
                    <ul className="list-group mt-4">
                        {items.map((e: any, i: number) => (
                            <li className="list-group-item" key={i}>{e.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
