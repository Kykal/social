import React from 'react';


//Assets
import profilePicture from '../../assets/images/profile-picture.png';


//Constants
import {
	kProfilePictureSize
} from '../../constants';


//MATERIAL DESIGN
//Components
import {
	Header as MantineHeader,
	Center,
	Image,
} from '@mantine/core';


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<MantineHeader id='profile' height='fit-content' mb='1em' >
			<Center pb='0.75em' >
				<Image
					id='profile-picture'
					src={profilePicture}
					width={kProfilePictureSize}
					height={kProfilePictureSize}

					radius={20}

					caption='Kykal'

					title='Picture made in Cool Kid Maker'
				/>
			</Center>
		</MantineHeader>
	);
};


export default Header; //Export main component
