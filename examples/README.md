<img alt="Logo" align="right" src="https://raw.githubusercontent.com/serverless-stack/identity/main/sst.svg" width="20%" />

# [SST Examples](https://serverless-stack.com/examples/index.html)

A collection of example serverless apps built with SST.

## Starters

| Starter                                    | Description                                        |
| ------------------------------------------ | -------------------------------------------------- |
| [typescript-monorepo](typescript-monorepo) | Starting point for an advanced Typescript project. |

## Examples

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description                                                                                                                                                                                                                                                      | Tutorial                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [rest-api](rest-api)                                                                                                                                                                                                                                                                                                                                                | Create a serverless REST API on AWS using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct to define the routes of our API.                                                                                                               | [Link](https://serverless-stack.com/examples/how-to-create-a-rest-api-with-serverless.html)                                |
| [rest-api-ts](rest-api-ts)                                                                                                                                                                                                                                                                                                                                          | Create a serverless REST API on AWS with TypeScript using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct to define the routes of our API.                                                                                               | [Link](https://serverless-stack.com/examples/how-to-create-a-rest-api-in-typescript-with-serverless.html)                  |
| [rest-api-go](rest-api-go)                                                                                                                                                                                                                                                                                                                                          | Create a serverless REST API on AWS with Golang using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct to define the routes of our API.                                                                                                   | [Link](https://serverless-stack.com/examples/how-to-create-a-rest-api-in-golang-with-serverless.html)                      |
| [rest-api-python](rest-api-python)                                                                                                                                                                                                                                                                                                                                  | Create a serverless REST API on AWS with Python using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct to define the routes of our API.                                                                                                   |                                                                                                                            |
| [rest-api-csharp](rest-api-csharp)                                                                                                                                                                                                                                                                                                                                  | Create a serverless REST API on AWS with C# using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct to define the routes of our API.                                                                                                       |                                                                                                                            |
| [rest-api-custom-domain](rest-api-custom-domain)                                                                                                                                                                                                                                                                                                                    | Add a custom domain to a serverless REST API on AWS using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct.                                                                                                                               | [Link](https://serverless-stack.com/examples/how-to-add-a-custom-domain-to-a-serverless-api.html)                          |
| [rest-api-dynamodb](rest-api-dynamodb)                                                                                                                                                                                                                                                                                                                              | Use DynamoDB in your serverless app on AWS using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Table`](https://docs.serverless-stack.com/constructs/Table) to create a simple hit counter.                                                 | [Link](https://serverless-stack.com/examples/how-to-use-dynamodb-in-your-serverless-app.html)                              |
| [rest-api-mongodb](rest-api-mongodb)                                                                                                                                                                                                                                                                                                                                | Use MongoDB in your serverless app and create a simple API with [`Api`](https://docs.serverless-stack.com/constructs/Api) to query a list of movies.                                                                                                             | [Link](https://serverless-stack.com/examples/how-to-use-mongodb-in-your-serverless-app.html)                               |
| [rest-api-postgresql](rest-api-postgresql)                                                                                                                                                                                                                                                                                                                          | Use PostgreSQL in your serverless app on AWS using [`Api`](https://docs.serverless-stack.com/constructs/Api) and Amazon Aurora Serverless to create a simple hit counter.                                                                                        | [Link](https://serverless-stack.com/examples/how-to-use-postgresql-in-your-serverless-app.html)                            |
| [crud-api-dynamodb](crud-api-dynamodb)                                                                                                                                                                                                                                                                                                                              | Create a CRUD API with serverless using DynamoDB. With the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Table`](https://docs.serverless-stack.com/constructs/Table) constructs.                                                               | [Link](https://serverless-stack.com/examples/how-to-create-a-crud-api-with-serverless-using-dynamodb.html)                 |
| [api-auth-cognito](api-auth-cognito)                                                                                                                                                                                                                                                                                                                                | Add Cognito User Pool authentication to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) constructs.                                                         | [Link](https://serverless-stack.com/examples/how-to-add-cognito-authentication-to-a-serverless-api.html)                   |
| [api-auth-facebook](api-auth-facebook)                                                                                                                                                                                                                                                                                                                              | Add Facebook authentication to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) constructs.                                                                  | [Link](https://serverless-stack.com/examples/how-to-add-facebook-authentication-to-a-serverless-api.html)                  |
| [api-auth-google](api-auth-google)                                                                                                                                                                                                                                                                                                                                  | Add Google authentication to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) constructs.                                                                    | [Link](https://serverless-stack.com/examples/how-to-add-google-authentication-to-a-serverless-api.html)                    |
| [api-auth-twitter](api-auth-twitter)                                                                                                                                                                                                                                                                                                                                | Add Twitter authentication to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) constructs.                                                                   | [Link](https://serverless-stack.com/examples/how-to-add-twitter-authentication-to-a-serverless-api.html)                   |
| [api-auth-auth0](api-auth-auth0)                                                                                                                                                                                                                                                                                                                                    | Add Auth0 authentication to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) constructs.                                                                     | [Link](https://serverless-stack.com/examples/how-to-add-auth0-authentication-to-a-serverless-api.html)                     |
| [api-auth-jwt-cognito-user-pool](api-auth-jwt-cognito-user-pool)                                                                                                                                                                                                                                                                                                    | Add JWT authorization with Cognito User Pool to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) constructs.                                                                                                                 | [Link](https://serverless-stack.com/examples/how-to-add-jwt-authorization-with-cognito-user-pool-to-a-serverless-api.html) |
| [api-auth-jwt-auth0](api-auth-jwt-auth0)                                                                                                                                                                                                                                                                                                                            | Add JWT authorization with Auth0 to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) constructs.                                                                                                                             | [Link](https://serverless-stack.com/examples/how-to-add-jwt-authorization-with-auth0-to-a-serverless-api.html)             |
| [api-auth-lambda-authorizer-iam-response](api-auth-lambda-authorizer-iam-response)                                                                                                                                                                                                                                                                                  | Add Lambda authorizer (simple response format) to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) constructs.                                                                                                               |                                                                                                                            |
| [api-auth-lambda-authorizer-simple-response](api-auth-lambda-authorizer-simple-response)                                                                                                                                                                                                                                                                            | Add Lambda authorizer (IAM policy response format) to a serverless API using the [`Api`](https://docs.serverless-stack.com/constructs/Api) constructs.                                                                                                           |                                                                                                                            |
| [graphql-apollo](graphql-apollo)                                                                                                                                                                                                                                                                                                                                    | Create a serverless Apollo GraphQL API on AWS using the [`ApolloApi`](https://docs.serverless-stack.com/constructs/ApolloApi) construct.                                                                                                                         | [Link](https://serverless-stack.com/examples/how-to-create-an-apollo-graphql-api-with-serverless.html)                     |
| [graphql-appsync](graphql-appsync)                                                                                                                                                                                                                                                                                                                                  | Create a serverless AppSync GraphQL API on AWS using the [`AppSyncApi`](https://docs.serverless-stack.com/constructs/AppSyncApi) construct.                                                                                                                      | [Link](https://serverless-stack.com/examples/how-to-create-a-serverless-graphql-api-with-aws-appsync.html)                 |
| [websocket](websocket)                                                                                                                                                                                                                                                                                                                                              | Create a serverless WebSocket API on AWS using the [`WebSocketApi`](https://docs.serverless-stack.com/constructs/WebSocketApi) construct to define the routes of our API.                                                                                        | [Link](https://serverless-stack.com/examples/how-to-create-a-websocket-api-with-serverless.html)                           |
| [react-app](react-app)                                                                                                                                                                                                                                                                                                                                              | Create a full-stack serverless React.js click counter app on AWS using the [`ReactStaticSite`](https://docs.serverless-stack.com/constructs/ReactStaticSite) construct.                                                                                          | [Link](https://serverless-stack.com/examples/how-to-create-a-reactjs-app-with-serverless.html)                             |
| [react-app-auth-cognito](react-app-auth-cognito)                                                                                                                                                                                                                                                                                                                    | Create a full-stack serverless React.js app that connects to an API secured using Cognito. Uses the [`ReactStaticSite`](https://docs.serverless-stack.com/constructs/ReactStaticSite) and [`Auth`](https://docs.serverless-stack.com/constructs/Auth) construct. | [Link](https://serverless-stack.com/chapters/using-cognito-to-add-authentication-to-a-serverless-app.html)                 |
| [nextjs-app](nextjs-app)                                                                                                                                                                                                                                                                                                                                            | Create a full-stack serverless Next.js click counter app on AWS using the [`NextjsSite`](https://docs.serverless-stack.com/constructs/NextjsSite) construct.                                                                                                     | [Link](https://serverless-stack.com/examples/how-to-create-a-nextjs-app-with-serverless.html)                              |
| [vue-app](vue-app)                                                                                                                                                                                                                                                                                                                                                  | Create a full-stack serverless Vue.js click counter app on AWS using the [`StaticSite`](https://docs.serverless-stack.com/constructs/StaticSite) construct.                                                                                                      | [Link](https://serverless-stack.com/examples/how-to-create-a-vuejs-app-with-serverless.html)                               |
| [svelte-app](svelte-app)                                                                                                                                                                                                                                                                                                                                            | Create a full-stack serverless Svelte click counter app on AWS using the [`StaticSite`](https://docs.serverless-stack.com/constructs/StaticSite) construct.                                                                                                      | [Link](https://serverless-stack.com/examples/how-to-create-a-svelte-app-with-serverless.html)                              |
| [expo-app](expo-app)                                                                                                                                                                                                                                                                                                                                                | Create a full-stack serverless Expo click counter app on AWS using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct for the serverless API.                                                                                               | [Link](https://serverless-stack.com/examples/how-to-create-an-expo-app-with-serverless.html)                               |
| [flutter-app](flutter-app)                                                                                                                                                                                                                                                                                                                                          | Create a full-stack serverless Flutter click counter app on AWS using the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct.                                                                                                                   | [Link](https://serverless-stack.com/examples/how-to-create-a-flutter-app-with-serverless.html)                             |
| [cron-job](cron-job)                                                                                                                                                                                                                                                                                                                                                | Create a cron job in your serverless app using the [`Cron`](https://docs.serverless-stack.com/constructs/Cron) construct.                                                                                                                                        | [Link](https://serverless-stack.com/examples/how-to-use-cron-jobs-in-your-serverless-app.html)                             |
| [queue](queue)                                                                                                                                                                                                                                                                                                                                                      | Create a queue system in your serverless app using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Queue`](https://docs.serverless-stack.com/constructs/Queue) constructs.                                                                   | [Link](https://serverless-stack.com/examples/how-to-use-queues-in-your-serverless-app.html)                                |
| [pub-sub](pub-sub)                                                                                                                                                                                                                                                                                                                                                  | Create a pub/sub system in your serverless app using the [`Api`](https://docs.serverless-stack.com/constructs/Api) and [`Topic`](https://docs.serverless-stack.com/constructs/Topic) constructs.                                                                 | [Link](https://serverless-stack.com/examples/how-to-use-pub-sub-in-your-serverless-app.html)                               |
| [bucket-resize-image](bucket-image-resize)                                                                                                                                                                                                                                                                                                                          | Automatically resize images that are uploaded to an S3 bucket. Uses the [`Bucket`](https://docs.serverless-stack.com/constructs/Bucket) construct.                                                                                                               | [Link](https://serverless-stack.com/examples/how-to-automatically-resize-images-with-serverless.html)                      |
| [datadog](datadog)                                                                                                                                                                                                                                                                                                                                                  | A walkthrough on how to monitor your serverless app with Datadog.                                                                                                                                                                                                | [Link](https://serverless-stack.com/examples/how-to-use-datadog-to-monitor-your-serverless-app.html)                       |
| [sentry](sentry)                                                                                                                                                                                                                                                                                                                                                    | A walkthrough on how to monitor your serverless app with Sentry.                                                                                                                                                                                                 | [Link](https://serverless-stack.com/examples/how-to-use-sentry-to-monitor-your-serverless-app.html)                        |
| [vscode](vscode)                                                                                                                                                                                                                                                                                                                                                    | A walkthrough on how to use SST to debug Lambda functions live with VS Code.                                                                                                                                                                                     | [Link](https://serverless-stack.com/examples/how-to-debug-lambda-functions-with-visual-studio-code.html)                   |
| [webstorm](webstorm)                                                                                                                                                                                                                                                                                                                                                | A walkthrough on how to use SST to debug Lambda functions live with WebStorm.                                                                                                                                                                                    | [Link](https://serverless-stack.com/examples/how-to-debug-lambda-functions-with-webstorm.html)                             |
| [intellij-idea](intellij-idea)                                                                                                                                                                                                                                                                                                                                      | A walkthrough on how to use SST to debug Lambda functions live with IntelliJ IDEA.                                                                                                                                                                               | [Link](https://serverless-stack.com/examples/how-to-debug-lambda-functions-with-intellij-idea.html)                        |
| [layer-chrome-aws-lambda](layer-chrome-aws-lambda)                                                                                                                                                                                                                                                                                                                  | Use Layers in your serverless app to take screenshots of webpages. Uses the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct.                                                                                                                 | [Link](https://serverless-stack.com/examples/how-to-use-lambda-layers-in-your-serverless-app.html)                         |
| [middy-validator](middy-validator)                                                                                                                                                                                                                                                                                                                                  | Use Middy in your serverless app to validate API request and response schemas. Uses the [`Api`](https://docs.serverless-stack.com/constructs/Api) construct.                                                                                                     | [Link](https://serverless-stack.com/examples/how-to-use-middy-to-validate-your-serverless-api-requests.html)               |
| [prisma](prisma)                                                                                                                                                                                                                                                                                                                                                    | Create a Layer to use Prisma in your serverless app.                                                                                                                                                                                                             |                                                                                                                            |

## Getting Started

You can try any of these examples by running.

```bash
$ npm init serverless-stack --example <example>

# Or with Yarn
$ yarn create serverless-stack --example <example>
```

So to try the [`vscode`](vscode) example, run.

```bash
$ npm init serverless-stack --example vscode
```

This'll create a new SST app in a `vscode/` directory.

```bash
$ cd vscode
$ cd npx sst start
```

## Documentation

Learn more about the SST.

- [Docs](https://docs.serverless-stack.com/)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)

## Contributing

To add an example:

1. Checkout this repo
2. Create a new directory at the root with the name of the example
3. Add the example code
4. Format the code by

   Running Prettier for JS at the root

   ```bash
   $ yarn
   $ yarn run prettier
   ```

   Running the following in a dir with Go files

   ```bash
   $ go fmt
   ```

5. Submit a PR!

And [join us on Slack](https://serverless-stack.com/slack).