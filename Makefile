SRC = index.js

include node_modules/make-lint/index.mk

LINT_CONFIG = .eslintrc
TESTS = test.js

test: lint
	@NODE_ENV=test ./node_modules/.bin/tape \
		$(TESTS) \
		| ./node_modules/.bin/tap-spec

test-cov:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		$(TESTS)

.PHONY: test
