import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './Counter.module.css';

export function Counter() {
  const counter = useSelector(state => state.count.counterNow);
  const step = useSelector(state => state.count.stepNow);

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const hadleChangeStep = e => {};

  return (
    <div className={css.flexCont}>
      <div className={css.wrapper}>
        <h1 className={css.title}>{counter}</h1>
        <input value={step} onChange={hadleChangeStep} className={css.input} />
        <div className={css.contButtons}>
          <Button onClick={handleMinusClick}>Minus</Button>
          <Button onClick={handleResetClick}>Reset</Button>
          <Button onClick={handlePlusClick}>Plus</Button>
        </div>
      </div>
    </div>
  );
}
