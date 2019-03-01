import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import 'typeface-roboto';
import 'typeface-titillium-web';
import '@fortawesome/fontawesome-free/js/all';
import merge from 'deepmerge';

export const colors = {
  important: 'red',
  contentCard: {
    dark: '#1a1a1a',
    light: '#ffffff',
  },
  background: {
    // Color de fondo
    dark: '#000000',
    light: '#f5f6f6',
  },
  text: {
    light: '#000',
    faded: '#b5b9c4',
    grey: '#a4a4a4',
    blue: '#2b62c2',
    white: '#ffffff',
    green: '#00C663',
  },
  colorButtom: {
    buttonCancel: '#E31C5B',
    buttonAction: '#00C663',
  },
  underLine: {
    dark: '#242834',
    light: '#d3d4da',
    colorTab: '#2352A6',
  },
};

export function getColor() {
  return {
    headerTitle: '#969bac',
    subheaderTitle: '#6c738a',
    background: '#f5f6f6',
    input: '#fff',
    head: '#f9f9fb',
    hoverSecondary: '#f5f7fa',
    hoverBorderSecondary: '#ecedf0',
    borderSecondary: '#dfe2ea',
    colortextButtonSec: '#6C738A',
    selectedPrimary: '#ecedf0',
    dialogoDivider: '#f5f6f6',
    colorAction: '#00C663',
    colorTextNotify: '#969bac',
    colorTextDate: '#6c738a',
    colorTextDivider: '#627095',
    colorGrayLight: '#a6a9b7',
    backgroundCard: '#fff',
    outline: '#dfe2ea',
    opacityBorder: 'rgba(223, 226, 234, 1)',
    opacityButtomHover: 'rgba(223, 226, 234, 0.8)',
    text: {
      primary: '#6C738A',
      secondary: '#6C738A',
    },
    primary: {
      main: '#6C738A',
      contrastText: '#fff',
    },
    settingsBackground: '#f8f8f9',
    iconHeaderColor: '#00c663',
    scrollTrackBackgroundColor: '#DFE1E6',
    scrollThumbBackgroundColor: '#6c738a',
    seedAdormentColor: '#6c738a',
    seedAdormentBackgroundColor: '#f5f6f6',
    seedInputBorderBottom: '#F1F1F4',
    seedInputDisabled: '#6C738A',
    actionPaginator: 'rgb(249, 249, 251)',
    settingsButton: 'white',
    circleEasy: '#ffffff',
    labelEasyTrade: '#a4a4a4',
    tabPrimary: '#9094a5',
  };
}

export function getTheme() {
  const colors = getColor();

  const themeOptions: ThemeOptions = {
    props: {
      MuiDialogTitle: {
        disableTypography: true,
      },
      MuiFormControl: {
        fullWidth: true
      },
      MuiInput: {
        fullWidth: true,
        disableUnderline: true,
      },
      MuiInputLabel: {
        shrink: true,
      },
      MuiPaper: {
        elevation: 1,
        square: true,
      },
    },
    overrides: {
      MuiToolbar: {
        gutters: {
          '@media(min-Width: 600px)': {
            padding: '0 0 0 30px',
          },
        },
      },

      MuiInput: {
        root: {
          opacity: 1,
          backgroundColor: colors.input,
          minWidth: '60%',
          borderRadius: 2,
          paddingRight: '4px',
          paddingLeft: '10px',
          border: `1px solid ${colors.opacityBorder}`,
          '&$focused': {
            borderColor: colors.colorAction,
            '& .material-icons svg': { fill: colors.colorAction },
          },
        },
        multiline: {
          border: 'none',
          borderBottom: '1px solid',
        },

        input: {
          textOverflow: 'ellipsis',
          fontFamily: 'Titillium Web',
          color: colors.text.primary,
          fontWeight: 400,
        },
      },
      MuiFormControl:{
        root:{
          minWidth:'60%'
        }
      },
      MuiDialog: {
        paper: {
          width: 498,
        },
        paperScrollPaper: {
          maxHeight: 512,
        },
      },
      MuiTableCell: {
        body: {
          color: colors.text.secondary,
          fontSize: 12,
          fontWeight: undefined,
        },
        paddingDense: {
          paddingLeft: 10,
          paddingRight: 10,
        },
        head: {
          background: colors.head,
          color: colors.text.secondary,
          fontFamily: 'Roboto',
          fontSize: '10px',
          '& .material-icons': { textAlign: 'right', marginLeft: 3 },
          '& .material-icons svg': { marginRight: 0 },
        },
        root: {
          fontFamily: 'Titillium Web',
          verticalAlign: 'middle',
          paddingTop: 3,
          paddingRight: 10,
          paddingBottom: 3,
          paddingLeft: 1,
          borderBottom: 'none',
          '&:last-child': { paddingRight: 20 },
          '&:first-child': { paddingLeft: 20 },
        },
        numeric: {
          flexDirection: 'row',
        },
      },
      MuiButton: {
        root: {
          textTransform: 'initial',
          borderRadius: '2px',
          boxShadow: 'none',
          minHeight: '30px',
        },
        colorInherit: {
          backgroundColor: '#EA2864',
          borderRadius: '2px',
          boxShadow: 'none',
          color: '#fff',
          '&:hover': {
            opacity: 0.9,
            backgroundColor: '#EA2864',
          },
        },
        containedPrimary: {
          color: '#fff',
          backgroundColor: colors.colorAction,
          borderRadius: '2px',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#00b158',
            borderRadius: '2px',
          },
          '&:seleted': {
            border: '1px solid #00c663',
            backgroundColor: colors.borderSecondary,
          },
        },

        contained: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: colors.primary.main,
        },
        containedSecondary: {
          border: `1px solid ${colors.borderSecondary}`,
          backgroundColor: 'transparent',
          color: colors.colortextButtonSec,
          '&:hover': {
            border: `1px solid ${colors.hoverBorderSecondary}`,
            backgroundColor: colors.hoverSecondary,
            '@media (hover:none)': {
              backgroundColor: colors.hoverSecondary,
            },
          },
        },
        textSecondary: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: colors.colortextButtonSec,
          '&:hover': {
            color: colors.colorAction,
            backgroundColor: 'transparent',
          },
        },
        raisedPrimary: {
          '&:hover': {
            color: 'white',
            backgroundColor: '#17A646',
            // Reset on mouse devices
          },
        },
        outlined: {
          opacity: 1,
          borderRadius: 2,
          paddingTop: '2px',
          paddingBottom: '2px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: colors.opacityBorder,
        },

        outlinedSecondary:{
           color: 'red',
           borderColor:'red'
        }
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: '0px',
          marginRight: '16px',
        },
      },
      MuiInputLabel: {
        root: {
          '& + [class*=MuiInput-formControl]': {
            marginTop: 16,
          },
          '& + [class*=variantA]': {
            marginTop: 16,
          },
          '& + [class*=variantB]': {
            marginTop: 25,
          },
        },
      },
      MuiTabs: {
        root: {
          backgroundColor: colors.head,
          minHeight: '40px',
          height: '40px',
        },
        indicator: {
          backgroundColor: 'transparent',
        },
      },
      MuiTab: {
        root: {
          fontSize: 12,
          color: '#959aab',
          '@media(min-Width: 960px)': {
            minWidth: '80px',
            fontSize: 12,
          },
          minHeight: '40px',
          height: '40px',
          '&$selected': {
            backgroundColor: colors.backgroundCard,
            color: `${colors.colorTextDate} !important`,
          },
        },
        textColorSecondary: {
          color: 'black',
          backgroundColor: 'white',
        },
        textColorPrimary: {
          color: colors.tabPrimary,
          fontWeight: 700,
          '&$selected': {
            color: colors.primary.main,
          },
        },
      },

      MuiCardHeader: {
        root: {
          paddingLeft: '20px',
          '@media (min-width:600px)': {
            paddingLeft: '20px',
          },
        },
        subheader: {
          color: '#fff !important',
        },
        title: {
          fontWeight: 700,
          lineHeight: '18px',
          fontSize: '18px',
          color: getColor().colorAction,
        },
      },
      MuiFormHelperText: {
        root: {
          position: 'fixed',
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: '13px',
          color: colors.text.primary,
          '&$disabled': {
            color: colors.text.primary,
          },
          '&$focused': {
            color: colors.text.primary 
          },
        },
      },
      MuiIconButton: {
        root: {
          width: 31,
          height: 31,
        },
        colorPrimary: {
          color: colors.primary.main,
        },
        colorSecondary: {
          color: '#e8e9ed',
        },
      },
      MuiInputAdornment: {
        root: {
          maxHeight: '3em',
        },
        positionEnd: {
          marginLeft: '2px',
        },
      },
      MuiDialogTitle: {
        root: {
          paddingLeft: 20,
          paddingTop: 14,
          fontSize: 12,
          fontWeight: 500,
          color: colors.colorAction,
          height: 40,
          fontFamily: 'Roboto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: 'rgba(228, 232, 239, 0.47)',
        },
        inset: {
          marginBottom: 10,
          marginLeft: 0,
        },
      },
      MuiDialogContentText: {
        root: {
          color: colors.colorTextDate,
          padding: '24px 45px 0px 45px',
          textAlign: 'center',
        },
      },
      MuiDialogContent: {
        root: {
          padding: '0 20px 20px',
          overflowY: 'hidden',
        },
      },
      MuiDialogActions: {
        root: {
          justifyContent: 'flex-end',
          padding: '0 20px',
          margin: '8px 0 20px 0',
        },
        action: {
          minHeight: '30px',
          height: '30px',
          '&:first-child': {
            marginLeft: 0,
          },
          '&:last-child': {
            marginRight: 0,
          },
        },
      },

      MuiAppBar: {
        colorPrimary: {
          backgroundColor: colors.backgroundCard,
          boxShadow: 'none',
        },
      },
      MuiBadge: {
        root: {
          top: -4,
          width: 'auto',
          right: 0,
          height: 15,
        },
        colorSecondary: {
          color: colors.colorTextDate,
          backgroundColor: colors.colorAction,
          height: 15,
          width: 15,
          top: -3,
          left: 12,
        },
      },

      MuiTypography: {
        caption: {
          fontSize: '12px',
        },
        colorInherit: {
          color: '#00C663',
        },
        colorSecondary: {
          color: '#EA2864',
        },
        colorTextSecondary: {
          color: '#969bac'
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: 'none',
        },
      },

     
      MuiSelect: {
        select: {
          '& + [class*=variantA]': {
            fontWeight: 700,
          },
          paddingRight: '20px',
          paddingLeft: 10,
          textTransform: 'capitalize',
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        selectMenu: {
          textAlign: 'inherit',
        },
        icon: {
          color: '#b5b9c4',
        },
      },
      MuiExpansionPanel: {
        root: {
          backgroundColor: colors.head,
        },
        expanded: {
          marginBottom: 0,
        },
      },
      MuiExpansionPanelSummary: {
        root: {
          minHeight: '40px',
          height: '40px',
        },
      },
      MuiExpansionPanelDetails: {
        root: {
          minHeight: '40px',
          height: '40px',
          padding: '0px 24px 24px',
        },
      },
      MuiCollapse: {
        container: {
          paddingRight: '32px',
        },
      },
      MuiCardContent: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          ['@media (min-width:600px)']: {
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
      },
      MuiCardActions: {
        root: {
          padding: '20px 16px',
          '@media (min-width:600px)': {
            padding: '20px 16px',
          },
        },
      },
      MuiSvgIcon: {
        colorAction: {
          color: colors.colorAction,
        },
        colorSecondary: {
          color: colors.text.secondary,
        },
      },
      MuiTablePagination: {
        input: {
          width: '45px',
          marginLeft: '10px',
          marginRight: '10px',
        },
        select: {
          width: '10%',
          paddingLeft: '0px',
          backgroundColor: 'transparent !important',
        },
      },
    },
    palette: {
      common: {
        black: '#000',
        white: 'rgba(150, 34, 34, 1)',
      },
      background: {
        paper: colors.backgroundCard,
        default: colors.backgroundCard,
      },
      primary: {
        light: colors.colorAction,
        main: colors.colorAction,
        dark: colors.colorAction,
        contrastText: '#fff' ,
      },

      secondary: {
        light: colors.primary.main,
        main: colors.primary.main,
        dark: colors.primary.main,
        contrastText: '#fff',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },

      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        disabled: '#D8DAE0',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
    },

    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: ['Roboto'].join(','),
      fontSize: 12,
      title: {
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Roboto',
        lineHeight: '1.16667em',
      },
      body2: {
        fontFamily: 'Titillium Web',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.7
      },
      display1: {
        // color:colors.text.primary
        width: '216px',
        height: '50px',
        color: colors.colorTextNotify,
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '50px',
      },
      display3: {
        fontSize: '10px',
        width: '43px',
        height: '50px',
        color: colors.colorTextDate,
        fontFamily: 'Roboto',
        fontWeight: 400,
        lineHeight: '50px',
        textTransform: 'uppercase',
      },
      display4: {
        fontFamily: 'Titillium Web',
        fontSize: 12,
        fontWeight: 600,
      },
      body1: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 400,
        color: colors.colorGrayLight,
      },
      subheading: {
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      },
    },
  };

  const newTheme = createMuiTheme(
    merge(themeOptions, {
      typography: {
        useNextVariants: true,
      },
    })
  );

  return newTheme;
}

export const sizes = {
  sectionSpacing: 10,
};
