const loc = localStorage;

vueList = new Vue({
    el: '#list',
    data:{

        title: "",
        filter: "all",

        eventList: []
    },
    computed: {
        filteredList(){
            if (this.filter === "all"){
                return this.eventList;
            }
            if (this.filter === "completed"){
                return this.eventList.filter(t => t.completed);
            }
            if (this.filter === "not-completed"){
                return this.eventList.filter(t => !t.completed);
            }
        }
    },
    methods: {
        removeEvent(event){
            this.eventList = this.eventList.filter(t => t !== event);
            this.save();

        },

        addEvent(event){
            this.eventList.push(event);
        },

        onSubmit(){
            if(this.title.trim()) {
                newEvent = {
                    title: this.title,
                    completed: false
                }
                this.addEvent(newEvent);
                this.title = "";
                this.save();
            }
        },

        save(){
            localStorage.clear();
            stri = JSON.stringify(this.eventList);
            localStorage.setItem("events", stri);
        },
        load(){
            eventList = JSON.parse(localStorage.getItem("events"));
            eventList = eventList ? eventList : [];
            this.eventList = eventList;
        }
    }
});

vueList.load();