import React from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";


export interface IRobot {
    key: number;
    name: string;
    id: string;
    email: string;
}

interface IAppProps{

}

interface IAppState{
    robots:  Array<IRobot>;
    searchfield: string;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props:IAppProps) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount ():void {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>):void => {
        this.setState({searchfield: event.currentTarget.value})
    }

    render(): JSX.Element {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
        return (!robots.length)? 
        <h1>Loading...</h1> : 
        <div className="tc">
            <Header/>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
            
    } 
}

export default App;