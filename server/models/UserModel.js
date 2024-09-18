const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    animals: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Animal'
    }],
    adoption_requests: [{
        animal: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Animal'
        },
        request_status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
