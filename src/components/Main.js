import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName, userDescription, userAvatar]);

  useEffect(() => {
    if (cards.length) {
      return;
    } else {
      api
        .getInitialCards()
        .then((response) => {
          console.log(response);
          setCards(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cards]);

  return (
    <main className="content root__content">
      <section className="user">
        <div className="user__photo-wrap">
          <img
            className="user__photo"
            src={userAvatar}
            alt="Фото пользователя"
          />
          <button
            className="user__photo-edit"
            type="button"
            aria-label="заменить фото пользователя"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="user__edit-wrap">
          <h1 className="user__name">{userName}</h1>
          <button
            className="user__edit"
            type="button"
            aria-label="редактировать"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <p className="user__activity">{userDescription}</p>
        <button
          className="user__add-card"
          type="button"
          aria-label="добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="cards-container">
          {cards.map(({ name, link, likes, _id }) => (
            <Card name={name} link={link} likes={likes.length} key={_id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
