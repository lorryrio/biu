const projectInfo = {
  token: process.env.ACCESS_TOKEN,
  owner: 'lorryrio',
  projectName: 'biu',
  csv: { delimiter: ',' },
  cacheTTL: 3000,
  type: 'json',
};

const xueqiuHeaders = {
  cookie: "device_id=872d680be07e87d7a0567855601882a2; s=d81388rlgu; bid=7d76f81313e928302ebc83a5f6b086a7_kxctihx7; Hm_lvt_1db88642e346389874251b5a1eded6e3=1644544968; xq_a_token=92d0f5c8a64407bc997a9c96d787d5c1a3a62abb; xqat=92d0f5c8a64407bc997a9c96d787d5c1a3a62abb; xq_r_token=21b1ccf01dd825578c48545867ba54eacdb130d4; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY0NzU1ODc1OSwiY3RtIjoxNjQ0OTc5NDQ0MzM2LCJjaWQiOiJkOWQwbjRBWnVwIn0.mo18dx0lLeQIuegp91Oo7IqGC9dipuTHWtK_TVR8ef_HDam69DvT3lUkUNItmZhHJxr6mEYr11UIXPbwA3PM8WqO_7vr-WVERds59VXpxowT3x3RNRSqUxmKCRw9TlHtll5VmnvCSRruUG7TGDARqeqgTIRh4rcDP8Oxk_951sKny8frDWn-RzoK-PrjZU15hwnUTjfcu__IoVhJflwdv7VIL5uTSZ4mbYpYHASlO-rN1lrTdPyt-L3qhTxvS6zhJDbQ7VjTZairFdyPg163-P6W4tqsmBFIkCayRWYX9U-j9LQnanXY7lSHg5U94n0bpK25fzAL2aX0lhCWr-JDRQ; u=771644979503906; is_overseas=0; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1644979517",
}

module.exports = {
  projectInfo,
  xueqiuHeaders
}
