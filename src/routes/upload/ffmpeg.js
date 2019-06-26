const path = require('path');
const exec = require('child_process').exec;
let ffmpegPath =
  process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '../../../ffmpeg/win/bin/ffmpeg.exe') + ' -i '
    : 'ffmpeg -i ';

function computedTime(str) {
  let arr = str.split(':');
  return (parseFloat(arr[0]) * 60 * 60 + parseFloat(arr[1]) * 60 + parseFloat(arr[2])) * 1000;
}

export function readDuration(url) {
  return new Promise((reslove, reject) => {
    exec(ffmpegPath + url, function(err, stdout, stderr) {
      try {
        if (err) {
          // reject(err);
          let outStr = err.toString();
          let time = outStr.match(/Duration: ([0-9:.]+),/);
          reslove(computedTime(time[1]));
        } else {
          let outStr = stderr.toString();
          let time = outStr.match(/Duration: ([0-9:.]+),/);
          reslove(computedTime(time[1]));
        }
      } catch (error) {
        reject(0);
      }
    });
  });
}
