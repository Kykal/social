import React from 'react';


//Constants
import { kPrimaryMedia } from '../../constants';


//MATERIAL DESIGN
//Components
import {
	Box,
	Grid,
} from '@mantine/core'


//Components
import PrimaryMediaButton from '../PrimaryMediaButton';


//Main component content
const Main = (): JSX.Element => {
	//Main component render
	return (
		<Box
			id='primary-media'
			component='main'
			mt='1em'
		>
			<Grid grow >
				{kPrimaryMedia.map( (media, index) => (
					<Grid.Col
						key={index}
						span={12}
					>
						<PrimaryMediaButton
							media={media}
						/>
					</Grid.Col>
				) )}
			</Grid>
		</Box>
	);
};


export default Main; //Export main component
