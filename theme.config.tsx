import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/logo.png" alt="WinterDevs Logo" width="200" />,
  project: {
    link: 'https://github.com/winterTechnologies/WinterDevs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/winterTechnologies/WinterDevs/tree/main',
  footer: {
    text: 'Winter Technologies © 2023 - All Rights Reserved',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WinterDevs'
    }
  },
}

export default config
