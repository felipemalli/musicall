import Cliente from '../../components/Client'
import { GetServerSideProps  } from 'next';
import { Container } from './styles';

export default function login({ albuns }) {
  return (
    <Container>
      <Cliente name="Gabriel" age={2}/>
      <Cliente name="Amanda"/>
      <ul>
        {albuns.map((album) => (
          <li key={album}>{album.artistName}</li>
        ))}

      </ul>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (artist: string = 'lady gaga') => {
  const artistWithoutSpace = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistWithoutSpace}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  console.log(results);
  return {
    props: {
      albuns: results
    }
  }
}
