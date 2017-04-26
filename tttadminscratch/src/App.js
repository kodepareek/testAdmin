import React, { Component } from 'react';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import {EditorView, EditorEdit} from './components/EditorView';

import UserList from './components/userList'

export const App = () => (
  <Admin restClient={jsonServerRestClient('http://localhost:3001')}> 
    <Resource name="tales" list={EditorView} edit={EditorEdit} />
    <Resource name="writers" list={UserList} />
  </Admin>
)

export default App;
