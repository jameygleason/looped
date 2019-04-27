#!/usr/bin/env sh

set -e

node_modules="node_modules"

if [ -d "./${node_modules}" ]; then
  echo "✔️  The node_modules folder in './' already exists." 
  echo "⏭️  Preparing next task." 
else
  echo "🏁  Starting node_modules installation in './'"
  npm install
  echo "🎉  node_modules installation complete in './'"
fi

if [ -d "./examples/react/${node_modules}" ]; then
  echo "✔️  The node_modules in './examples/react' folder already exists."
  echo "⏭️  Preparing next task." 
else
  echo "🏁  Starting node_modules installation in './examples/react'."
  npm install
  echo "🎉  node_modules installation complete in './examples/react'."
fi

if [ -d "./examples/vanilla/${node_modules}" ]; then
  echo "✔️  The node_modules in './examples/vanilla' folder already exists." 
  echo "⏭️  Preparing next task." 
else
  echo "🏁  Starting node_modules installation in './examples/vanilla'."
  npm install
  echo "🎉  node_modules installation complete in './examples/vanilla'."
fi

if [ -d "./examples/next/${node_modules}" ]; then
  echo "✔️  The node_modules in './examples/next' folder already exists." 
  echo "⏭️  Preparing next task." 
else
  echo "🏁  Starting node_modules installation in './examples/next'."
  npm install
  echo "🎉  node_modules installation complete in './examples/next'."
fi
