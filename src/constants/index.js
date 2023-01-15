/****** RIGHTBAR ******/
export const userInfo = [
  {
    id: 1,
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    name: "Ana Nguyen"
  },
  {
    id: 2,
    profile:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ryan Pham"
  },
  {
    id: 3,
    profile:
      "https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Michael Hebert"
  }
];

export const lastestActivity = [
  {
    name: userInfo[0],
    activity: "changed their cover picture",
    date: "1 min ago"
  },
  {
    name: userInfo[1],
    activity: "like your post",
    date: "10 min ago"
  },
  {
    name: userInfo[2],
    activity: "like your comment",
    date: "1 hour ago"
  },
  {
    name: userInfo[0],
    activity: "post",
    date: "2 hour ago"
  }
];

export const onlineFriends = [
  {
    user: "Jane Doe",
    profile:
      "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
  },
  {
    user: "Jonnatha Tretta",
    profile:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  },
  {
    user: "Angelo Cage",
    profile:
      "https://images.unsplash.com/photo-1429114753120-0733a750d6c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
  },
  { user: userInfo[0].name, profile: userInfo[0].profile },
  { user: userInfo[1].name, profile: userInfo[1].profile },
  { user: userInfo[2].name, profile: userInfo[2].profile }
];

/*************** Stories ***************/

export const stories = [
  {
    id: userInfo[0].id,
    name: "johnson Herb",
    img:
      "https://images.unsplash.com/photo-1535182539448-8bf2aee81484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: userInfo[1].id,
    name: "Zack Mon",
    img:
      "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: userInfo[2].id,
    name: "Jane Finch",
    img:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
  },
  {
    id: userInfo[1].id,
    name: "Kennedy Scar",
    img:
      "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
  },
  {
    id: userInfo[0].id,
    name: "Violet Jetta",
    img:
      "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  }
];

export const posts = [
  {
    id: userInfo[0].id,
    name: userInfo[0].name,
    userId: 1,
    profilePic: userInfo[0].profile,
    date: "a few second ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
    img:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: userInfo[1].id,
    name: userInfo[1].name,
    userId: 2,
    profilePic: userInfo[1].profile,
    date: "2 hours ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
    img: ""
  },
  {
    id: userInfo[2].id,
    name: userInfo[2].name,
    userId: 3,
    profilePic: userInfo[2].profile,
    date: "1 day ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
    img:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: userInfo[0].id,
    name: userInfo[0].name,
    userId: 4,
    profilePic: userInfo[0].profile,
    date: "2 weeks ago",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    img:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNvY2lhbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
  }
];

export const comments = [
  {
    id: userInfo[0].id,
    name: userInfo[0].name,
    profilePic: userInfo[0].profile,
    userId: 1,
    date: "1 min ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
  },
  {
    id: userInfo[1].id,
    name: userInfo[1].name,
    profilePic: userInfo[1].profile,
    userId: 2,
    date: "2 hours ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
  },
  {
    id: userInfo[2].id,
    name: userInfo[2].name,
    profilePic: userInfo[2].profile,
    userId: 3,

    date: "1 day ago",
    desc:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
  },
  {
    id: userInfo[0].id,
    name: userInfo[0].name,
    profilePic: userInfo[0].profile,
    userId: 4,
    date: "2 weeks ago",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];
