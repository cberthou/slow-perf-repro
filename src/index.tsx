import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    return <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div>
            Count: {count}
        </div>
    </div>
}
