const projectInfo = {
  token: process.env.ACCESS_TOKEN,
  owner: 'lorryrio',
  projectName: 'biu',
  csv: { delimiter: ',' },
  cacheTTL: 3000,
  type: 'json',
};

const xueqiuHeaders = {
  cookie: "acw_tc=2760826016703053083845056eafeaf3de2d9276efff3e7d1caa2dd7a249f6; xq_a_token=df4b782b118f7f9cabab6989b39a24cb04685f95; xqat=df4b782b118f7f9cabab6989b39a24cb04685f95; xq_r_token=3ae1ada2a33de0f698daa53fb4e1b61edf335952; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY3MjE4Njc1MSwiY3RtIjoxNjcwMzA1Mjc1Nzk1LCJjaWQiOiJkOWQwbjRBWnVwIn0.hpmo2mKzkW9DJVQc6yE0312bp9uVL4ygtvSlAnrW-8P0d1nyIUrVuqm2w06UgvbkmwcYxmrMyQHTuEt18uLWcHd1HV9p2RPqlBaeXAoxMT122ebuZPzLecYJXAkTy6xmwW_Uer3GsKah3rrkS4NKO2hKzUq8dRCI4kODf-xj_7_5FHuWN3MFPXFUrf0PnX0ID27tPXbTzulAexZdjNZfq-FwjwsLiTH_TeQp7lRDZMtrqc12bvW8aWqqWuz4ghf-zoGorxe_vlT159GXlakwPU-_IWsruUrbmMwfZ6AzXgmi0jsRNymFdTgzRJmCkLRjyytvvoOxsPKkYcwtpcENsA; u=491670305308398; device_id=fd6b2c504960a1dccd47172c2db8abf6; Hm_lvt_1db88642e346389874251b5a1eded6e3=1670305310; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1670305310; is_overseas=0",
}

module.exports = {
  projectInfo,
  xueqiuHeaders
}
