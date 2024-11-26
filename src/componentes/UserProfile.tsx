import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser ] = useState(null);
  const token = localStorage.getItem('token'); // Asumiendo que guardas el token en localStorage

  useEffect(() => {
    const fetchUser Profile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser (response.data);
      } catch (error) {
        console.error('Error fetching user profile', error);
      }
    };

    fetchUser Profile();
  }, [token]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Perfil de Usuario</h1>
      <p><strong>Nombre de Usuario:</strong> {user.Username}</p>
      <p><strong>Email:</strong> {user.Email}</p>
      <p><strong>Fecha de Registro:</strong> {new Date(user.fecha_registro).toLocaleDateString()}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'left',
    backgroundColor: '#f9f9f9'
  }
};

export default UserProfile;