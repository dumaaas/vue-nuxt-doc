export const state = () => ({
  docs: [{
      id: 1,
      page: "directives",
      title: "Direktive",
      date: "31. Avgust 2021",
      description: "Osnovne direktive kod Vue.JS-a.",
      img: "directives.jpg",
    },
    {
      id: 2,
      page: "customDirective",
      title: "Custom direktive",
      date: "01. Septembar 2021",
      description: "Kreiranje custom direktiva.",
      img: "customDirective.png",
    },
    {
      id: 3,
      page: "methods",
      title: "Methods",
      date: "01. Septembar 2021",
      description: "Metode i data property u Vue-u.",
      img: "methods.jpg",
    },
    {
      id: 4,
      page: "computed",
      title: "Computed properties",
      date: "02. Septembar 2021",
      description: "Osnovno znacenje i upotreba computed property-a.",
      img: "computed.jpg",
    },
    {
      id: 5,
      page: "watchers",
      title: "Watchers",
      date: "03. Septembar 2021",
      description: "Vue reaktivnost uz pomoc watchersa.",
      img: "watchers.jpg"
    },
    {
      id: 6,
      page: "animations",
      title: "Animacije",
      date: "09. Septembar 2021",
      description: "Razliciti nacini za rad sa animacijama i tranzicijama.",
      img: "animations.jpg"
    }
  ]
})

export const getters = {
  getDoc: (state) => (id) => {
    var doc = state.docs.find(item => item.id === id);
    if(doc == undefined) return;
    return doc;
  },
}
