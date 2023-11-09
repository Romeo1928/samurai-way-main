import React from 'react';
import './index.css';
import {store} from './redux/state'
import {rerenderEntireTree} from "./render";

store.subscribe(rerenderEntireTree)
rerenderEntireTree()