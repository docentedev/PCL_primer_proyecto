import { useEffect, useState } from "react"

const Form = () => {

    const [name, setName] = useState('')

    const handlerChange = (event: any) => {
        setName(event.target.value)
    }

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <div className="card mt-4">
            <div className="card-header">
                Form
            </div>
            <div className="card-body">
                <label>Name</label>
                <input className="form-control" type="text" value={name} onChange={handlerChange} />
            </div>
        </div>
    )
}

export default Form
