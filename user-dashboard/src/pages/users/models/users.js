import * as usersService from '../../../services/users';

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        page: null,
    },
    /**
     * 以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。
     * */
    reducers: {
        save(state, {payload: {data: list, total, page}}) {
            console.log('返回请求结果3')
            return {...state, list, total, page};
        },
    },
    /**
     * 以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。
     * 由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。
     * */
    effects: {
        *fetch({payload: {page = 1}}, {call, put}) {
            console.log('开始出发请求回调2')
            const {data, headers} = yield call(usersService.fetch, {page});
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: parseInt(headers['x-total-count'], 10),
                    page: parseInt(page, 10),
                },
            });
        },
    },
    /**
     * subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行，
     * 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等
     * */
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/users') {
                    console.log('开始出发请求回调1')
                    dispatch({type: 'fetch', payload: query});
                }
            });
        },
    },
};
