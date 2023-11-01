import logo from './logo.svg';
import './App.css';
import PostList from './components/GetRequest';
import PostForm from './components/PostRequest';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookuseEffect from './components/HookuseEffect1';
import HookuseEffectclass from './components/HookuseEffectclass';
import HookuseEffectclass2 from './components/HookuseEffectclass2';
import HookuseEffect2 from './components/HookuseEffect2';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import HookMouseContainer from './components/HookMouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
       {/* <PostList></PostList> */}
       {/* <PostForm></PostForm> */}

       {/* <HookCounter></HookCounter> */}

       {/* <HookCounter2></HookCounter2> */}

       {/* <HookCounter3></HookCounter3> */}

       {/* <HookuseEffectclass></HookuseEffectclass> */}
       {/* <HookuseEffect></HookuseEffect> */}

       {/* <HookuseEffectclass2></HookuseEffectclass2> */}
       {/* <HookuseEffect2></HookuseEffect2> */}

       {/* <ClassMouse></ClassMouse> */}
       {/* <HookMouse></HookMouse> */}
       {/* <HookMouseContainer></HookMouseContainer> */}

       {/* <IntervalClassCounter></IntervalClassCounter>
       <IntervalHookCounter></IntervalHookCounter> */}

       {/* <DataFetching></DataFetching> */}

       <UserContext.Provider value={'Vishwas'}>
         <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC></ComponentC>
         </ChannelContext.Provider>
       </UserContext.Provider>
    </div>
  );
}

export default App;
