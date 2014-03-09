REPORTER = spec
MOCHA_OPTS = --check-leaks

test:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--require should \
		--globals setImmediate,clearImmediate \
		$(MOCHA_OPTS)

.PHONY: test