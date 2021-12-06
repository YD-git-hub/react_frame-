import { lazy } from 'react';
const router = [
    {
        path:'/',
        component:lazy(()=>import('@/views/index/index/index.jsx')),
        exact:true
    },
    {
        path:'/official',
        component:lazy(()=>import('@/views/index/official/official.jsx')),
        exact:true
    },
    {
        path:'/Home',
        component:lazy(()=>import('@/views/index/home/home.jsx')),
        exact:false,
        children:[
            {
                path: "/Home/index",
                component: lazy(() => import('@/views/Home/index/index.jsx')),
                exact: true,
            }
        ]
    }
]
export default router