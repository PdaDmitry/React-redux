import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './Counter.module.css';
import { selectCounter, selectStep } from '../../redux/counterLogics/selectors';
import { changeStep, decrement, increment, reset } from '../../redux/counterLogics/actions';

export function Counter() {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch(); //Manager for redux changes

  const handlePlusClick = () => {
    dispatch(increment()); //send to redux (reducer.js) action with type type
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const hadleChangeStep = e => {
    dispatch(changeStep(+e.target.value)); //send an action with payload = (e.target.value)
  };

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
