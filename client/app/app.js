angular.module('routerApp', ['routerRoutes'])

.controller('mainController', function() {
  var vm = this;

  vm.message = ['Ian Bulmer', 'Software Engineer' ];
})

.controller('homeController', function () {
  var vm = this;
  vm.message = 'Welcome'
})

.controller('aboutController', function () {
  var vm = this;
  console.log('about')
  vm.message = ['I love building beautiful, functional, applications', 'What can I build for you?'];
})

.controller('projectsController', function () {
  var vm = this;
  vm.array = [
  {
    title: 'Codeout',
    description: 'Google hangouts meets programming',
    link: 'http://www.codeout.us',
    screenshots: ["../../assets/images/codeout1.png", "../../assets/images/codeout2.png", "../../assets/images/codeout3.png"],
  },

  {
    title: 'Stockly',
    description: 'Stock tracking application built for mobile',
    link: 'https://morning-garden-82607.herokuapp.com',
    screenshots: ["../../assets/images/stockly1.png", "../../assets/images/stockly2.png", "../../assets/images/stockly3.png"],
  },

  {
    title: 'Crime Reporter',
    description: 'Crowd-sourced crime map',
    link: 'https://crime-reporter.herokuapp.com',
    screenshots: ["../../assets/images/crime1.png", "../../assets/images/crime2.png", "../../assets/images/crime3.png"],

  },

  {
    title: 'Homecooked',
    description: 'The Air-Bnb of homecooked meals',
    link: 'http://home-cooked.herokuapp.com/',
    screenshots: ["../../assets/images/cook1.png", "../../assets/images/cook2.png", "../../assets/images/cook3.png"],

  }];
})

.controller('contactController', function () {
  console.log('contact!');
  var vm = this;
  vm.email = 'Ian.bulmer89@gmail.com'
})