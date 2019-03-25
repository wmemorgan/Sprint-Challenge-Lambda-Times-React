const theme = {
  color: {
    primaryColor: '#1363A8',
    primaryDark: '#0F5080',
    primaryBgShading: '#F5F8FA',
    secondaryColor: '#4195D2',
    secondaryBgShading: '#7F969F',
    accent: '#ED5D28',
    emphasis: '#03100D',
    darkText: '#595959',
    lightText: '#FFFFFF',
    danger: 'red'
  },

  colorScheme: {
    logoColor: () => { return theme.color.emphasis },
    headerBgColor: () => { return theme.color.lightText },
    headerFontColor: () => { return theme.color.emphasis },
    footerBgColor: () => { return theme.color.lightText },
    footerFontColor: () => { return theme.color.emphasis },
    headingColor: () => { return theme.color.darkText },
    defaultFontColor: () => { return theme.color.darkText },
    defaultLinkColor: () => { return theme.color.secondaryColor },
    containerBgColor: () => { return theme.primaryBgShading },
    cardBgColor: () => { return theme.secondaryBgShading },
    defaultBorderColor: 'lightgray'
  },

  fontStyles: {
    logoFont: "'Oleo Script', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    headingFont: "Roboto, 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    defaultFont: "'Open Sans', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif"
  },

  fontSizing: { // Based on CSS default font-resizing of 62.5%
    xxs: '1rem',
    xs: '1.3rem', // base size for mobile view
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