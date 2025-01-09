"use client";

import { followUnfollowUser } from "@/actions/user.action";
import { Button } from "./ui/button";
import { useState } from "react";

interface FollowButtonProps {
    followStatus: boolean | number; 
    otherUserId: string; 
}

const FollowButton = ({ followStatus, otherUserId }: FollowButtonProps) => {
    const [isFollowing, setIsFollowing] = useState(followStatus);
    const [isLoading, setIsLoading] = useState(false);

    const followHandler = async () => {
        if (!otherUserId) return;

        try {
            setIsLoading(true);
            console.log("Follow handler triggered");
            const response = await followUnfollowUser(otherUserId);
            console.log("Response:", response);

            // Toggle follow status
            setIsFollowing((prev) => !prev);
        } catch (error) {
            console.error("Error following/unfollowing user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button variant="ghost" onClick={followHandler} disabled={isLoading}>
            {isLoading ? "Loading..." : isFollowing ? "Unfollow" : "Follow"}
        </Button>
    );
};

export default FollowButton;
