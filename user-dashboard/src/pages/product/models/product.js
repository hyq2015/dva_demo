import XHR from '../../../utils/xhr'
export default {
    namespace:'products',
    state:{
        list: [1,2,3],
        total: 1,
        page: 1,
    },
    reducers:{
        saveUser(state,{payload:user}){
            return {...state,user}
        },
        increment(state,{payLoad:{total:totalCount}}){//解构赋值
            // {payLoad:{total:totalCount}}
            // console.log(totalCount)
            console.log(totalCount)
            return {...state,total:totalCount}
        }
    },
    effects:{
        *request({},{call,put}){
            yield console.log('开始请求')
            let user=yield XHR('userLogin',{
                "nickname":"ricky","mobile":"18030638805","password":"ricky"
            });
            yield put({
                type:'saveUser',
                payload: user
            });
        },
        *addCount({},{call,put,select}){
            let state=yield select(state=>state);
            console.log(state.products)
            yield put({
                type:'increment',
                payLoad:{
                    total:state.products.total+1
                }
            })
        }
    },
    subscriptions:{

    }
}
