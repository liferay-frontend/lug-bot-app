#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

GIT_SHA=$(git rev-parse --short HEAD)

SHORT_VERSION=$(cat "$DIR/version.txt")

VERSION=${SHORT_VERSION}-$GIT_SHA

export DOCKER_BUILDKIT=1

function assert_success () {
	if [ $? -ne 0 ]; then
		echo "$1 failed"
		exit 1
	else
		echo "$1 succeeded"
	fi
}

function build_app () {
	docker build \
		-f Dockerfile \
		-t lugbot/lugbot-app:$VERSION \
		-t lugbot/lugbot-app:$SHORT_VERSION \
		-t lugbot/lugbot-app:latest \
		--build-arg VERSION=${VERSION} \
		--progress plain \
		.

	assert_success "lugbot/lugbot-app:$VERSION build"
}

function push_images {
	docker push lugbot/lugbot-app:$VERSION

	assert_success "lugbot/lugbot-app:$VERSION push"

	docker push lugbot/lugbot-app:$SHORT_VERSION

	assert_success "lugbot/lugbot-app:$SHORT_VERSION push"

	docker push lugbot/lugbot-app:latest

	assert_success "lugbot/lugbot-app:latest push"
}

build_app

push_images