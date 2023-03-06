import Head from 'next/head'
export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Binary Bodi</title>
        <link rel="icon" href="/images/fab.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav144.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:title" content="BinaryBodi" key="ogtitle" />
        <meta property="og:description" content="A Web3 Social Experiment by streamlining Meta" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://binarybodi.xyz" key="ogurl" />
        <meta property="og:site_name" content="https://binarybodi.xy" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="BinaryBodi" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/binarybodi" key="twurl" />
        <meta name="twitter:title" content="BinaryBodi" key="twtitle" />
        <meta name="twitter:description" content="A Web3 Social Experiment by streamlining Meta " key="twdesc" />
      </Head>

      <div >
        <div className="flex items-center justify-between w-full pb-6">
          <a href="/home" className=""><img src="images/2.png" width="70" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans ">
            <a href="/home" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Home</a>
            <a href="https://mint.binarybodi.xyz" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Mint</a>
            <a href="/faq" className="text-2xl Roboto-Thin  text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Roadmap</a>
          </nav>
        </div>
      </div>
      <div className="md:w-1/2 w-3/4 " id="about">
        <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">

          <h1 className="text-5xl montserrat text-blau">The Team</h1>
          <p className="text-2xl text-white my-6  Poppitandfinch">We began as an initiative to assist newly independent media we are guided by a simple credo: All people "wherever they live, whatever their income, and whatever language they use", deserve equal access to a broad range of views & ideas that can shape their lives.
          </p>
          <p className="text-2xl text-white my-6  Poppitandfinch"> The team consists of doxxed individuals with proven track records in Crypto Sphere.We are a standalone team comprised of a handful of keyboard warriors digging the Metaverse beyond the abyss of the web3.We are experiencing this rabbit hole since 2015 and have been contributing to the open society broadly.</p>   </div>

        <img className="img feature-image" src="images/fullteam.png" alt="" />


        <p className="text-2xl text-white my-6  Poppitandfinch">

          <br></br>  Our project is an experiment, we are trying to showcase reality breaking wisdom and experience. We are a small team building this Mega project without any influencers or FOMO, The only hype we offer is a golden opportunity to Speak truth
          If you are inspired, let us know how can you contribute in this mission. Please write to us
          <span className="text-1xl Poppitandfinchsans text-blau  hover:text-white m-6">neo@binarybodi.xyz</span></p>
      </div>
      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/2.png" width="70" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="https://mint.binarybodi.xyz" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
            <a href="faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>

            <a href="https://linktr.ee/binarybodi" className="text-2xl Poppitandfinchsans text-blau  hover:text-white m-6">Communities</a>
          </nav>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Binary Bodi </span> Fork it  <a href="https://github.com/binarybodi" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
    </div>
  )
}
