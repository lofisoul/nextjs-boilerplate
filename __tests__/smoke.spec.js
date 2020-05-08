import React from 'react';
import {render} from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

describe('HelloWorld', () => {
	const testMessage = '🤠 Howdy World! 🌎';
	const context = render(<HelloWorld />);

	it('displays howdy world', () => {
		let {queryByText} = context;
		expect(queryByText(testMessage)).not.toBeNull();
	});
});
