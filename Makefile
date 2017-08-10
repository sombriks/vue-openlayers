
clean: 
	rm -rf docs/build.js

docs: clean
	cross-env NODE_ENV=production browserify docs/docs.js -o docs/build.js

dev: clean
	budo docs/docs.js:build.js --dir docs --live --open -H 127.0.0.1

release: docs
	npm publish
