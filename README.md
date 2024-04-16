# Azure Function Development (Local)
This is the local development of Azure function using Javascript and Azure Functions Core Tools (Node Js) in VS Code

This is a HTTP triggered function which gets triggered by POST request having body and saves in the blob with
name as {userName}-{DateTime}.txt

# Getting Started

```bash
#install the node modules
npm i

#For the local development and testing I am using Azurite Emuator and Storage Explorer
npm install -g azurite

#For starting it
azurite --silent --location c:\azurite --debug c:\azurite\debug.log
```

Download Storage Explorer for better visualization
[Microsoft Explorer](https://azure.microsoft.com/en-in/products/storage/storage-explorer) 

```bash
#run the function using
npm start
```
