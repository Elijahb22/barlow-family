const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
      post: [
        {
          type: Schema.Types.ObjectId,
          ref: 'post'
        }
      ],
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );

const User = model('User', userSchema);

module.exports = User;