const pageConfig = {
  // Title for your status page
  title: "Status Monitor | BitLab",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://bitlab.lk/', label: 'BitLab' },
    //{ link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:contact@bitlab.lk', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'bitlab_main_web',
      name: 'BitLab | Website',
      method: 'POST',
      target: 'https://bitlab.lk',
      statusPageLink: 'https://bitlab.lk',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'bitlab_main_web2',
      name: 'BitLab | Website',
      method: 'POST',
      target: 'https://bitlab.lk',
      statusPageLink: 'https://bitlab.lk',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'bitlab_main_web3',
      name: 'BitLab | Website',
      method: 'POST',
      target: 'https://bitlab.lk',
      statusPageLink: 'https://bitlab.lk',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  // notification: {
  //   appriseApiServer: "https://apprise.example.com/notify",
  //   recipientUrl: "tgram://bottoken/ChatID",
  //   timeZone: "Asia/Shanghai",
  //   gracePeriod: 5,
  // },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
