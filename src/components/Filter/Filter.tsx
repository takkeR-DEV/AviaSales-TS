import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Filter.scss';
const Filter: FC = () => {
  const { setFilter } = useActions();
  const { sort } = useTypedSelector((state) => state.sort);
  const isActive = (active: string) => (active === sort ? ' filter__active' : '');

  return (
    <div className="filter">
      <button className={'filter__btn' + isActive('price')} onClick={() => setFilter('price')}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={'filter__btn' + isActive('fast')} onClick={() => setFilter('fast')}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={'filter__btn' + isActive('optimal')} onClick={() => setFilter('optimal')}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Filter;
