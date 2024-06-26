import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { SecureMavenRepositoryConstruct } from "./constructs/SecureMavenRepositoryConstruct";

export class SimpleSecureMavenRepositoryTemplateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new SecureMavenRepositoryConstruct(this, "SecureMavenRepository", {
      bucketName: "replace",
    });
  }
}
