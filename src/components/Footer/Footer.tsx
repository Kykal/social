import React from 'react';


//Constants
import {
	kSecondaryMedia
} from '../../constants';


//MATERIAL DESIGN
//Components
import {
	Grid,
	Footer as MantineFooter,
} from '@mantine/core';


//Components
import SecondaryMediaButton from '../SecondaryMediaButton';


//Main component content
const Footer = (): JSX.Element => {
	//Main component render
	return (
		<MantineFooter
			id='secondary-media'
			height='fit-content'
			mt='1em'
			pt='1em'
		>
			<Grid justify='center' align='center' >
				{kSecondaryMedia.map( (media, index) => (
					<Grid.Col
						key={index}
						span={1}
					>
						<SecondaryMediaButton
							media={media}
						/>
					</Grid.Col>
				) )}
			</Grid>
		</MantineFooter>
	);
};


export default Footer; //Export main component
