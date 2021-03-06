import GoogleMapReact from 'google-map-react';

const Footer = () => {
   const coordinate = {
      Uccle: {
         lat: 50.801481674938586,
         lng: 4.33052928280693,
      },
      Schaerbeek: {
         lat: 50.855936237377726,
         lng: 4.4018753828090285,
      },
   };

   const renderMarkers = (map: any, maps: any, lat: number, lng: number) => {
      let marker = new maps.Marker({
         position: { lat: lat, lng: lng },
         map,
      });
      return marker;
   };

   return (
      <footer id='footer'>
         <section className='main-infos'>
            <p>
               Numéro de télephone: <span>+32 471 46 24 61</span>
            </p>
            <p>
               Adresse mail: <span>pleonard.podologue@hotmail.com</span>
            </p>
         </section>
         <section className='rdv'>
            <section className='left-rdv'>
               <button>
                  <a
                     target={'_blank'}
                     rel='noreferrer'
                     href='https://www.doctoranytime.be/d/podologue/pierre-leonard'
                  >
                     Rdv à Schaerbeek
                  </a>
               </button>
               <p>Chaussée de Louvain 656, Schaerbeek</p>
               <section className='google-map-container'>
                  <GoogleMapReact
                     bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
                     defaultCenter={coordinate.Uccle}
                     defaultZoom={13}
                     onGoogleApiLoaded={({ map, maps }) =>
                        renderMarkers(map, maps, coordinate.Uccle.lat, coordinate.Uccle.lng)
                     }
                     yesIWantToUseGoogleMapApiInternals
                     onClick={() => {
                        window.open(
                           `https://maps.google.com?q=${coordinate.Schaerbeek.lat},${coordinate.Schaerbeek.lng}`
                        );
                     }}
                  ></GoogleMapReact>
               </section>
            </section>
            <section className='right-rdv'>
               <button>
                  <a
                     target={'_blank'}
                     rel='noreferrer'
                     href='https://be.mobminder.com/e-resa.php?p=acmuleonard'
                  >
                     Rdv à Uccle
                  </a>
               </button>
               <p>Rue Victor Allard 147 1180 Uccle</p>
               <section className='google-map-container'>
                  <GoogleMapReact
                     bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
                     defaultCenter={coordinate.Schaerbeek}
                     defaultZoom={13}
                     onGoogleApiLoaded={({ map, maps }) =>
                        renderMarkers(
                           map,
                           maps,
                           coordinate.Schaerbeek.lat,
                           coordinate.Schaerbeek.lng
                        )
                     }
                     yesIWantToUseGoogleMapApiInternals
                     onClick={() => {
                        window.open(
                           `https://maps.google.com?q=${coordinate.Uccle.lat},${coordinate.Uccle.lng}`
                        );
                     }}
                  ></GoogleMapReact>
               </section>
            </section>
         </section>
      </footer>
   );
};

export default Footer;
