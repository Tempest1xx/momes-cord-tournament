import { useState } from 'react';

export default function TournamentPage() {
  const [registeredTeams, setRegisteredTeams] = useState([]);
  const [teamName, setTeamName] = useState("");

  const handleRegister = () => {
    if (teamName.trim()) {
      setRegisteredTeams([...registeredTeams, teamName]);
      setTeamName("");
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Mome's Cord Valorant Tournament</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>PKR 50,000 Prize Pool | Server: Dubai</p>

      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Register Your Team</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
            style={{ flexGrow: 1, padding: '0.5rem' }}
          />
          <button onClick={handleRegister} style={{ padding: '0.5rem 1rem', backgroundColor: '#0ea5e9', color: 'white', border: 'none' }}>Register</button>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Registered Teams</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
          {registeredTeams.map((team, index) => (
            <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              {team}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Live Brackets</h2>
        <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
          <p>Bracket system integration coming soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}