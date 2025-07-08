import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PortfolioAmplifyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, 'PortfolioWebsiteApp', {
      appName: "WaseemPortfolio",

      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'waseem465syed',
        repository: 'portfolio-with-amplify',
        oauthToken: cdk.SecretValue.secretsManager('my-github-token'), // ✅ Store your GitHub token in Secrets Manager
      }),

      // ✅ No build commands needed for static HTML
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: ['echo "No pre-build needed for static site"'],
            },
            build: {
              commands: ['echo "No build step needed"'],
            },
          },
          artifacts: {
            baseDirectory: 'Portfolio-Website',  // ✅ your index.html is in root folder
            files: ['**/*'],
          },
        },
      }),
    });

    // Connect main branch for CI/CD
    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
    });

    // Optional custom domain setup and route 53
  
    amplifyApp.addDomain('waseem-syed.com', {
         subDomains: [
           { branch: mainBranch, prefix: '' },
           { branch: mainBranch, prefix: 'www' },
         ],
       });
  }
}

