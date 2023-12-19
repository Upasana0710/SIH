import Community from '../models/community.js';
import User from '../models/user.js';

export const createCommunity = async (req, res) => {
    try {
        const communityData = req.body;
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });

        // Create a new community with the user as the creator
        const newCommunity = new Community({
            ...communityData,
            admin: req.user, // Assuming you have a field called 'admin' in your Community model
            members: [req.user], // Add the creator to the members array
        });

        // Save the new community
        await newCommunity.save();

        // Update the user model with the new community
        const updatedUser = await User.findByIdAndUpdate(
            req.user,
            {
                $addToSet: { communities: newCommunity._id }, // Add the community id to the communities array
            },
            { new: true }
        );

        // Return a success message or the created community
        return res.status(201).json(newCommunity);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCommunities = async(req, res) => {
    try{
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
        const communities = await Community.find();
        return res.json(communities);
    }catch(error){
        console.log(error);
        return res.json(error);
    }
}

export const getCommunity = async(req, res) => {
    try{
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
        const {id}=req.params;
        const community = await Community.findById(id).populate('posts');
        return res.json(community);
    }catch(error){
        console.log(error);
        return res.json(error);
    }
}

export const joinCommunity = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ message: 'Unauthenticated.' });
        
        const communityId = req.body.communityId;

        // Find the community by ID
        const community = await Community.findById(communityId);

        if (!community) {
            return res.status(404).json({ message: 'Community not found.' });
        }

        // Check if the user is already a member
        if (community.members.includes(req.user)) {
            return res.status(400).json({ message: 'User is already a member of the community.' });
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

