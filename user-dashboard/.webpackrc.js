export default {
  "proxy": {
    "/api": {
      "target": "https://dev.r1992.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}

//     "proxy": {
//     "/api": {
//         "target": "http://jsonplaceholder.typicode.com/",
//             "changeOrigin": true,
//             "pathRewrite": { "^/api" : "" }
//     }
// }
