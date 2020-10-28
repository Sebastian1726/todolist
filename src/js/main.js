let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: false,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: false,
  },
  {
    id: 3,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 4,
    name: "Replicar el eje del profe 4",
    done: false,
  },
];

let done = [
  {
    id: 5,
    name: "XXXX",
    done: true,
  },
];

let listContainer;
let listDoneContainer;

let options = {
  group: 'todolist',
  animation: 100,
  onAdd: function(data){
    if(data.to.id === 'list-done'){
      console.log("done");
    }else{
      console.log("not done");
    }
  }
}

window.addEventListener('load', function(){
  var app = new Vue({
    el: '#todo-app',
    data: {
      title: 'What do I need to do today!',
      list: list,
      newTaskName: ''
    },
    computed: {
      todoList(){
        return this.list.filter((task) => !task.done);
      },
      doneList(){
        return this.list.filter((task) => task.done);
      }
    },
    methods: {
      createTask(){
        this.list.push({
          id: list.length + 1,
          name: this.newTaskName,
          done: false,
        });
        this.newTaskName = ''
      }
    }
  })
});