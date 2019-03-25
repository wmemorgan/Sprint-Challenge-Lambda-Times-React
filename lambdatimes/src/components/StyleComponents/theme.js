const theme = {
  color: {
    primaryColor: '#333',
    primaryDark: '#0F5080',
    primaryBgShading: '#F1F1F1',
    secondaryColor: '#4195D2',
    secondaryBgShading: '#7F969F',
    accent: '#ED5D28',
    emphasis: '#03100D',
    darkText: '#333',
    lightText: '#FFF',
    danger: 'red'
  },

  colorScheme: {
    logoColor: () => { return theme.color.emphasis },
    headerBgColor: () => { return theme.color.primaryColor },
    headerFontColor: () => { return theme.color.lightText },
    footerBgColor: () => { return theme.color.primaryColor },
    footerFontColor: () => { return theme.color.lightText },
    headingColor: () => { return theme.color.primaryColor },
    defaultFontColor: () => { return theme.color.darkText },
    defaultLinkColor: () => { return theme.color.secondaryColor },
    containerBgColor: () => { return theme.primaryBgShading },
    cardBgColor: () => { return theme.secondaryBgShading },
    defaultBorderColor: 'lightgray'
  },

  fontStyles: {
    logoFont: "Didot, serif",
    headingFont: "Didot, serif",
    defaultFont: "'PT Sans', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif"
  },

  fontSizing: { // Based on CSS default font-resizing of 62.5%
    xxs: '1rem',
    xs: '1.2rem', // base size for mobile view
    s: '1.6rem', // base size for text
    sm: '1.8rem', // base size for menu and button text
    m: '2rem', // base heading/sub-heading size
    ml: '3rem', // base headline size
    l: '4rem', // for big emphasis
    xl: '5rem', // ultra large
    xxl: '6rem' // site banner headline
  },

  breakpoints: [
    '(max-width: 600px)',
    '(min-width: 768px)',
    '(min-width: 801px)'
  ],
  // for media queries -- express them as @media ${theme.breakpoints[0]} {styles here}
  // in the arr, the first is for mobile, second is for portrait tablet, third is for desktop
  flex: (direction='row',align='normal',justify='normal') => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`

}

export default theme

export const { color, colorScheme, fontStyles, fontSizing, breakpoints, flex } = theme