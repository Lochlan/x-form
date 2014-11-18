all: lint build

build: demo/components.js

lint:
	./node_modules/.bin/jshint src

# file rules

bower_components: node_modules bower.json
	./node_modules/.bin/bower install
	touch $@

demo/components.js: bower_components
	./node_modules/.bin/grunt -v smush-components

node_modules: package.json
	npm install --registry=http://npm.eng.dig.lo
	touch $@
