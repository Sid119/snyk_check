#!/bin/bash
cd ceq-common-service
rm -rf ./node_modules
yarn
yarn build
yarn link

cd ../
rm -rf ./node_modules
yarn link ceq-common-service
yarn

cd Backend/ceq-shared-backend
rm -rf ./node_modules
yarn
yarn build
yarn link

cd ../../
rm -rf ./node_modules
yarn link ceq-shared-backend
yarn