// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				src: '/src/assets/FESimVR-logo-landscape.png', // Path to the image in the src/assets folder
				alt: 'File Explorer Simulator VR Logo', // Alt text for accessibility
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TudorRadoni' }],
			sidebar: [
				// {
				// 	label: 'Docs Guide',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Getting Started with the Docs', slug: 'docs-guides/getting-started-with-docs' },
				// 	],
				// },
				{
					label: 'Setup and Planning',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Environment Setup', slug: 'setup-and-planning/setup-environment' },
						{ label: 'Create the Project', slug: 'setup-and-planning/create-ue-project' },
						{ label: "Modify the VR Template", slug: 'setup-and-planning/mod-vr-template' },
					],
				},
				{
					label: 'Movement and Input',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Setup the Thumbstick Movement', slug: 'movement-and-input/create-the-controls' },
						{ label: 'Modify the VR Pawn', slug: 'movement-and-input/modify-vr-pawn' },
						{ label: 'Apply the Movement', slug: 'movement-and-input/apply-movement' },
						{ label: 'Sprinting System', slug: 'movement-and-input/sprint-system' },
					],
				},
				{
					label: 'Reference',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Delta Time', slug: 'reference/delta-time' },
					],
				}
			],
		}),
	],
});
