export const state = () => ({
    docs: [{
        id: 1,
        page: "directives",
        title: "Direktive",
        date: "31. Avgust 2021",
        content: "Osnovne direktive kod Vue.JS-a.",
        img: "directives.jpg",
      },
      {
        id: 2,
        page: "customDirective",
        title: "Custom direktive",
        date: "01. Septembar 2021",
        content: "Kreiranje custom direktiva.",
        img: "customDirective.png",
      },
      {
        id: 3,
        page: "methods",
        title: "Methods",
        date: "01. Septembar 2021",
        content: "Metode i data property u Vue-u.",
        img: "methods.jpg",
      },
      {
        id: 4,
        page: "computed",
        title: "Computed properties",
        date: "02. Septembar 2021",
        content: "Osnovno znacenje i upotreba computed property-a.",
        img: "computed.jpg",
      }
    ]
  })
  
  export const getters = { 
    getDoc: (state, id) => {
      return state.docs.find(item => item.id === id);
    }
  }