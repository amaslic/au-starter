import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
import { IState } from './interface/state';
import { pluck } from 'rxjs/operators';
import { PLATFORM } from 'aurelia-pal';

import {RouterConfiguration, Router, RouteConfig} from 'aurelia-router';
import { Service } from 'services/service';
import { updateProjectVal } from 'store/actions';

@autoinject()
@connectTo<IState>({
	selector: {
		project: (store) => store.state.pipe(pluck('project'))
	}
})
export class App {
	public message = 'Hello World!';

	public state: IState;
	public router: Router;
	//public data: any; //use Interface here instead of any

	constructor(private store: Store<IState>, private service: Service){
		this.store.registerAction('UpdateProjectVal', updateProjectVal);
	}

	activate(){
			//fetchData();
			this.store.dispatch(updateProjectVal, "Aurelia Starter New");
	}

	/*fetchData = async () => {
		this.data = await this.service.getData();
	}
*/
	// fires on project global state change
	projectChanged(newState: IState, oldState: IState) {
	}

	public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
		config.title = 'Aurelia starter';

		const handleUnknownRoutes = (): RouteConfig => {
			return { route: 'not-found', moduleId: PLATFORM.moduleName('./not-found.html') };
		}

		config.map([
			{
			route: ['', 'home'],
			name: 'home',
			moduleId: PLATFORM.moduleName('./components/home/home'),
			nav: true,
			title: 'Home'
			},
			{
			route: ['about'],
			name: 'about',
			moduleId: PLATFORM.moduleName('./components/about/about'),
			nav: true,
			title: 'About'
			},
			/*{
			route: ['/:id'],
			name: 'route-with-params',
			moduleId: PLATFORM.moduleName('./components/route-with-params'),
			nav: false,
			title: 'Route with params'
			}*/
		]);

		config.mapUnknownRoutes(handleUnknownRoutes);
	
		this.router = router;
		}

}

