import React from 'react';


//Types
import Media from '../typings/Media';


//MATERIAL DESIGN
//Components
import {
	ActionIcon,
} from '@mantine/core';


type Props = {
	media: Media,
}


//Main component content
const SecondaryMediaButton = (props: Props): JSX.Element => {
	//Main component render
	return (
		<ActionIcon
			id={`${props.media.label}-media`}
			title={props.media.label}
			size='xl'
			
			component='a'
			href={props.media.url}
			target='_blank'
			rel='noopener noreferrer'

			variant='gradient'
			gradient={{
				from: 'grape',
				to: 'pink',
				deg: 135,
			}}
		>
			{props.media.icon}
		</ActionIcon>
	);
};


export default SecondaryMediaButton; //Export main component
