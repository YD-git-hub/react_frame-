import {
    lazy
} from 'react';
const router = [
    // 前台首页
    {
        path: '/',
        component: lazy(() => import('@/views/FrontDesk/Index')),
        exact: true
    },
    // 注册
    {
        path: '/register',
        component: lazy(() => import('@/views/FrontDesk/Register')),
        exact: true
    },
    // 企业资料
    {
        path: '/enterprise',
        component: lazy(() => import('@/views/FrontDesk/Enterprise')),
        exact: true
    },
    // 登录
    {
        path: '/login',
        component: lazy(() => import('@/views/FrontDesk/Login')),
        exact: true
    },
    // 查询
    {
        path:'/inquire',
        component:lazy(()=>import('@/views/FrontDesk/Inquire')),
        exact:true
    },
    {
        path: '/Home',
        component: lazy(() => import('@/views/FrontDesk/Home/home.jsx')),
        exact: false,
        children: [
            // 后台首页
            {
                path: "/Home/index",
                component: lazy(() => import('@/views/Home/index/index.jsx')),
                exact: true,
            },
            {
                path: "/Home/account", // 账户管理
                component: lazy(() => import('@/views/Home/account/account.jsx')),
                exact: true,
            },
            {
                path: "/Home/business", //企业管理
                component: lazy(() => import('@/views/Home/business/business.jsx')),
                exact: true,
            },
            {
                path: "/Home/business_datail", //企业详情
                component: lazy(() => import('@/views/Home/business/business_datail.jsx')),
                exact: true,
            },
            {
                path: "/Home/system", //系统设置
                component: lazy(() => import('@/views/Home/system/system.jsx')),
                exact: true,
            },
            {
                path: "/Home/operation", //操作记录
                component: lazy(() => import('@/views/Home/operation/operation.jsx')),
                exact: true,
            },
            {
                path: "/Home/ClientGl", //客户管理
                component: lazy(() => import('@/views/Home/ClientGl/ClientGl.jsx')),
                exact: true,
            },
            {
                path: "/Home/ClientMd", //客户管理
                component: lazy(() => import('@/views/Home/ClientMd/ClientMd.jsx')),
                exact: true,
            },
            {
                path: "/Home/Order", //订单管理
                component: lazy(() => import('@/views/Home/Order/Order.jsx')),
                exact: true,
            },
            {
                path: "/Home/productionPlant", // 生产工厂
                component: lazy(() => import('@/views/Home/productionPlant/productionPlant.jsx')),
                exact: true,
            },
            {
                path: "/Home/productionOrder", // 生产订单
                component: lazy(() => import('@/views/Home/productionOrder/productionOrder.jsx')),
                exact: true,
            },
            {
                path: "/Home/productionOrder_datail",// 生产订单详情
                component: lazy(() => import('@/views/Home/productionOrder/productionOrder_datail.jsx')),
                exact: true,
            },
            {
                path: "/Home/Order_datail", //订单详情
                component: lazy(() => import('@/views/Home/Order/Order_datail.jsx')),
                exact: true,
            },
            {
                path: "/Home/Finance", //财务管理
                component: lazy(() => import('@/views/Home/Finance/Finance.jsx')),
                exact: true,
            },
            {
                path: "/Home/Common_datail", //财务详情_客户详情
                component: lazy(() => import('@/views/Home/Common/Common_datail.jsx')),
                exact: true,
            },
            {
                path: "/Home/Market",//财务管理
                component: lazy(() => import('@/views/Home/Market/Market.jsx')),
                exact: true,
            },
            {
                path: "/Home/Market_datail",//财务详情_客户详情
                component: lazy(() => import('@/views/Home/Market/Market_datail.jsx')),
                exact: true,
            },
            {
                path: "/Home/salesman",//CRM管理_业务管理
                component: lazy(() => import('@/views/Home/Crm/salesman.jsx')),
                exact: true,
            },
            {
                path: "/Home/sales",//CRM管理_销售数据
                component: lazy(() => import('@/views/Home/Crm/sales.jsx')),
                exact: true,
            },
            {
                path: "/Home/sales_deatail",//CRM管理_销售数据详情
                component: lazy(() => import('@/views/Home/Crm/sales_deatail.jsx')),
                exact: true,
            },
            {
                path: "/Home/Materials",//原材料管理
                component: lazy(() => import('@/views/Home/Materials/Materials.jsx')),
                exact: true,
            },
            {
                path: "/Home/deliveryOrder",// 发货订单管理
                component: lazy(() => import('@/views/Home/deliveryOrder/deliveryOrder.jsx')),
                exact: true,
            },
            {
                path: "/Home/stores",// 门店管理
                component: lazy(() => import('@/views/Home/Stores/index.jsx')),
                exact: true,
            },
            {
                path: "/Home/Clampmes",// 压板厂管理
                component: lazy(() => import('@/views/Home/Clampmes/index.jsx')),
                exact: true,
            },
            {
                path: "/Home/product",// 产品管理产品列表
                component: lazy(() => import('@/views/Home/Product/index.jsx')),
                exact: true,
            },
            {
                path: "/Home/addoroduct",// 产品管理添加产品
                component: lazy(() => import('@/views/Home/Product/addoroduct.jsx')),
                exact: true,
            },
            {
                path: "/Home/poroductType",// 产品类型管理
                component: lazy(() => import('@/views/Home/Product/poroductType.jsx')),
                exact: true,
            },
            {
                path: "/Home/specifications",// 产品规格管理
                component: lazy(() => import('@/views/Home/Product/specifications.jsx')),
                exact: true,
            },
            {
                path: "/Home/StoresAdd",// 压板厂管理
                component: lazy(() => import('@/views/Home/Stores/StoresAdd.jsx')),
                exact: true,
            },
        ]
    }
]
export default router