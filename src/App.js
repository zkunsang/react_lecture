import React from 'react';
import User from './User';

export default function App() {
  return (
    <div>
      <p>실전 리액트</p>
      <User onChangeTitle={() => { }} male={true} type={'gold'} age={1} />
    </div>
  )
}