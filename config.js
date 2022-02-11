const projectInfo = {
  token: process.env.ACCESS_TOKEN,
  owner: 'lorryrio',
  projectName: 'biu',
  csv: { delimiter: ',' },
  cacheTTL: 3000,
  type: 'json',
};

const xueqiuHeaders = {
  cookie: "device_id=872d680be07e87d7a0567855601882a2; s=d81388rlgu; bid=7d76f81313e928302ebc83a5f6b086a7_kxctihx7; xq_a_token=512da9d222c381fa39dc775676c85ba2aa1ae80b; xqat=512da9d222c381fa39dc775676c85ba2aa1ae80b; xq_r_token=d25a8f2b3ad372c30f5f055e97403b5bbb67b77b; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY0NjI2MjI5MywiY3RtIjoxNjQ0NTQ0OTIyNzAwLCJjaWQiOiJkOWQwbjRBWnVwIn0.PZFlSHofFuQDOYGKisJCRgZj2b2AosXpJ1ymSg178XyOvUYVcZ21RWJrExmn1dG_ih9oSoz7nuVce8BZ_k40TUaeMEoqtdCyyDGdIaujKgxSF7nx1uTcA1DnCyTvbscR96TMLpHgX_gOARXmsjOV71Da_SouClwXXN9HJc3lod3FqZSymaX4RYm4kS7C6Em6BluqZdtqGJQ0998IaaE2FayS1DR_YYz7MOMOxczrPCoiJY-n7_EBU79ZEb4QthrKk6E2tpVcVPiwo2Bhv6bu-_pvsNytu4svvZOW8lHeKFiD6qhp1OKxQ4FaLM3bVc-c52pjqjQW0Ddb0s5TSDdKYg; u=161644544967652; Hm_lvt_1db88642e346389874251b5a1eded6e3=1644544968; is_overseas=0; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1644544997",
}

module.exports = {
  projectInfo,
  xueqiuHeaders
}