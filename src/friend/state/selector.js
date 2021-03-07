import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
    [getFriends, getAgeLimit],
    (friends, ageLimit) => {
        console.log('re calculated');
        return friends.filter(item => item.age <= ageLimit)
    },
)

// 메모이제이션
export const getFriendsWithAgeShowLimit = createSelector(
    [getFriendsWithAgeLimit, getShowLimit],
    (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
);