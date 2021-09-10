enum Theme {
    imageBorderRadius = 8,
    maxPrimaryPageWidth = 1400
}

enum Colors {
    secondaryColor = '#01b4e4',
    white = '#fff',

    scrollerGrey = 'rgb(219,219,219)',
    lightGrey = 'rgb(227,227,227)',
    darkerGrey = 'rgb(200,200,200)',
    tmdbDarkBlue = 'rgb(3,37,65)',
    tmdbLightBlue = 'rgb(1,180,228)',
    tmdbLighterGreen = 'rgb(192,254,207)',
    tmdbLightGreen = 'rgb(30,213,169)',
    tmdbLogoGreen = 'rgb(144,206,161)',
    tmdbLogoOrange = 'rgb(253,193,112)',
    tmdbLogoRed = 'rgb(217,59,99)',
    accountSilver = 'rgb(149,149,149)',
    accountPink = 'rgb(234,20,140)',
    accountPurple = 'rgb(128,91,231)',
    accountGreen = 'rgb(1,210,119)',
    accountTeal = 'rgb(1,198,172)',
    accountLightBlue = 'rgb(1,180,228)',
    accountBlue = 'rgb(1,119,210)',
    accountOrange = 'rgb(210,119,1)',
    accountYellow = 'rgb(210,144,1)',
    accountRed = 'rgb(212,2,66)'
}

export type ThemeItemName = keyof typeof Theme;
export type ColorName = keyof typeof Colors;

export { Theme, Colors };
