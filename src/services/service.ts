import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from 'aurelia-dependency-injection';

@autoinject()
export class Service {

	constructor(private http: HttpClient){
		/*http.configure(config => {
			config
			.withDefaults({
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.useStandardConfiguration()
			.withBaseUrl('baseUrl')
		 ;
		});*/
	}

	/*getData(){
		return new Promise((resolve, reject) => {
			this.http.get(`/something`).then(data => {
				if(data){
					resolve(data.json());
				}
				else{
					reject(new Error("Can't get data"));
				}
			}).catch(err => console.log(err));
		});
	}*/

}
