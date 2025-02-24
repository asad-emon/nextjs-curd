export const page = {
    userProfileEdit: (params) => `/user/profile/edit/${params.userId}`,
};

export const api = {
    getUser: (params) => `/api/user/${params.id}`,
    getPosts: () => '/api/posts',
};
