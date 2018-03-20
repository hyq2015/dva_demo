import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import {Component} from 'react';
import React from 'react';
import { Button } from 'antd';
class Product extends Component{
    constructor(props){
        super(props);
        this.changePage=this.changePage.bind(this)
        this.addCount=this.addCount.bind(this)
    }
    componentDidMount(){
        if(!this.props.user){
            this.props.dispatch({
                type:'products/request'
            })
        }else{
            console.log(this.props.user);
        }
        // this.props.dispatch({
        //     type:'products/request'
        // })

    }
    changePage(){
        this.props.dispatch(routerRedux.push({
            pathname: '/notfound'
        }));
    }
    addCount(){
        this.props.dispatch({
            type:'products/addCount'
        });
    }
    render(){
        return(
            <div>
                <span>商品页面</span>
                <div>{this.props.total}</div>
                {this.props.loading ?
                    <Button type="primary" loading>
                        Loading
                    </Button> : null
                }
                <Button type="primary" onClick={this.changePage}>点击跳转</Button>
                <Button type="primary" onClick={this.addCount}>增加数字</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { list, total, page,user } = state.products;
    return {
        list,
        total,
        page,
        user,
        loading: state.loading.models.products,
    };
}

export default connect(mapStateToProps)(Product);
