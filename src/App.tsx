import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {RootStateType} from "./redux/state";


type StateType = {
	state: RootStateType
	addPost: (postMessage: string) => void //может быть любое название (postMessage, p , message....) главное типизация
}

const App = (props: StateType) => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				<Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
				<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
				<Route path='/news' render={() => <News/>}/>
				<Route path='/music' render={() => <Music/>}/>
				<Route path='/settings' render={() => <Settings/>}/>
			</div>
		</div>
	);
}

export default App;
