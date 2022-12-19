import { getImageUrl } from "./utils";

export const notifications = [
  {
    id: 1,
    user: {
      name: "Mark Webber",
      image: {
        src: getImageUrl("avatar-mark-webber.webp"),
        alt: "",
      },
    },
    action: {
      type: "react",
      text: "reacted to your recent post",
      link: "My first tournament today!",
    },
    date: "1m ago",
    hasBeenRead: false,
  },
  {
    id: 2,
    user: {
      name: "Angela Gray",
      image: {
        src: getImageUrl("avatar-angela-gray.webp"),
        alt: "",
      },
    },
    action: {
      type: "follow",
      text: "followed you",
    },
    date: "5m ago",
    hasBeenRead: false,
  },
  {
    id: 3,
    user: {
      name: "Jacob Thompson",
      image: {
        src: getImageUrl("avatar-jacob-thompson.webp"),
        alt: "",
      },
    },
    action: {
      type: "group",
      text: "has joined your group",
      link: "Chess Club",
    },
    date: "1 days ago",
    hasBeenRead: false,
  },
  {
    id: 4,
    user: {
      name: "Rizky Hassaunddin",
      image: {
        src: getImageUrl("avatar-rizky-hasanuddin.webp"),
        alt: "",
      },
    },
    action: {
      type: "message",
      text: "sent you a private message",
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
      I'm already having lots of fun and improving my game.`,
    },
    date: "5 days ago",
    hasBeenRead: true,
  },
  {
    id: 5,
    user: {
      name: "Kimberly Smith",
      image: {
        src: getImageUrl("avatar-kimberly-smith.webp"),
        alt: "",
      },
    },
    action: {
      type: "comment",
      text: "commented on your picture",
      image: {
        src: getImageUrl("image-chess.webp"),
        alt: "",
      },
    },
    date: "1 week ago",
    hasBeenRead: true,
  },
  {
    id: 6,
    user: {
      name: "Nathan Peterson",
      image: {
        src: getImageUrl("avatar-nathan-peterson.webp"),
        alt: "",
      },
    },
    action: {
      type: "react",
      text: "reacted to your recent post",
      link: "5 end-game strategies to increase your win rate",
    },
    date: "2 weeks ago",
    hasBeenRead: true,
  },
  {
    id: 7,
    user: {
      name: "Anna Kim",
      image: {
        src: getImageUrl("avatar-anna-kim.webp"),
        alt: "",
      },
    },
    action: {
      type: "group",
      text: "left the group",
      link: "Chess Club",
    },
    date: "2 weeks ago",
    hasBeenRead: true,
  },
];
