#!/usr/bin/env sh

set -e

webpack --progress --profile --config config/webpack.prod.js --env.NODE_ENV=production
cp dist/looped-carousel.js docs/assets

# if [ -d "./dist" ]; then
#   rm -rf ./dist
#   mkdir dist
#   cp src/looped-carousel.js dist/looped-carousel.js
#   cp dist/looped-carousel.js docs/assets
# else
#   mkdir dist
#   cp src/looped-carousel.js dist 
#   cp dist/looped-carousel.js docs/assets
# fi

# if [ -d "./react" ]; then
#   rm -rf ./react
#   mkdir react
#   cp src/react/LoopedCarouselReact.js react/index.js
# else
#   mkdir react
#   cp src/react/LoopedCarouselReact.js react/index.js
# fi
