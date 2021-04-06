import { IState } from "../interface/state";

let newState: IState;

export const updateProjectVal = (state: IState, name: String) => {
	
	newState = Object.assign({}, state);
	newState.project = name;

	return newState;
}
