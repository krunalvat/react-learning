import React from 'react';
import UseContext from './UseContext';
import Name from "./Name";
/** Hard Coded */
import Form from './Form';

/** Little Hard Coded */
import FormSimple from './FormSimple';

import FormSimpleTwo from './FormSimpleTwo';
import User from './User';
import UserCard from './UserCard';
import Props from './Props';
import ToDoListToggle from './ToDoListToggle';
import ToDoList from './ToDoList';
import UseStateExample from './UseStateExample';
import ImageGallery from './ImageGallery';
import Challenge from "./Challenge";
import ChallengeOne from './ChallengeOne';
import ChallengeTwo from './ChallengeTwo';
import ChallengeThree from './ChallengeThree';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route  path='/challenge' element={<Challenge />} />
      <Route exact path='/challenge-one' element={<ChallengeOne />} />
      <Route exact path='/challenge-two' element={<ChallengeTwo />} />
      <Route exact path='/challenge-three' element={<ChallengeThree />} />
      <Route exact path='/image-gallery' element={<ImageGallery />} />
      <Route exact path='/use-state' element={<UseStateExample />} />
      <Route exact path='/todo-list' element={<ToDoList />} />
      <Route exact path='/todo-list-toggle' element={<ToDoListToggle />} />
      <Route exact path='/props' element={<Props name="test"/>} />
      <Route exact path='/user-props' element={ User.map((val) => {
            return (
                <>
                    < UserCard key = {val.id} name= {val.name} username ={ val.username } email = { val.email } image= { val.image } />
                </>
            )
        })} />
      <Route exact path='/form' element={<Form/>} />
      <Route exact path='/form-two' element={<FormSimple/>} />
      <Route exact path='/form-three' element={<FormSimpleTwo/>} />
      <Route exact path='/name' element={<Name/>} />
      <Route exact path='/user-context' element={<UseContext/>} />
    </Routes> 
    </>
  );
}

export default App;
