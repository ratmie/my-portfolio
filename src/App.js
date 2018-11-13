import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Tansition, Menu, Container, Dropdown, Header, Segment, GridRow, Grid, GridColumn, SegmentGroup, Transition } from 'semantic-ui-react'

const TopMenu = (props) => (
	<Menu fixed='top' inverted>
	<Container>
		<Menu.Item as='a' header>
			My Portfolio
		</Menu.Item>
		<Menu.Item position='right' onClick={() => props.onClick(About)}>About</Menu.Item>
		<Dropdown item text='Skill' onClick={() => props.onClick(Skill)}>
			<Dropdown.Menu>
				<Dropdown.Item>Language</Dropdown.Item>
				<Dropdown.Item>Tool / Workframe</Dropdown.Item>

			</Dropdown.Menu>
		</Dropdown>
		<Menu.Item onClick={() => props.onClick(Work)}>Work</Menu.Item>

		</Container>
	</Menu>
);

const About = props => (
	<Transition transitionOnMount={true} unmountOnHide={true} >
	<Container text style={{ paddingTop: '5em'}}>
		<Header as='h1' inverted>this is my site</Header>
			<SegmentGroup style={{ textAlign: 'left'}}>
			<Segment> 組み込みエンジニア 2年目</Segment>
			<Segment>・<a href='https://qiita.com/ratmie'>Qiita @ratmie</a></Segment>
			<Segment>・<a href='https://twitter.com/ratmie1'>Twitter @ratmie1</a></Segment>
			<Segment> ・<a hreaf='https://github.co,/ratmie'>Github @ratmie</a></Segment>
		</SegmentGroup>
	</Container>
	</Transition>
);

const Skill = props => (
	<Transition transitionOnMount={true} unmountOnHide={true} >
	<Container text style={{ paddingTop: '5em'}}>
	<Header as='h2' inverted>使えるもの、勉強しているもの。</Header>
	<Header as='h3'inverted>言語</Header>
		<GridRow>
			<Grid>
				<GridColumn>
					<Segment.Group style={{ textAlign: 'left'}}>
						<Segment>
							<Header as='h'>C++</Header>
							<p>
								業務のメイン。組み込みLinuxはほぼこれ。
								C++03環境がメインなのでせめてC++11に移行したい。
							</p>
				</Segment>
				<Segment>
			• C言語
				○ 業務サブ。マイコンボード開発はこちらが多い。
				</Segment>
				<Segment>
			• JavaScript
				○ GUIのクライアントサイドにて。ポートフォリオ作成にも使用。
				</Segment>
				<Segment>
			• C#
				○ Windows用のツール作成
				</Segment>
				<Segment>
			• Python
				○ 勉強中。競プロ、バックエンド
				</Segment>
				<Segment>
			• 英語
				○ 最低限（最低限ってどこだろう
				</Segment>
				<Segment>
			• 日本
				○ ネイティブではない半端な関西訛り
				</Segment>
				</Segment.Group>
				</GridColumn>
				</Grid>
		</GridRow>
		<Header as='h3'>Tool/Framework</Header>

		<GridRow>
			<Segment.Group>
				<Segment>
				• React
				</Segment>
				<Segment>
				• AWS
				</Segment>
				<Segment>
			Git(Github)
			</Segment>
			</Segment.Group>
		</GridRow>
	</Container>
	</Transition>
);

const Work = props => (
	<Transition transitionOnMount={true} unmountOnHide={true} >
	<Container text style={{ paddingTop: '5em'}}>
		<Header as='h1' inverted>this is my site</Header>
		<Segment>
		<p>Portfolio</p>
		tessts
		</Segment>
	</Container>
	</Transition>
);

class App extends Component {
	constructor() {
		super();
		this.state = {
			contents: About
		};
	}

	renderContents() {
		return <this.state.contents />;
	}

	handleClick(cont) {
		this.setState({contents: cont})
	}
	render() {
		return (
			<div className="App">
				<TopMenu onClick={(i) => this.handleClick(i)}/>
				<Container className="content">
					{this.renderContents()}
				</Container>
					<header className="App-header">
						{/* <img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							//target="_blank"
							//rel="noopener noreferrer"
						>
							Learn React
					</a> */}
					</header>
			</div>
		);
	}
}

export default App;
