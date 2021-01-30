import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    //1. start data
    let action = addPostActionCreator("yoyo");

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new posts should be correct', () => {
    //1. start data
    let action = addPostActionCreator("yoyo");

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
   expect(newState.posts[4].message).toBe("yoyo");
});

it('after deleting length of messages should be decrement', () => {
    //1. start data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldn"t be decrement id id is incorrect', () => {
    //1. start data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});