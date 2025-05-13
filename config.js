module.exports = {
  "branchPrefix": "renovate/",
  "dryRun": false,
  "username": "sidey79-self-hosted-renovate[bot]",
  "gitAuthor": "Self-hosted Renovate Bot <123456+sidey-self-hosted-renovate[bot]@users.noreply.github.enterprise.com>",
  "onboarding": true,
  "platform": "github",
  "includeForks": true,
  "autodiscover": true,
  "packageRules": [
    {
      "description": "lockFileMaintenance",
      "matchUpdateTypes": [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance"
      ],
      "dependencyDashboardApproval": false,
      "stabilityDays": 0
    },
    {
      "description": "Linuxserver IO",
      "packagePatterns": ["^(gh|ls)cr.io\\/linuxserver\\/"],
      "versioning": "regex:^(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)\\.(?<build>\\d+)-ls(?<revision>\\d+)$"
    }
  ]
};





