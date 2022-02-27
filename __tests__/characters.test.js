import { getPage } from 'next-page-tester';
import { screen, waitFor, render } from '@testing-library/react';
import Index from '../pages/index';

describe('Test the home page', () => {
	it('Render index page', async () => {
		const { render } = await getPage({
      route: '/',
    });

		// console.log(screen);
		render();
	});
});
