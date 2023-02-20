import React from 'react';


//MATERIAL DESIGN
//Components
import {
	Container,
	MantineProvider,
} from '@mantine/core';


//Components
import Footer	from './components/Footer';
import Header	from './components/Header';
import Main		from './components/Main';


//Main component content
const App = (): JSX.Element => {
	//Main component render
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme: 'dark',
			}}
		>
			<Container
				id='container'
				mt='2em'
			>
				<Header	/>
				<Main		/>
				<Footer	/>
			</Container>
		</MantineProvider>
	);
};


export default App; //Export main component
