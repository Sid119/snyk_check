# cms-development-code
This repository being used for development of CMS Frontend and Backend

### Installation

###### Prerequisite for installation
These applications must be installed on your system, if not installed currently please install them before running the commands:
- Git
- NodeJs/NPM (v18.17.1/v9.6.7)
- Yarn

Please run the following commands in bash to install project
```
/* For Unix Users */
chmod +x ./install.sh
chmod +x ./build-env.sh
./install-env.sh

/* For Windows Users */
powershell "./install-env.ps1"
```

### For updating Common service on any changes
If ceq-common-service is changed in any way, please run the following commands in bash to install project:
```
/* For Unix Users */
./build-env.sh

/* For Windows Users */
powershell "./build-env.ps1"
```
### For creating documentation
To create documentation for the project please run the command in root folder.

```
yarn docs
```

Note: please complete the installation process before running this command.