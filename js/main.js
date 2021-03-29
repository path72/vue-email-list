//######################################################
//# Vue.js - MAIN INSTANCE                             #
//######################################################

var app = new Vue(
	{
		el: '#app',
		data: {
			listLength: 10,
			counter: 0,
			emailList: []
		},
		methods: {
			buildEmailList() {

				setTimeout(()=>{

					for(let i=0; i<this.listLength; i++) {
						this.addRndEmailToList();

						// !!! qui la lista ha sempre lunghezza 0 (anche aspettando il prossimo update) !!!
						this.$nextTick(()=>{
							console.log('buildEmailList > for > lunghezza: '+this.emailList.length);
						});

					}

					// !!! qui la lista ha sempre lunghezza 0 (anche aspettando il prossimo update) !!!
					this.$nextTick(()=>{
						console.log('buildEmailList > lunghezza: '+this.emailList.length);
					});

				},3000);

			},
			addRndEmailToList() {
				axios
					.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then((resp) => {
						this.emailList.push(resp.data.response);

						// !!! qui è l'unico posto dove la lista ha lunghezza diversa da zero !!!
						console.log('#'+this.counter+' '+resp.data.response+' length='+this.emailList.length); this.counter++;
					});

				// !!! qui la lista ha sempre lunghezza 0 (anche aspettando il prossimo update) !!!
				this.$nextTick(()=>{
					console.log('addRndEmailToList > lunghezza: '+this.emailList.length);
				});
			}
		},
		created() {

		},
		mounted() {

			this.buildEmailList();

			// !!! qui la lista ha sempre lunghezza 0 (anche aspettando il prossimo update) !!!
			this.$nextTick(()=>{
				console.log('mounted > lunghezza: '+this.emailList.length);
			});

		}
	}
);
// Vue.config.devtools = true;

//######################################################
//# jQuery - DYNAMICS                                  #
//######################################################

// $(function() {
// // ********************* doc ready start ***


// // *********************** doc ready end ***
// });

//######################################################
//# FUNCTIONS                                          #
//######################################################


