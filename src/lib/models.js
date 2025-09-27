import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: {type: Srting},
    isAdmin: {type: Boolean, default: false},
    isActive: {type: Boolean, default: true},
    phone: {type: String},
    address: {type: String}
}, {timestamps: true})


const productSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min:0 },
    stock: { type: Number, required: true, min:0 },
    image: {type: Srting},
    color: {type: String},
    size: {type: String}
}, {timestamps: true})


export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);