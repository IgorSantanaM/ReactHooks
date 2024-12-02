import React, { useState, useEffect, useMemo, useCallback }from 'react'

function App() {
  const [tech, setTech] = useState(['Dotnet','ReactJS']); // position 0 the state itself, 1 a function that changes the state.
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() =>{
    
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech])

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if(storageTech){
      setTech(JSON.parse(storageTech))
    }

    // return () => {}; // componentDidUnmount?

  }, []) // componentDidMount? 

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]); //componentDidUpdate?

  const techSize = useMemo(() => tech.Length, [tech])

  return (
      <>
          <ul>
        {tech.map(t =>
          (<li key={t}>{t}</li>
        ))}
      </ul>
      <strong>You have {techSize} techs</strong>
      <input value={newTech} type="text" onChange={e => setNewTech(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
  </>
    );
}

export default App;
