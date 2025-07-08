
import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PInfrastructureStack extends cdk.Stack {
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
              commands: [
                'echo "Checking for non-code changes..."',
                // Detect if only markdown/docs were changed
                'git diff --name-only $CODEBUILD_RESOLVED_SOURCE_VERSION | grep -vqE "\\.(js|html|css|json|ts|jsx|tsx)$" && echo "Skipping build due to non-code changes." && exit 0 || echo "Code changes detected. Proceeding..."',
                'cd Portfolio-Website',
              ],
            },
            build: {
              commands: [
                'echo "No build steps needed for static HTML"',
              ],
            },
          },
          artifacts: {
            baseDirectory: 'Portfolio-Website',
            files: ['**/*'],
          },
          cache: {
            paths: [],
          },
        },
      }),
    });

    // Connect main branch for CI/CD
    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
    });

    // Optional custom domain setup and route 53
  // ✅ Add Custom Domain
    amplifyApp.addDomain('waseem-syed.click', {
      subDomains: [
        {
          branch: mainBranch,
          prefix: '', // root domain (waseem-syed.click)
        },
        {
          branch: mainBranch,
          prefix: 'www', // subdomain (www.waseem-syed.click)
        },
      ],
       enableAutoSubdomain: true, 
    });
  }
}

