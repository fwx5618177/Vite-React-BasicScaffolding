import { HomeOutlined, PieChartOutlined, TableOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { RoutesPageI } from './interface'
import { WindowStack, Images, MenuButtonFill, BoxArrowDownRight, Box, Badge3d, Journal } from 'react-bootstrap-icons'

/**
 * @description 路由-菜单的配置列表
 * @description {key, icon, label} 菜单栏
 * @description {components, path, index, caseSensitive, children} 路由菜单
 * @description {index, path} - index为false时,path生效 - TODO:增加排序
 * @description {outlet, components} - outlet 为true时, components不生效
 * @description {menuShow} - 主体背景设置。设置为false时,菜单展示中不显示
 */
export const menuConf: RoutesPageI[] = [
    {
        key: 'layout',
        icon: <Images />,
        label: <Link to={'/'}>layoutBg</Link>,
        components: '../pages/Layout.tsx',
        path: '/',
        menuShow: false,
        children: [
            {
                key: '/',
                icon: <HomeOutlined />,
                label: <Link to={'/'}>defaultMain</Link>,
                components: '../pages/main/index.tsx',
                path: '/',
                index: true,
                children: [],
            },
            {
                key: 'dashboard',
                icon: <WindowStack />,
                label: 'defaultOps',
                outlet: true,
                path: 'dashboard',
                children: [
                    {
                        key: 'sidemenu',
                        icon: <MenuButtonFill />,
                        label: <Link to={'/dashboard/sidemenu'}>sidemenu</Link>,
                        components: '../pages/dashboard/sidemenu/index',
                        // index: true,
                        path: 'sidemenu',
                        children: [],
                    },
                    {
                        key: 'menucontent',
                        icon: <Journal />,
                        label: <Link to={'/dashboard/menucontent'}>menucontent</Link>,
                        components: '../pages/dashboard/menucontent/index',
                        // index: true,
                        path: 'menucontent',
                        children: [],
                    },
                ],
            },
            {
                key: 'charts',
                icon: <PieChartOutlined />,
                label: 'charts',
                outlet: true,
                path: 'charts',
                children: [
                    {
                        key: 's2table',
                        icon: <TableOutlined />,
                        label: <Link to={'/charts/s2table'}>charts.s2</Link>,
                        components: '../pages/charts/s2table/index',
                        path: 's2table',
                        children: [],
                    },
                    {
                        key: 'x6flow',
                        icon: <BoxArrowDownRight />,
                        label: <Link to={'/charts/x6flow'}>charts.x6</Link>,
                        components: '../pages/charts/x6flow/index',
                        path: 'x6flow',
                        children: [],
                    },
                    // {
                    //     key: 'l7',
                    //     icon: <Badge3d />,
                    //     label: <Link to={'/charts/l7'}>charts.l7</Link>,
                    //     components: '../pages/charts/l7/index',
                    //     path: 'l7',
                    //     children: [],
                    // },
                    // {
                    //     key: 'ava',
                    //     icon: <Box />,
                    //     label: <Link to={'/charts/ava'}>charts.ava</Link>,
                    //     components: '../pages/charts/ava/index',
                    //     path: 'ava',
                    //     children: [],
                    // },
                ],
            },
        ],
    },
]

/**
 * 路由的错误配置
 */
export const errorRoutes: RoutesPageI[] = [
    {
        key: '404',
        icon: '',
        path: '*',
        label: '404',
        components: '../error/404',
    },
]
