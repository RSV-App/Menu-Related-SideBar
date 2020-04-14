import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '60s',
};

export default function() {
  let ID = Math.ceil(Math.random() * 10000000);
  let res = http.get(`http://localhost:3040/api/menu/${ID}`);
  check(res, {
    "status was 200": r => r.status === 200,
    "2s threshold": r => r.timings.duration < 2000
  });
  sleep(0.1);
}
