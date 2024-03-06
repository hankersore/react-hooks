import {useMood, useUser } from './useContext';

const MoodAndUser = () => {
  const mood = useMood();
  const user = useUser();

  return (
    <div className='card'>
        <h1>useContext()</h1>
      <p>Mood: {mood.stressed}</p>
      <p>User: {user.name} ({user.email})</p>
    </div>
  );
};

export default MoodAndUser;