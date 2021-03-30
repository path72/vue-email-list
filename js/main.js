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

					/**
					 * il ciclo for fa tempo a terminare 
					 * lasciando in coda i risultati dei axios.get(),
					 * prima che venga attivato il primo axios.then()
					 * (la lunghezza dell'array è sempre zero fino al primo axios.then())
					 */
					for(let i=0; i<this.listLength; i++) {
						this.addRndEmailToList();
					}

				},3000);

			},
			addRndEmailToList() {
				axios
					.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then((resp) => {
						this.emailList.push(resp.data.response);
					});
			}
		},
		created() {

		},
		mounted() {

			this.buildEmailList();

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


