#!/usr/bin/env sh

set -env

npm run build

cd dist

git init 
git add -addgit commit -m 'New Deployment'
git push -f git@github.com:FabianHupp/vue-pages.git master:gh-pages

cd -