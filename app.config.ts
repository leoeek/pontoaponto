// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Ponto a ponto',
    backToTop: {
      text: 'Voltar para topo',
    },
    description: 'Um ponto pode mudar 99 pontos',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.png', // path of the logo
        pathDark: '/logo-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: '---' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/leoeek' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      // twitter: 'eek_',
      instagram: 'leoeek',
      // linkedin: {
      //   icon: 'uil:linkedin',
      //   label: 'LinkedIn',
      //   href: 'https://www.linkedin.com/in/leonardo-procopio/'
      // }
    },
    form: {
      successMessage: 'Mensagem enviada! Obrigado!'
    }
  }
})
