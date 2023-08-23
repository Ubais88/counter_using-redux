import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , reset} from '../Redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col w-[350px] h-[200px] bg-green-500 items-center justify-center rounded-lg'>
        <div className='flex gap-x-5 mb-6'>         
            <div>
                <button className='bg-green-200 p-3 rounded-lg font-bold' onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <div className='p-3 rounded-lg font-bold text-xl'>{count}</div>
            <div>
                <button className='bg-green-200 p-3 rounded-lg font-bold' onClick={() => dispatch(increment())}>
                    Increment
                </button>
            </div>

        </div>
        <div className='flex justify-center'>
            <button className='bg-green-100 p-3 rounded-lg font-bold' onClick={() => dispatch(reset())}>
                Reset
            </button>
        </div>

    </div>
  )
}

export default Counter