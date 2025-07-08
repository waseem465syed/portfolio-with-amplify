# 🚀 Portfolio Website Deployment Using AWS CDK and Amplify

This project automates the deployment of a static portfolio website using AWS CDK (in TypeScript) and AWS Amplify. It connects to a GitHub repository and deploys static files hosted in a subfolder named `Portfolio-Website`.

## ✅ Features

- Amplify App initialized with GitHub as source provider
- Builds and deploys a static website from `Portfolio-Website` directory
- Configured for CI/CD on `main` branch
- Custom domain integration: `waseem-syed.click` and `www.waseem-syed.click`

## 🧾 Folder Structure

```
portfolio-with-amplify/
└── Portfolio-Website/
    └── index.html
```

## 🔐 GitHub Token Storage

Your GitHub personal access token must be securely stored in AWS Secrets Manager with the key: `your-token`.
check if you already have any stored secret in aws secrets manager : 
```
aws secretsmanager list-secrets
```
Generate new secret in CLI : aws secretsmanager create-secret --name my-github-token --description "github token for amplify" --secret-string "your github secret token"

## 🛠️ CDK Stack Includes:

- `amplify.App` for deploying static assets
- `GitHubSourceCodeProvider` for CI/CD integration
- Custom buildSpec to navigate to subfolder
- Domain integration with root and www


## 📦 How to Deploy

```bash
cdk bootstrap
cdk deploy
```

## 🌐 Access Website

- https://waseem-syed.click
- https://www.waseem-syed.click
-