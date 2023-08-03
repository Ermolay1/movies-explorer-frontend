import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
    return (
      <main className="profile">
        <section>
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__field">
              <label className="profile__label">Имя</label>
              <input className="profile__input" type="text" name="name" placeholder="Имя" required minLength={2} maxLength={20}/>
            </div>
            <div className="profile__field">
              <label className="profile__label">E-mail</label>
              <input className="profile__input" type="email" name="email" placeholder="E-mail" required minLength={6} maxLength={20} />
            </div>
            <button className="profile__button profile__button_submit hover-link" type="submit">Редактировать</button>
            <Link to='/' className="profile__button profile__button_logout hover-link" type="submit">Выйти из аккаунта</Link>
          </form>
        </section>
      </main>
    )
  }
  
  export default Profile