import Response from '../utils/response';
import cloudinary from '../utils/cloudinary';
import Model from '../database/models';

const { Post } = Model;

class advertController {
  static async postAdvert(req, res) {
    const { mediaFile } = req.files;
    mediaFile.mv(`./src/public/${mediaFile.name}`);

    const file = await cloudinary.uploader.upload(
      `./src/public/${mediaFile.name}`,
      { resource_type: 'auto' },
    );

    const post = await Post.create({
      ownerId: req.userData.id,
      asset: req.body.asset,
      owner: req.body.owner,
      price: req.body.price,
      mediaFile: file.secure_url,
      fileType: `${file.resource_type}/${file.format}`,
    });
    await Response.setSuccess(201, 'Your post was created', post);
    return Response.send(res);
  }
}

export default advertController;
