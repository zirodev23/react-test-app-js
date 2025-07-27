import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Button from './components/Button';

function App() {
  // const [count, setCount] = useState(0)
  const [todoListVisible, setTodoListVisiblity] = useState(true);
  let listItems = ["Kate", "Kārlis", "Elza"];

  const handleSelectItem = function(item) {
    console.log(item);
  }

  return (
    <>
      <div>Hello World!</div>
      <Button toggleFunction={()=>setTodoListVisiblity(!todoListVisible)}>Toggle list</Button>
      {todoListVisible && <TodoList heading="Mani bērni" items={listItems} onSelectItem={handleSelectItem} />}
    </>
  )
}

export default App
