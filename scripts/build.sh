#!/usr/bin/env sh

set -e

webpack --progress --profile --config config/webpack.prod.js --env.NODE_ENV=production
cp dist/rescale-carousel.js docs/assets

# if [ -d "./dist" ]; then
#   rm -rf ./dist
#   mkdir dist
#   cp src/rescale-carousel.js dist/rescale-carousel.js
#   cp dist/rescale-carousel.js docs/assets
# else
#   mkdir dist
#   cp src/rescale-carousel.js dist 
#   cp dist/rescale-carousel.js docs/assets
# fi

# if [ -d "./react" ]; then
#   rm -rf ./react
#   mkdir react
#   cp src/react/RescaleCarouselReact.js react/index.js
# else
#   mkdir react
#   cp src/react/RescaleCarouselReact.js react/index.js
# fi
