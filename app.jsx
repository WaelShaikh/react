class Greet extends React.Component {
	render() {
		return (
			<h1>Hi {this.props.name}</h1>
		);
	}
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount() {
		this.timerId = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerId); 
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
	render() {
		return (
			<div>
				It is {this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};
		
		this.click = this.click.bind(this);
	}
	
	click() {
		this.setState(prevState => ({
			count: prevState.count + 1
		}));
	}
	
	render() {
		return(
			<div onClick={this.click}>
				You have clicked {this.state.count} times
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Greet name="Wael"/>
				<Clock />
				<Counter />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
