import User from "../model/usermodels.js";

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);

        if (!userData) {
            return res.status(404).json({ message: "user data not found" });
        }
        const savedData = await userData.save();
        res.status(200).json(savedData);
    }

    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getall = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ message: "user data not found" });
        }
        res.status(200).json(userData);
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user data not found" });
        }
        res.status(200).json(userExist);
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}

export const userupdate = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user data not found for update" });
        }
        const userupdate  = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({message:"user update successfully.."});
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}

export const userDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user data not found for update" });
        }
        const userDelete = await User.findByIdAndDelete(id);
        res.status(200).json({ message: "user delete successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}