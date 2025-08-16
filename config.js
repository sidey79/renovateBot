module.exports = {
  "branchPrefix": "renovate/",
  "dryRun": false,
  "username": "sidey79-self-hosted-renovate[bot]",
  "onboarding": true,
  "platform": "github",
  "includeForks": true,
  "autodiscover": true,
  "platformAutomerge": false,
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
    }
  ]
};





