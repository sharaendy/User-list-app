import React from 'react';

export default function Success({ count }) {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        Уведомление отправлено
        {' '}
        <br />
        <b>{count}</b>
        {' '}
        { count === 1 ? 'пользователю.' : 'пользователям.'}
      </p>
      <button onClick={() => window.location.reload()} className="send-invite-btn" type="button">
        Назад
      </button>
    </div>
  );
}
