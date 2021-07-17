import "./Todo.css"
import React, { Component } from 'react'
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, ListGroupItem } from 'reactstrap';



class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = { todos: props.todos, typing: "task" }
    }
    changed = (event) => {
        console.log(event.target.value);

        this.setState((_state) => {
            return { typing: event.target.value }
        })
    }

    add = () => {
        console.log(this.state.typing);

        this.setState((state) => {
            let array = [...state.todos];
            array.push({ title: this.state.typing })


            return { todos: array }
        })
    }
    deleteTodo = (index) => {
        let data = [...this.state.todos]
        data.splice(index, 1)
        this.setState({ todos: data })
    }
    render() {
        return (
            <div className="rounded overflow-hidden shadow p-3 bg-white">
                <h1>Todo App</h1>
                <div className="d-flex align-items-center mb-2">
                    <Input type="text"
                        placeholder="new task"
                        className="me-2"
                        value={this.state.typing}
                        onChange={this.changed} />
                    <Button color="success" onClick={this.add}>
                        <FontAwesomeIcon icon={faPlus} /></Button>
                </div>
                <ListGroup>
                    {this.state.todos.map((item, index) => {
                        return <ListGroupItem key={index} tag="a" href="#" action>{index + 1}. {item.title}
                            <Button
                                color="danger"
                                className="float-right"
                                onClick={this.deleteTodo.bind(this, index)}
                            >

                                <bsTrash color="white" fontWeight="600" fontSize="1.5rem" />
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>

                        </ListGroupItem>
                    })}
                </ListGroup>
            </div>
        )
    }
}

export default Todo;