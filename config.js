const projectInfo = {
  token: process.env.API_KEY,
  owner: 'lorryrio',
  projectName: 'biu',
  csv: { delimiter: ',' },
  cacheTTL: 3000,
  type: 'json',
};

const xueqiuHeaders = {
  cookie: "device_id=872d680be07e87d7a0567855601882a2; s=d81388rlgu; remember=1; xq_is_login=1; u=8747575965; bid=7d76f81313e928302ebc83a5f6b086a7_kxctihx7; xq_a_token=f36db52939c88e680ce986012194ff2e63f9ca83; xqat=f36db52939c88e680ce986012194ff2e63f9ca83; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjg3NDc1NzU5NjUsImlzcyI6InVjIiwiZXhwIjoxNjQzODY4NDY5LCJjdG0iOjE2NDEyNzY0Njk1ODUsImNpZCI6ImQ5ZDBuNEFadXAifQ.nuH8gkpbEVGqpF_u_BEUTD1bOPWx62cG_kIAUNZHxzXuxGeqU7I8XSk28GKK8veSiXZMQvzDK2no7EImh9Y4gADOE-u8gsPjEdK_K2gQ0p_Vh6sLqS3-EOn5oN6qgH4YwRTqb_OjQqpMlZwLHZzRmSXSma3-_Ih13sfkq7irLt9Ht0A99SBW3462TEorbmP1WiyalIniBsLgm23VVogOvOTzELunS4xxauoVx5zZHv0x_cfOh6wbLvYbXAli5CvGP28klvNXytqe-l2M-vv0zJLurOGBoHjeOorv-MfkaTdWyVGgOsj34G6YaazoAIdSzfdFCQyDeosAaNI8MyTTvQ; xq_r_token=5a7289f7482e4baa3d324848505614496cc941bf; is_overseas=0; Hm_lvt_1db88642e346389874251b5a1eded6e3=1640919091,1640931286,1641276471,1641278914; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1641278924",
}

module.exports = {
  projectInfo,
  xueqiuHeaders
}