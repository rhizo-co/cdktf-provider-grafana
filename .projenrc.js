const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  authorName: "grafana",
  packageName: "rhizo-co-terraform-provider-grafana",
  githubNamespace: "rhizo-co",
  useCustomGithubRunner: false,
  terraformProvider: "grafana/grafana@~> 3.16.0",
  cdktfVersion: "0.16.0",
  constructsVersion: "10.2.23",
  minNodeVersion: "20.18.1",
  jsiiVersion: "^5.0.1",
  devDeps: ["@cdktf/provider-project@^0.2.95"],
});

project.synth();
