import React from 'react';

//Mantine
import { ActionIcon, Center, ThemeIcon } from '@mantine/core';

//react-icons
import   {  SiKofi,        //Ko-fi logo
            SiInstagram,   //Instagram logo
            SiTiktok       //Tiktok logo
         } from 'react-icons/si'

const icons = [
   SiKofi,
   SiInstagram,
   SiTiktok
]

//Component content
const SecondaryBanner = ({ data }) => {
   
   const Icon = icons[data.id]

   return (
      <Center>
         <ActionIcon title={data.label} component="a" href={data.href} target="_blank" size="xl"  >
            <ThemeIcon variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }} size="xl" >
               <Icon />
            </ThemeIcon>
         </ActionIcon>
      </Center>
   );
};

export default SecondaryBanner; //Export component