import css from './Button.module.css';

export function Button({ onClick, children }) {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
}
