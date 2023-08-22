import React from 'react';
import { useEffect} from 'react';
import {useContext} from 'react';
import Header from "../Header/Header";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hook/useFormWithValidation';

function Profile({ handleSignOut, handleProfile, loggedIn }){

  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleProfile(values);
    console.log(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

 return(
        <>
            <Header loggedIn={loggedIn} />
            <section className="profile">
                <h3 className="profile__title">{`Привет, ${currentUser.name || ''}!`}</h3>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <label className="profile__label">
                    Имя
                        <input
                        name='name'
                        className="profile__input"
                        onChange={handleChange}
                        defaultValue={values.name || ''}
                        type='text'
                        required
                        minLength="2"
                        maxLength="30"
                        pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                        
                        />
                    </label>
                    <span className="profile__erorr">{errors.name}</span>
                    <label className="profile__label">
                    E-mail
                        <input
                        name='email'
                        className="profile__input"
                        onChange={handleChange}
                        defaultValue={values.email || ''}
                        type="email"
                        required
                        />
                        </label>
                        <span className="profile__erorr">{errors.email}</span> 
                        <button className='profile__button-save' type='submit' disabled={!isValid} >Редактировать</button>
                    
                </form>
                <button type="submit" className="profile__logout" onClick={handleSignOut}>
                        Выйти из аккаунта
                    </button>
            </section>
        </>
    );
    
}

export default Profile