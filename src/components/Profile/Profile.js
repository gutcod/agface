import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ isProfileOpen, toggleModal, user, loadUser }) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const onFormChange = event => {
    switch (event.target.name) {
      case "user-name":
        setName(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      default:
        return;
    }
  };
  const onFormUpdate = data => {
    fetch(`http://localhost:3300/profile/${user.id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ formInput: data }),
    })
      .then(resp => {
        if (resp.status === 200 || resp.status === 304) {
          toggleModal();
          loadUser({ ...user, ...data });
        }
      })
      .catch(console.log);
  };

  return (
    <div className='profile-modal'>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
        <main className='pa4 black-80 w-80'>
          <img src='http://tachyons.io/img/logo.jpg' className='br-100 h3 w3 dib' alt='avatar' />
          <h1>{name}</h1>
          <h1>Imege Submited: {user.entries}</h1>
          <p>Member since: {new Date(user.joined).toLocaleDateString()} </p>
          <hr />
          <label className='mt2 fw6' htmlFor='user-name'>
            Name:
          </label>
          <input
            onChange={onFormChange}
            className='pa2 ba w-100'
            placeholder={user.name}
            type='text'
            name='user-name'
            id='name'
          />
          <label className='mt2 fw6' htmlFor='user-name'>
            Age:
          </label>
          <input
            className='pa2 ba w-100'
            placeholder={user.age}
            type='text'
            name='age'
            id='name'
            onChange={onFormChange}
          />
          <div className='mt4 bottom-div'>
            <button
              className='b pa2 grow pointer hower-white w-40 bg-light-blue b--black-20'
              onClick={() => onFormUpdate({ name, age })}>
              Save
            </button>
            <button
              className='b pa2 grow pointer hower-white w-40 bg-light-red b--black-20'
              onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </main>
        <div className='modal-close' onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default Profile;
