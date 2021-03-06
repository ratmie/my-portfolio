import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Container, Dropdown, Header, Segment, GridRow, Grid, GridColumn, SegmentGroup, Transition } from 'semantic-ui-react'

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
		<Menu.Item onClick={() => props.onClick(Works)}>Works</Menu.Item>

		</Container>
	</Menu>
);

const About = props => (
	<Transition transitionOnMount={true} unmountOnHide={true} >
	<Container text style={{ paddingTop: '5em'}}>
		<Header as='h1' inverted>プロフィール</Header>
		<SegmentGroup style={{ textAlign: 'left'}}>
			<Segment> 組み込みエンジニア 2年目</Segment>
			<Segment>・<a href='https://qiita.com/ratmie'>Qiita @ratmie</a></Segment>
			<Segment>・<a href='https://twitter.com/ratmie1'>Twitter @ratmie1</a></Segment>
			<Segment> ・<a hreaf='https://github.co,/ratmie'>Github @ratmie</a></Segment>
			<Segment><p>趣味：映画鑑賞。10日に1度は映画館に行きたい。</p>
				<p>漫画：ビースターズとヒロアカが好きです。</p></Segment>
		</SegmentGroup>
		<Header as='h1' inverted>希望</Header>
		<SegmentGroup style={{ textAlign: 'left'}}>
			<Segment>希望する雇用形態：正社員</Segment>
			<Segment>希望する勤務地：関東、関西</Segment>
			<Segment>希望する年収：400~</Segment>
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
							<Header as='h5'>C++</Header>
							<p>
								業務のメイン。組み込みLinuxはほぼこれ。
								C++03環境がメインなのでせめてC++11に移行したい。
							</p>
				</Segment>
				<Segment>
			<Header as='h5'>C言語</Header>
				業務サブ。マイコンボード開発はこちらが多い。
				</Segment>
				<Segment>
			<Header as='h5'>JavaScript</Header>
				GUIのクライアントサイドにて。ポートフォリオ作成にも使用。
				</Segment>
				<Segment>
			<Header as='h5'>C#</Header>
				Windows用のツール作成
				</Segment>
				<Segment>
			<Header as='h5'>Python</Header> 
				勉強中。競プロ、バックエンド
				</Segment>
				<Segment>
			<Header as='h5'>英語</Header>
				最低限（最低限ってどこだろう
				</Segment>
				<Segment>
			<Header as='h5'>日本語</Header> 
				ネイティブではない半端な関西訛り
				</Segment>
				</Segment.Group>
				</GridColumn>
				</Grid>
		</GridRow>
		<Header as='h3'　inverted>Tool/Framework</Header>

		<GridRow>
			<Segment.Group>
				<Segment>
				React
				</Segment>
				<Segment>
				AWS
				</Segment>
				<Segment>
			Git(Github)
			</Segment>
			</Segment.Group>
		</GridRow>
		組み込み、マイコンボード、Linux
		要件定義から一連の経験

		フロント、バックエンド
		どういう仕事がしたいか
	</Container>
	</Transition>
);

const Works = props => (
	<Transition transitionOnMount={true} unmountOnHide={true} >
	<Container text style={{ paddingTop: '5em'}}>
		<Header as='h1' inverted>個人的に作ったもの</Header>
		<Segment>
		<p>Portfolio</p>
		
		ReactとSemantic UIで実装しています。
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
			</div>
		);
	}
}

export default App;
