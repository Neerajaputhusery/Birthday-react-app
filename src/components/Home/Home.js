import React, { useState } from 'react';
import { data } from '../../StaticData/data';
import List from './List/List';

function Home() {
  const [people, setPeople] = useState(data);

  const clearAllPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthday today</h3>
        <List people={people} />
        <button onClick={clearAllPeople}>Clear All</button>
      </section>
    </main>
  );
}

export default Home;