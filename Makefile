install: 
		npm ci

brain-games: 
		note bin/brain-games.js

publish: 
		npm publish --dry-run

lint: 
		npx eslint