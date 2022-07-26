import { useEffect } from 'react';

export default function Home({appID}) {
  useEffect(()=>{
    require('@passageidentity/passage-elements/passage-auth');
  }, []);

  return (
    <>
    <passage-auth app-id={appID}></passage-auth>
    </>
  )
}

export async function getStaticProps(){
  return {
    props: {
      appID: 'c9m88kah3R9B94PUBE9EKIMO'
    }
  };
}
