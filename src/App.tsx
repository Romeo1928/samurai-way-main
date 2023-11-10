import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {StoreType} from "./redux/state";


type PropsType = {
	store: StoreType
	// addPost: (postText: string) => void //может быть любое название (postMessage, p ,message....) главное типизация
	// addMessage: (message: string) => void //может быть любое название (postMessage, p ,message....) главное типизация
}


const App = (props: PropsType) => {
	const state = props.store.getState()

	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				<Route path='/profile' render={() =>
					<Profile profilePage={state.profilePage}
								dispatch={props.store.dispatch.bind(props.store)}
								// addPost={props.store.addPost.bind(props.store)}
								// changeNewTextCallback={props.store.changeNewText.bind(props.store)}

					/>}
				/>
				<Route path='/dialogs' render={() =>
					<Dialogs dialogsPage={state.dialogsPage}
								newMessageText={state.dialogsPage.newMessageText}
								// addMessage={props.store.addMessage.bind(props.store)}
								dispatch={props.store.dispatch.bind(props.store)}
								// changeNewMessageCallBack={props.store.changeNewMessage.bind(props.store)}
					/>}
				/>
				<Route path='/news' render={() => <News/>}/>
				<Route path='/music' render={() => <Music/>}/>
				<Route path='/settings' render={() => <Settings/>}/>
			</div>
		</div>
	);
}

export default App;
