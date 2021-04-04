#!/usr/bin/env sh

git remote set-url origin https://github.com/jameygleason/looped.git && \
git push origin && \
git remote set-url origin git@gitlab.com:jameygleason/looped.git && \
git push origin