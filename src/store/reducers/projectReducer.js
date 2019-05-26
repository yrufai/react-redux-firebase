const initialState = {
  projects: [
    {
      id: 1,
      title: "help me find peace",
      content: "Lorem ipsum dolor sit amet consectetur"
    },
    {
      id: 2,
      title: "we shall make in the name of Allah",
      content: "Lorem ipsum dolor sit amet consectetur"
    },
    {
      id: 3,
      title: "game of thrones",
      content: "ipsum dolor sit, amet consectetur adipisicing elit"
    },
    {
      id: 4,
      title: "the blacklist",
      content: "ipsum dolor sit, amet consectetur adipisicing elit"
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
