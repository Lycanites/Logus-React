// // src/components/Profile.tsx
// import React, { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";

// const Profile: React.FC = () => {
//   const userContext = useContext(UserContext);

//   if (!userContext) {
//     return <p>Error: El contexto no está disponible.</p>;
//   }

//   const { user } = userContext;

//   if (!user) {
//     return <p>No hay información del usuario.</p>;
//   }

//   return (
//     <div>
//       <h1>Perfil de {user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Edad: {user.age}</p>
//     </div>
//   );
// };

// export default Profile;
