const Cart = require("../models/cartModel");

// ----------------- get All Users -----------------
// getAllUsers
exports.getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({
      status: "success",
      results: carts.length,
      data: {
        carts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//createUser
exports.createCart = async (req, res) => {
  const { id_courses, id_user, courseName, price, image } = req.body;

  try {
    const cart = await Cart.addCart(
      id_courses,
      id_user,
      courseName,
      price,
      image
    );
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// getUser
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// updateUser
exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// deleteUser
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
