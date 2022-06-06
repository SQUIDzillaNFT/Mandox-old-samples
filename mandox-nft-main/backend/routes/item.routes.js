const multer = require('multer');
const fs = require('fs');
const controller = require('../controllers/item.controller');

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
      const dir = 'images/items'
      if (!fs.existsSync(dir)) fs.mkdir(dir, err => cb(err, dir))
      cb(null, 'images/items/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + "-" + Date.now())
    },
  })

  const upload = multer({ storage: storage })

  app.post(
    "/item/create",
    upload.single('file'),
    controller.createItem
  );
  
  app.post("/item/buy", controller.buyItem);
  app.get("/items/all", controller.getAllItems);
  app.get("/items/wallet", controller.getItems);
  app.get("/items/collectionId", controller.getItemsPerCollection);
  app.get("/item", controller.getItem);
  app.post("/item/star/update", controller.updateItemStar);
  // app.post("/item/star/decrease", controller.decreaseItemStar);
};