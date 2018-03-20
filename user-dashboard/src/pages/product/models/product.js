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
        }
    },
    subscriptions:{

    }
}
