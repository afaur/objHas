.PHONY: test

# Get node version
nv = $(shell node -v)

default: testLatest

# Warn and exit execution if node verison is not version 6 or greater.
maybeFail:
	@[[ ${nv} =~ ^v([6-9]|\d{2,}) ]] || (echo "Node Version 6 or Greater Required." && exit 1)

testLatest:
	@make maybeFail
	./bin/test latest

test:
	./bin/test compatible
