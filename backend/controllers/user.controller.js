exports.createOneRequest = (req, res) => {
    res.status(201).json({ message: "New user created!" });
}

exports.readOneRequest = (req, res) => {
    res.status(302).json({ message: "User found"});
}

exports.updateOneRequest = (req, res) => {
    res.status(301).json({ message: "User updated"});
}

exports.deleteOneRequest = (req, res) => {
    res.status(202).json({ message: "User deleted"});
}