const unsplash = require("../helpers/unsplash");

exports.list_photos = (req, res, next) => {
    const page = req.body.page;
    const perPage = req.body.perPage;
    const orderBy = req.body.orderBy;

    unsplash.photos
        .listPhotos(page, perPage, orderBy)
        .then((data) => data.json())
        .then((photos) => {
            res.status(200).json({
                total: photos.length,
                photos: photos,
            });
        });
};

exports.list_collections = (req, res, next) => {
    const page = req.body.page;
    const perPage = req.body.perPage;
    const orderBy = req.body.orderBy;

    unsplash.collections
        .listCollections(page, perPage, orderBy)
        .then((data) => data.json())
        .then((collections) => {
            res.status(200).json({
                total: collections.length,
                collections: collections,
            });
        });
};

exports.create_collection = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;

    unsplash.collections
        .createCollection(title, description, true)
        .then((data) => data.json())
        .then((result) => {
            res.status(200).json({
                collection: result,
            });
        });
};

exports.add_photo_collection = (req, res, next) => {
    const collectionId = req.params.collection_id;
    const photoId = req.params.photo_id;

    unsplash.collections
        .addPhotoToCollection(collectionId, photoId)
        .then((data) => data.json())
        .then((result) => {
            res.status(200).json({
                result,
            });
        })
        .catch((err) =>
            res.status(500).json({
                error: err,
            })
        );
};
