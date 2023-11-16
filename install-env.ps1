cd ceq-common-service
Remove-Item -Path "./node_modules" -Recurse
yarn
yarn build
yarn link
 
cd ../
Remove-Item -Path "./node_modules" -Recurse
yarn link ceq-common-service
yarn
 
cd Backend/ceq-shared-backend
Remove-Item -Path "./node_modules" -Recurse
yarn
yarn build
yarn link
 
cd ../../
Remove-Item -Path "./node_modules" -Recurse
yarn link ceq-shared-backend
yarn