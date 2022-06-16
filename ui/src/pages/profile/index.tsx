const Profile = () => {
  return (
      <h1>Your Profile</h1>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  }
}

export default Profile