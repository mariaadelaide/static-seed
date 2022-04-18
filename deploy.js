require('dotenv-flow').config();

const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_DEPLOY_USER,
  password: process.env.FTP_DEPLOY_PASSWORD,
  host: process.env.FTP_DEPLOY_HOST,
  port: process.env.FTP_DEPLOY_PORT,
  localRoot: __dirname + "/dist",
  remoteRoot: process.env.FTP_DEPLOY_REMOTE_ROOT,
  include: ["*", "**/*"],
  deleteRemote: true,
  sftp: process.env.FTP_DEPLOY_SFTP
};

console.log(`📦 Deploying to ${process.env.FTP_DEPLOY_SFTP ? 'sftp' : 'ftp'}://${process.env.FTP_DEPLOY_HOST}:${process.env.FTP_DEPLOY_PORT} ...`);

ftpDeploy
  .on('uploading', data => {
    console.log(`[${data.transferredFileCount+1}/${data.totalFilesCount}] ${data.filename}`);
  })
  .deploy(config)
  .then(res => {
    console.log('✅ Deploy finished sucessfully! 🎉');
  })
  .catch(err => {
    console.log('❌ Deploy failed.');
    console.log(err);
  });
