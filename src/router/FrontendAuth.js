import { Component } from "react";
import { Route, Redirect} from "react-router-dom";

// const ROOT_PAGE   = "/";
const LOGIN_PAGE  = "/login";
const ERROR_PAGE  = "/error";
const HOME_ERROR_PAGE  = "/Home/error";

class FrontendAuth extends Component {

    render() {
        let pathname = this.props.location.pathname;
        const pathnameUp=pathname;//路由备份
        //验证是否位二级路由
        if(pathname.indexOf('Home')===1){
            pathname="/Home"
        }
        // 获取登录状态
        const isLogin = sessionStorage.token;
        // 获取权限校验的路由
        let targetRouterConfig = this.props.routerConfig.find(item => item.path === pathname);
        // 验证是为二级路由
        if(targetRouterConfig && targetRouterConfig.path==='/Home'){
            targetRouterConfig=targetRouterConfig.children.find(item=>item.path===pathnameUp)
        }
        //登录状态下地址是否有误
        if(isLogin && !targetRouterConfig){
            return <Redirect to={{pathname:HOME_ERROR_PAGE,state:{type:2}}} />;
        }
        //非登录状态下,该路由是否需要验证登录
        if (!isLogin && targetRouterConfig  && targetRouterConfig.auth) {
            // // 如果是登陆状态，想要跳转到登陆，重定向到主页
            // if (pathname === LOGIN_PAGE) {
            //     return <Redirect to={ROOT_PAGE} />;
            // } 
            if (targetRouterConfig) {
                return <Redirect to={LOGIN_PAGE} />;
            }
            return <Redirect to={{pathname:ERROR_PAGE,state:{type:1}}} />;
        }
        //返回路由
        if(targetRouterConfig){
            return this.props.routerConfig.map((item,key) => {
                return (
                    <Route exact={item.exact} path={item.path} key={key}
                    render={props => (
                        <item.component {...props} routes={item.children} />
                    )} />
                )
            })
        }
        //错误路由
        return <Redirect to={{pathname:ERROR_PAGE,state:{type:1}}} />;

    }
}
export default FrontendAuth;