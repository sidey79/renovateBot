module.exports = {
  "branchPrefix": "renovate/",
  "configMigration" : true,
  "username": "sidey79-self-hosted-renovate[bot]",
  "onboarding": true,
  "platform": "github",
  "includeForks": true,
  "autodiscover": true,
  "platformAutomerge": false,
  // Erlaubt genau das Bump-Skript aus sidey79/midea-mqtt als post-upgrade task.
  // Das Muster ist bewusst exakt: allowedCommands gilt fuer jedes Repository,
  // das dieser Bot verwaltet, und ist die einzige Schranke davor, dass ein
  // Repository ueber postUpgradeTasks beliebige Befehle ausfuehrt.
  "allowedCommands": ["^\\./scripts/renovate-patch-release\\.sh$"],
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
      "minimumReleaseAge": null
    }
  ]
};





