#!/bin/bash
cd ceq-common-service
yarn build
yarn link

cd ..
yarn link ceq-common-service
yarn

cd Backend/ceq-shared-backend
yarn build
yarn link

cd ../..
yarn link ceq-shared-backend
yarn