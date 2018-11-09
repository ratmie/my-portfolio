import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Container, Dropdown, Header } from 'semantic-ui-react'

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
	<Container text style={{ marginTop: '5em'}}>
		<Header as='h1'>this is my site</Header>
		<p>• 組み込みエンジニア
	2年目
	• Qiita
	• Twitter @ratmie1
	• Mail？
	• Github @ratmie
</p>
	</Container>
);

const Skill = props => (
	<Container text style={{ marginTop: '5em'}}>
		<Header as='h1'>this is my site</Header>
		言語
	• C++
		○ 業務のメイン。組み込みLinuxはほぼこれ。ベターC＋OOP的な使い方が多い。
		C++03環境がメインなのでせねてC++11に移行したい。
	• C言語
		○ 業務サブ。マイコンボード開発はこちらが多い。
	• JavaScript
		○ GUIのクライアントサイドにて。ポートフォリオ作成にも使用。
	• C#
		○ Windows用のツール作成
	• Python
		○ 勉強中。競プロ、バックエンド
	• 英語
		○ 最低限（最低限ってどこだろう）
	• 日本
		○ ネイティブではない半端な関西訛り

Tool/Framework
	• React
	• AWS
Git(Github)

	</Container>
);

const Work = props => (
	<Container text style={{ marginTop: '5em'}}>
		<Header as='h1'>this is my site</Header>
		<p>Portfolio</p>
		tessts

	</Container>
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
				<Container>
					{this.renderContents()}
				</Container>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
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
					</a>
					</header>
			</div>
		);
	}
}

export default App;
