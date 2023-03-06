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
        <div >
          <div className="flex items-center justify-between w-full ">
            <a href="/home" className=""><img src="images/2.png" width="70" alt="" className="logo-image" /></a><span></span>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans ">
              <a href="/home" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Home</a>
              <a href="https://mint.binarybodi.xyz" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Mint</a>
              <a href="/faq" className="text-2xl Roboto-Thin  text-white hover:text-black m-6">FAQ</a>
              <a href="/roadmap" className="text-2xl Roboto-Thin text-white hover:text-black m-6">Roadmap</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
          <div className="lg:w-1/3 w-3/4">
            <br></br><br></br>
            <h1 className="text-6xl montserrat text-blau ">Roadmap </h1>
          </div>
        </div>
        <div id="gallery" className="   mx-6 py-6">
          <div className="flex flex-wrap  items-center mx-6   py-6 ">
            <div className="mt-6 border-b-2 py-6">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <p className="text-xl text-white my-6  Poppitandfinch">
                  The road map for Binary Bodi is collaborative and will be decided by holders. With imaginative ideas, adequate resources, and coordination, we believe we can bring Binary Bodi to every vertical of popular culture.<br></br><br></br><br></br></p>
              </div>
            </div>
            <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
              <div className="lg:w-/2 w-/4">
                <br></br><br></br>
                <p className="text-blau Montserrat-Light text-2xl">Phase 1 | Q1 2023
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch">Issuance of  Binary Bodi NFT.
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 2  |  Q2 2023
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch"> Zib3 Alpha for NFT Holders
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 3 | Q3 2023
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch"> Zib3 Public Rollout
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 4  | Q4 2023
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch"> Zib3 Governance
                </p>


              </div>
            </div>
          </div>
        </div>
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
