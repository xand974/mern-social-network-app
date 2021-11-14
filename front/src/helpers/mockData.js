export const posts = [
  {
    id: 1,
    content: "i love sand",
    notePicture:
      "https://images.unsplash.com/photo-1636845638970-13e0b2ed7630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    userId: "123",
    comments: [
      {
        id: 1233,
        body: "wow",
        date: new Date().toLocaleTimeString("fr-FR"),
      },
    ],
    likes: [266, 565, 68, 486, 4],
  },
  {
    id: 2,
    content: "seul à la mer",
    notePicture:
      "https://images.unsplash.com/photo-1626070191915-0ae0d9089132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    userId: "123",
    comments: [
      {
        id: 1233,
        body: "j'aime bien",
        date: new Date().toLocaleTimeString("fr-FR"),
      },
      {
        id: 1233,
        body: "pas mal",
        date: new Date().toLocaleTimeString("fr-FR"),
      },
    ],
    likes: [266, 565, 68, 4],
  },
  {
    id: 3,
    content: "miamiiii",
    notePicture:
      "https://images.unsplash.com/photo-1603102796296-9c152db1ba32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80",
    userId: "123",
    comments: [
      {
        id: 1233,
        body: "je veux y aller",
        date: new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          month: "long",
          day: "2-digit",
        }),
      },
    ],
    likes: [266, 486, 4],
  },
];
