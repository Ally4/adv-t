import Model from '../database/models';
// import { cryptionToken } from '../utils/jsonwebtoken';

const { messages } = Model;

class Messages {
  static async sendMessages(req, res) {
    try {
      const { receiver } = req.params;
      const sender = req.user.id;
      const newMessage = {
        message: req.body.message,
        sender,
        receiver,
      };
      // const token = cryptionToken({ receiver, sender });
      const message = await messages.create(newMessage);
      return res.status(201).json({
        status: 201,
        response: 'This is the message you have just sent',
        message,
        // token,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        messages: `This is the error from the server ${error}`,
      });
    }
  }

  static async getMessages(req, res) {
    try {
      const receiver = req.user.id;
      const message = await messages.findAll({
        where: { sender: receiver },
      });
      return res.status(200).json({
        status: 200,
        response: 'These are the messages you are looking for',
        message,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        messages: `This is the error from the server ${error}`,
      });
    }
  }

  static async getMessage(req, res) {
    try {
      const { id } = req.params;
      const message = await messages.findAll({
        where: { id },
      });
      if (!message) {
        return res.status(404).json({
          status: 404,
          message: 'The message you are looking for to edit is not in the system',
        });
      }
      return res.status(200).json({
        status: 200,
        response: 'These are the messages you are looking for',
        message,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        messages: `This is the error from the server ${error}`,
      });
    }
  }

  static async editMessage(req, res) {
    try {
      const message = await messages.findOne({
        where: { id: req.params.id },
      });
      if (!message) {
        return res.status(404).json({
          status: 404,
          message: 'The message you are looking for to edit is not in the system',
        });
      }
      message.update(req.body);
      return res.status(201).json({
        status: 201,
        response: 'The message have been edited successfully',
        message,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `This is the error from the server ${error}`,
      });
    }
  }

  static async deleteMessage(req, res) {
    try {
      const message = await messages.findOne({
        where: { id: req.params.id },
      });
      if (!message) {
        return res.status(404).json({
          status: 404,
          message: 'The message you are looking for to edit is not in the system',
        });
      }
      message.destroy(req.body);
      return res.status(200).json({
        status: 200,
        response: 'The message have been deleted successfully',
        message,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `This is the error from the server ${error}`,
      });
    }
  }
}

export default Messages;
