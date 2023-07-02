
import './App.css';
import React, {useRef, useEffect} from 'react';
import { current } from '@reduxjs/toolkit';

function App() {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const oneClass = 'App_block_one_p_one';
  const swichClass = 'App_block_one_p_one_swich';
  useEffect(
    () => {
      // console.log(oneRef);
      // console.log(oneRef.current);
    
    }
  )

  function onePharagraphSwich(){oneRef.current.classList.value === oneClass ? oneRef.current.classList.value = swichClass : oneRef.current.classList.value = oneClass
    // if(oneRef.current.classList.value === oneClass) {
    //   return oneRef.current.classList.value = swichClass;
    // } else {
    //   return oneRef.current.classList.value = oneClass;
    // }
  
  
  }




  return (
    <>
      <div className="App">
        <p className='App_title'>
        ЗДЕСЬ ПРИМЕР ОДИН по применеию useRef
        </p>
        <div className='App_block_one'>
          <p className='App_block_one_p_one' ref={oneRef}> 
            Сюда ссылается кнопка ОДИН
          </p>
        </div>
        <div className='App_block_two'>

        </div>
        <div className='App_block_three'>

        </div>
        <div className='App_block_four'>

        </div>
        <div className='App_buttons'>
          <button type="button" className='App_button' onClick={onePharagraphSwich}>
            Я кнопка один
          </button>
          <button type="button" className='App_button'>
            Я кнопка два 
          </button>
          <button type="button" className='App_button'>
            Я кнопка три 
          </button>
          <button type="button" className='App_button'>
            Я кнопка четыре 
          </button>
        </div>
       
      </div>
    </>
  );
}

export default App;
