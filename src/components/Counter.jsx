import '../components/Counter.css';
import { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    });
    return (
        <div className="counter">
            <h1 className="counter__title">Вы нажали {count} раз</h1>
            <button
                className="counter__btn"
                onClick={() => setCount(count + 1)}
            >
                Нажми на меня ({count})
            </button>
            ;
        </div>
    );
}

export default Counter;
