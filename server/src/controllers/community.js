import Community from "../models/community.js";
import User from "../models/user.js";

export const createCommunity = async (req, res) => {
  try {
    const communityData = req.body;
    if (!req.user) return res.status(401).json({ message: "Unauthenticated." });

    const newCommunity = new Community({
      ...communityData,
      members: [req.user],
      admin: [req.user],
    });

    await newCommunity.save();

    await User.findByIdAndUpdate(
      req.user,
      {
        $addToSet: { communities: newCommunity._id },
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Community successfully created!",
      community: newCommunity,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCommunities = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthenticated." });
    const communities = await Community.find();
    if (!communities)
      return res.status(404).json({ message: "No communities found." });
    return res.status(200).json({ communities: communities });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getUserCommunities = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthenticated." });
    const user_id = req.body.id;

    const user = User.findById(user_id).populate("communities");

    if (!user) return res.status(404).json({ message: "User not found." });

    return res.status(200).json({ communities: user.communities });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getCommunity = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthenticated." });
    const id = req.query.id;
    const community = await Community.findById(id).populate("posts");

    if (!community)
      return res.status(404).json({ message: "Community not found!" });

    return res.status(200).json({ community: community });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const joinCommunity = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthenticated." });

    const communityId = req.body.communityId;

    // Find the community by ID
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found." });
    }

    // Check if the user is already a member
    if (community.members.includes(req.user)) {
      return res
        .status(400)
        .json({ message: "User is already a member of the community." });
    }

    // Add the user to the members array
    community.members.push(req.user);

    // Save the updated community
    await community.save();

    // Return a success message or the updated community
    return res.status(200).json(community);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
