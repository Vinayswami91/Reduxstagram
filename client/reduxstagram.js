// let's go!
import React from 'react';

import { render } from 'react-dom';

//Import css
import css from  './styles/style.styl';

//Import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


render((
		<Main>
			<PhotoGrid/>
		</Main>
	),
document.querySelector('#root'));