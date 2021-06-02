import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0)

    const handlerClickSub = () => {
        setNumber(number - 1)
    }

    const handlerClickAdd = () => {
        setNumber(number + 1)
    }

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="text-center">
                    <h2>Counter Example</h2>
                    <h3>{number}</h3>
                    <div className="btn-group">
                        <button className="btn btn-primary" onClick={handlerClickSub}>-</button>
                        <button className="btn btn-primary" onClick={handlerClickAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter