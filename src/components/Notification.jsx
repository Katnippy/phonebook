import './Notification.css';

export default function Notification({ notification: { message, style }}) {
  if (message === null) {
    return null;
  }

  return (
    <div className={style}>
      <h2>{message}</h2>
    </div>
  );
}
