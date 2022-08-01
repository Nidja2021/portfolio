import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero/Hero'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ajdin Pipo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Hero />
    </div>
  )
}
