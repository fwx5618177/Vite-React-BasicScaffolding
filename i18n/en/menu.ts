/**
 * En
 */

const backgroundSide = {
    layoutBg: 'background',
}

const dashboardSideMenu = {
    defaultMain: 'Default Main Page',
    defaultOps: 'Default Work',
    sidemenu: 'Menu',
}

const menuSideForm = {
    routemenushow: 'backgroundset',
    routekey: 'route key',
    routelabel: 'route name',
    routepath: 'route path',
    routeicon: 'route icon',
    routeindex: 'route sequence',
    routechild: 'child',
    routecomponent: 'components',
    routeoutlet: 'outlet',
    routecasesensitive: 'case sensitive',
    'button.submit': 'submit',
    'button.reset': 'reset',
    'routemenushow.text': 'Please input!',
    'routekey.text': 'Please input!',
    'routelabel.text': 'Please input!',
    'routepath.text': 'Please input!',
    'routeicon.text': 'Please input!',
    'routeindex.text': 'Please input!',
    'routechild.text': 'Please input!',
    'routecomponent.text': 'Please input!',
    'routeoutlet.text': 'Please input!',
    'routecasesensitive.text': 'Please input!',
}

export const en_menu = {
    info: 'Info',
    blog: 'Blog',
    resume: 'Resume',
    contact: 'Contact',
    ...backgroundSide,
    ...dashboardSideMenu,
    ...menuSideForm,
}
