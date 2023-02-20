import React from 'react';


//Typings
import Media from '../typings/Media';


//MATERIAL DESIGN
//Components
import {
	Button
} from '@mantine/core';
//Icons
import {
	BiLinkExternal
} from 'react-icons/bi';


type Props = {
	media: Media;
}


//Main component content
const PrimaryMediaButton = (props: Props): JSX.Element => {
	//Main component render
	return (
		<Button
			id={`${props.media.label}-media`}

			component='a'
			href={props.media.url}
			target='_blank'
			rel='noopener noreferrer'

			size='md'
			leftIcon={props.media.icon}
			rightIcon={<BiLinkExternal/>}
			
			variant='gradient'
			gradient={{
				from: 'grape',
				to: 'pink',
				deg: 125,
			}}

			sx={{
				'& .mantine-Button-label': {
					flexGrow: 1,
					justifyContent: 'center',
				}
			}}

			fullWidth
		>
			{props.media.label}
		</Button>
	);
};


export default PrimaryMediaButton; //Export main component
