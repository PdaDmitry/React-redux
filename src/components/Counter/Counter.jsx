import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './Counter.module.css';
import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from '../../redux/counterLogics/constants';
import { selectCounter, selectStep } from '../../redux/counterLogics/selectors';

export function Counter() {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch(); //Manager for redux changes

  const handlePlusClick = () => {
    dispatch({ type: INCREMENT }); //send to redux (reducer.js) action with type type
  };
  const handleMinusClick = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleResetClick = () => {
    dispatch({ type: RESET });
  };
  const hadleChangeStep = e => {
    dispatch({ type: CHANGE_STEP });
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
