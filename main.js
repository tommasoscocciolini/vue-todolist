var app = new Vue({
  el: '#root',
  data:{
    newTodo: '',
    editedTodo: '',
    remArray : [],
    statusBtn : '',
    todos:[
    {
      title: 'Spesa',
      status: 'todo',
    },
    {
      title: 'Leggere e-mail',
      status: 'todo',
    },
    {
      title: 'Annaffiare',
      status: 'done',
    }
  ]
  },
  methods: {
    addTodo: function() {
      if (this.newTodo != "") {
        let newobj = {
          title: this.newTodo,
          status: "todo",
        }
        this.todos.push(newobj);
        this.newTodo = "";
      }
    },
    check: function(todo) {
      let i = this.todos.indexOf(todo)
      this.todos[i].status = "done";
    },
    remove: function(todo) {
      // let removedArray = []
      let i = this.todos.indexOf(todo)
      this.todos[i].status = "removed";

      this.remArray.push(this.todos[i].title)
      //console.log(this.remArray);
    },
    btnCheck: function () {
      if (this.statusBtn == "clicked") {
        this.statusBtn = ""
      } else {this.statusBtn = 'clicked';}
      //console.log(this.statusBtn);
    },
    edit: function (todo) {
      let i = this.todos.indexOf(todo)
      if (this.todos[i].status == "editing") {
        this.fastEdit(todo)
      } else {
          this.todos[i].status = "editing"
          //console.log(this.todos[i]);
        }
    },
    fastEdit: function (todo) {
      let i = this.todos.indexOf(todo)
      this.todos[i].status = "todo"
      // this.todos[i].title = ''
      this.todos[i].title = this.editedTodo
      //console.log(this.todos[i].title);
      this.editedTodo = ''
    }
  },
  computed: {
    todosComputed: function() {
      let arDone= this.todos.filter((todo) => todo.status == 'done');
      let arTodo= this.todos.filter((todo) => todo.status == 'todo');
      let editingAr = this.todos.filter((todo) => todo.status == 'editing');
      return [...editingAr,...arTodo, ...arDone];
    },
    // editingComputed: function(){
    //
    //   let editingAr = this.todos.filter((todo) => todo.status == 'editing');
    //   return editingAr
    // }
  },
});
