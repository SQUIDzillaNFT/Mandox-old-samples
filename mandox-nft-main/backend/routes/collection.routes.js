const multer = require('multer');
const fs = require('fs');
const controller = require('../controllers/collection.controller');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = 'images/collections'
      if (!fs.existsSync(dir)) fs.mkdir(dir, err => cb(err, dir))
      cb(null, 'images/collections');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + "-" + Date.now())
    },
  })

  const upload = multer({ storage: storage })
  
  app.post(
    "/collection/create",
    upload.single('file'),
    controller.createCollection
  )

  app.get(
    "/collection",
    controller.getCollection
  )

  app.get("/collection/all", controller.getAllCollections);

  app.get("/collection/stars", controller.getCollectionStars);
  app.post("/collection/star/update", controller.updateCollectionStars);
  
};