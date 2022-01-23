import React, { Suspense } from 'react';

//Stylesheets
import './App.css';

//Import data
import profilePicture from './Data/Alan-pfp.png';
import myData from './Data/my_data.json';
import primaryLinks from './Data/primary_links.json';
import secondaryLinks from './Data/secondary_links.json';

//Mantine
import { Center, Grid, Image, LoadingOverlay, MantineProvider } from '@mantine/core';

//Custom components
import PrimaryBanner from './Components/PrimaryBanner/PrimaryBanner';
import SecondaryBanner from './Components/SecondaryBanner/SecondaryBanner';

//Component content
const App = () => {
   return (
      <Suspense fallback={<LoadingOverlay visible={true} />} >
         <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles >
            <header>
               <Grid justify="center" align="center" >
                  <Grid.Col xs={6} >
                     <Center>
                        <Image radius="xl" height={120} caption={`@${myData.username}`} src={profilePicture}  />
                     </Center>
                  </Grid.Col>
               </Grid>
            </header>
            <main>
               <Grid justify="center" align="center"  >
                  {primaryLinks.map((link, index) => (
                     <Grid.Col key={index} span={12} className='custom-button-grid' >
                        <PrimaryBanner data={link}/>
                     </Grid.Col>
                  ))}
               </Grid>
               <Grid justify="center" align="center" grow className="secondary-links" >
                  <Grid span={12} grow justify="center" align="center" >
                     {secondaryLinks.map((link, index) => (
                        <Grid.Col key={index} span={1} >
                           <SecondaryBanner data={link} />
                        </Grid.Col>
                     ))}
                  </Grid>
               </Grid>
            </main>
         </MantineProvider>
      </Suspense>
   );
};

export default App; //Export component