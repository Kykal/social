import React from 'react';

//Stylesheet
import './PrimaryBanner.css';

//Mantine
import { Button } from '@mantine/core';

//react-icons
import   {  IoLogoTwitch,  //Twitch logo
            IoLogoTwitter, //Twitter logo
            IoLogoYoutube, //YouTube logo
            IoLogoFacebook //Facebook logo
         } from 'react-icons/io';      
import { FiExternalLink } from 'react-icons/fi';   //External link icon adviser

const icons = [
   IoLogoTwitch,
   IoLogoTwitter,
   IoLogoYoutube,
   IoLogoFacebook
];

//Component content
const PrimaryBanner = ({ data }) => {

   const Icon = icons[data.id];

   return (
      <Button
         component='a'
         href={data.href}
         target="_blank"
         
         leftIcon={ <Icon /> }
         rightIcon={ <FiExternalLink /> }

         fullWidth
         radius={3}
         size="lg"
         variant="gradient"
         gradient={{ from: 'grape', to: 'pink', deg: 35 }}

         className="custom-button-css"
      >
         {data.label}
      </Button>
   );
};

export default PrimaryBanner; //Export component