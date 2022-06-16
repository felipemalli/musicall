/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from 'next';
import { useState } from 'react';
// import Cliente from '../../components/Client'
// import { GetServerSideProps  } from 'next';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useRouter } from 'next/router';
import React from 'react';
// import { Container } from './styles';

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const history = useRouter();

  async function handleSubmit (event: React.FormEvent) {
    event.preventDefault();
    try {
      await auth.authenticate(email, password)
      history.push('/profile');
    } catch (error) {
      alert('Invalid email or password');
    }
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label>
          Email
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label>
          Password
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="submit"
        >
          Sign In
        </button>
      </form>
    </>
  )
}


// export default function login({ albuns }) {
//   return (
//     <Container>
//       <Cliente name="Gabriel" age={2}/>
//       <Cliente name="Amanda"/>
//       <ul>
//         {albuns.map((album) => (
//           <li key={album}>{album.artistName}</li>
//         ))}

//       </ul>
//     </Container>
//   )
// }

// export const getServerSideProps: GetServerSideProps = async (artist: string = 'lady gaga') => {
//   const artistWithoutSpace = encodeURI(artist).replaceAll('%20', '+');

//   const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistWithoutSpace}&attribute=allArtistTerm`;

//   const APIResponse = await fetch(getAlbumsAPI);

//   const { results } = await APIResponse.json();

//   // console.log(results);
//   return {
//     props: {
//       albuns: results
//     }
//   }
// }
