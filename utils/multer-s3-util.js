const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')


/*** SETTING UP AWS */
aws.config.setPromisesDependency();
aws.config.update({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey:process.env.AWS_SECRET,
    region:process.env.REGION
})
/********** SETTING UP AWS S3 */
const s3 = new aws.S3()

// let params = {
//     ACL: "public-read",
//     Bucket: process.env.BUCKET
// }

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload; 
