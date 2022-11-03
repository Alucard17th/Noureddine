#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployement'
git push -f git@github.com:Alucard17th/aportfolio.git master:gh-pages
cd-