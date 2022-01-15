import { useState } from 'react'
import tw, { styled } from 'twin.macro';
import './App.css'

const HelloWorld = styled.span`
  ${tw`text-xl`};
  ${({ hasBorder }) => hasBorder && tw`border-2 border-blue-500`};
  ${({ color }) => color && `color: ${color};`};
  font-weight: 900;
`;

const Hi = () => (
  <HelloWorld
    hasBorder
    color="red"
  >
    Hello world
  </HelloWorld>
);

function App () {

  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React, TailwindCss, twin.macro, styled components and Vite!
        <Hi />
      </h1>
    </div>
  )
}

export default App
