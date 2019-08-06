#!/usr/bin/env sh

rm -rf dist
rm -rf node_modules && \
rm -rf package-lock.json && \
rm -rf yarn.lock && \
npm cache clear --force && \
yarn
exit