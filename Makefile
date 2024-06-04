install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
test:
	NODE_OPTION=--experimental-vm-modules npx jest