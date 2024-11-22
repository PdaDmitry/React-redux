import { Button } from '../Button/Button';
import css from './Counter.module.css';

export function Counter() {
  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const hadleChangeStep = () => {};

  return (
    <div className={css.flexCont}>
      <div className={css.wrapper}>
        <h1 className={css.title}>{1}</h1>
        <input value={1} onChange={hadleChangeStep} className={css.input} />
        <div className={css.contButtons}>
          <Button onClick={handleMinusClick}>Minus</Button>
          <Button onClick={handleResetClick}>Reset</Button>
          <Button onClick={handlePlusClick}>Plus</Button>
        </div>
      </div>
    </div>
  );
}
